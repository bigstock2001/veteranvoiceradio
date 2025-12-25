export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio"],
      },
    ],
    sitemap: "https://veteranvoiceradio.com/sitemap.xml",
  };
}
