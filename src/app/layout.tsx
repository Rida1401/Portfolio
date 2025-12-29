import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Rida Najeeb",
  title: "Rida Najeeb",
  description:
    `Rida Najeeb is a computer science graduate and aspiring full-stack developer with experience in React, Next.js, cloud technologies, and web application development. Explore her projects, portfolio, and technical journey.`,
  authors: [
    {
      name: "Rida Najeeb",
      url: "https://rida1401.github.io/portfolio/",
    },
  ],
  creator: "Rida Najeeb",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: keywords,
  metadataBase: new URL("https://rida1401.github.io/portfolio/"),

  alternates: {
    canonical: "https://rida1401.github.io/portfolio/",
    languages: {
      "en-US": "https://rida1401.github.io/portfolio/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    other: {
      me: ["mailto:nrida.22@outlook.com"],
    },
  },

  appleWebApp: {
    capable: true,
    title: "Rida Najeeb",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Rida Najeeb | Full-Stack & Cloud-Focused Developer",
    description:
      "Explore Rida Najeeb’s portfolio featuring projects in React, Next.js, cloud platforms, and full-stack development. Discover modern web applications and hands-on technical work.",
    url: "https://rida1401.github.io/portfolio/",
    siteName: "Rida Najeeb",
    locale: "en_US",
    type: "website",
  },

  other: {
    "article:published_time": "2024-01-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Rida Najeeb | Full-Stack Developer",
    description:
      "Visit Rida Najeeb’s personal portfolio showcasing projects built with React, Next.js, cloud services, and modern web technologies.",
    creator: "@ridanajeeb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
