import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/private"],
      },
    ],
    sitemap: "https://rida1401.github.io/portfolio/sitemap.xml",
  };
}
