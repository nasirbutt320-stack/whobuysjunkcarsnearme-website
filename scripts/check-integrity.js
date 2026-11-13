// Fails the build if a project file looks like it has had a hidden loader
// injected. Runs before `next build` / `next dev` (see "prebuild"/"predev" in
// package.json), so it executes before postcss.config.js or any other config
// file gets loaded. Uses only built-in modules and never executes scanned
// files. Usage: node scripts/check-integrity.js [directory]

const fs = require("fs");
const path = require("path");

const root = path.resolve(process.argv[2] || path.join(__dirname, ".."));
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", ".claude", "out", "public"]);
const CODE_EXT = /\.(js|mjs|cjs|ts|tsx|jsx)$/;
const MAX_LINE = 4000;
const CONFIG_MAX_BYTES = {
  "postcss.config.js": 600,
  "next.config.mjs": 6000,
  "tailwind.config.ts": 6000,
  "tailwind.config.js": 6000,
  "eslint.config.mjs": 6000,
};

const SIGNATURES = [
  [/_\$_[0-9a-f]{3,}/i, "obfuscated-loader variable (_$_xxxx)"],
  [/String\.fromCharCode\(\s*127\s*\)/, "loader string-unscrambler"],
  [/global\s*\[\s*['"_$A-Za-z0-9]+\s*\]\s*=\s*require\b/, "global[...] = require"],
  [/global\.[A-Za-z_$]\w*\s*=\s*['"]\d-\d{3,}-[a-z]+['"]/, "loader campaign tag on global"],
  [/createRequire\s*\(\s*import\.meta\.url\s*\)[\s\S]{0,40}global\./, "createRequire header feeding a global"],
];

const problems = [];

function scanFile(file) {
  const rel = path.relative(root, file).split(path.sep).join("/");
  const base = path.basename(file);
  let text;
  try { text = fs.readFileSync(file, "utf8"); } catch { return; }

  const cap = CONFIG_MAX_BYTES[base] && path.dirname(file) === root ? CONFIG_MAX_BYTES[base] : null;
  if (cap && Buffer.byteLength(text) > cap) {
    problems.push(`${rel}: ${Buffer.byteLength(text)} bytes (a config file this size is unexpected; limit ${cap})`);
  }
  if (/[ \t]{200,}\S/.test(text)) {
    problems.push(`${rel}: code hidden after a long run of whitespace`);
  }
  const longest = text.split("\n").reduce((m, l) => Math.max(m, l.length), 0);
  if (longest > MAX_LINE) {
    problems.push(`${rel}: a single line is ${longest} characters long`);
  }
  for (const [re, label] of SIGNATURES) {
    if (re.test(text)) problems.push(`${rel}: matches ${label}`);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name));
    } else if (CODE_EXT.test(entry.name)) {
      scanFile(path.join(dir, entry.name));
    }
  }
}

walk(root);

try {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  for (const hook of ["preinstall", "install", "postinstall"]) {
    if (pkg.scripts && pkg.scripts[hook]) problems.push(`package.json: unexpected "${hook}" script`);
  }
} catch {
  problems.push("package.json: missing or unreadable");
}

if (problems.length) {
  console.error("\nINTEGRITY CHECK FAILED. Build stopped before any config file was loaded.\n");
  for (const p of problems) console.error("  - " + p);
  console.error("\nDo not run npm install/build or merge anything until this is understood.\n");
  process.exit(1);
}
console.log("integrity check passed");
