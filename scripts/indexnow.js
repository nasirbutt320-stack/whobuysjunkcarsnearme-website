// Tells IndexNow-compatible search engines (Bing, Yandex, etc.) about new or
// updated URLs. Sends only public URLs of this site, nothing else.
// Usage: node scripts/indexnow.js            -> every URL in the live sitemap
//        node scripts/indexnow.js <url> ...  -> just those URLs
const fs = require("fs");
const path = require("path");

const HOST = "whobuysjunkcarsnearme.com";
const publicDir = path.join(__dirname, "..", "public");
const keyFile = fs.readdirSync(publicDir).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error("No IndexNow key file found in public/"); process.exit(1); }
const key = keyFile.replace(".txt", "");

async function main() {
  let urls = process.argv.slice(2).filter((u) => u.startsWith(`https://${HOST}/`));
  if (urls.length === 0) {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }
  if (urls.length === 0) { console.error("No URLs to submit"); process.exit(1); }
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls.slice(0, 10000) }),
  });
  console.log(`IndexNow: submitted ${Math.min(urls.length, 10000)} URL(s), HTTP ${res.status}`);
  if (res.status >= 400 && res.status !== 422) process.exit(1);
}
main().catch((e) => { console.error(String(e)); process.exit(1); });
