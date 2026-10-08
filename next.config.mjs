/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Addresses from the old WordPress site (or typos of it) that Google still
  // requests and that currently 404. Redirects only; no live URL changes.
  async redirects() {
    return [
      { source: "/get-qoute", destination: "/get-quote/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/sell-your-used-chevrolet-for-cash-offers",
        destination: "/chevrolet/",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Note: intentionally no Content-Security-Policy here. A strict CSP
    // needs the exact script/style sources allowlisted, and getting that
    // wrong would silently break the GoHighLevel lead-tracking script this
    // site depends on -- add one separately, tested against a real form
    // submission, rather than bundled into this quick pass.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
