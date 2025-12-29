import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Rida Najeeb",
  description:
    "View and download Rida Najeeb's professional resume. Student developer with expertise in React, Next.js, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Rida Najeeb",
    description:
      "View and download Rida Najeeb's professional resume featuring her experience and skills as a student developer.",
    url: "https://rida1401.github.io/portfolio/resume",
    siteName: "Rida Najeeb",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Rida Najeeb",
    description:
      "View Rida Najeeb's professional resume and experience as a student developer.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <>
      <link
        rel="preload"
        href={`${basePath}/docs/Rida-Najeeb-Resume.pdf`}
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
