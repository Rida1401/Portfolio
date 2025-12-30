import { selfData, skillsData } from "@/constant";

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    ...(selfData.workFor && { worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    }}),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Vasavi College of Engineering",
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location?.city,
      addressRegion: selfData.current_location?.state,
      addressCountry: selfData.current_location?.country,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username?.github}`,
      `https://linkedin.com/in/${selfData.socials_username?.linkedin}`,
    ],
    url: "https://rn-portfolio.vercel.app/",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rida Najeeb - Portfolio",
    url: "https://rn-portfolio.vercel.app/",
    description:
      "Rida Najeeb’s portfolio featuring projects in React, cloud technologies, and full-stack web development.",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://rn-portfolio.vercel.app/",
    logo: "https://rn-portfolio.vercel.app/images/logo.png",
    description: selfData.bio,
    ...(selfData.name && { founder: {
      "@type": "Person",
      name: selfData.name,
    }}),
    sameAs: [
      `https://github.com/${selfData.socials_username?.github}`,
      `https://linkedin.com/in/${selfData.socials_username?.linkedin}`,
    ],
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Rida Najeeb Resume",
    description:
      "Professional resume of Rida Najeeb — Computer Science graduate and aspiring Full-Stack & Cloud-focused Developer.",
    url: "https://rn-portfolio.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      ...(selfData.workFor && { worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      }}),
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location?.city,
        addressRegion: selfData.current_location?.state,
        addressCountry: selfData.current_location?.country,
      },
      sameAs: [
        `https://github.com/${selfData.socials_username?.github}`,
        `https://linkedin.com/in/${selfData.socials_username?.linkedin}`,
      ],
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://rn-portfolio.vercel.app/docs/Rida-Najeeb-Resume.pdf",
    downloadUrl:
      "https://rn-portfolio.vercel.app/docs/Rida-Najeeb-Resume.pdf",
    keywords: [
      "Software Developer",
      "Full Stack Developer",
      "React Developer",
      "Cloud Computing",
      "AWS",
      "JavaScript Developer",
      "Computer Science Graduate",
      "Vasavi College of Engineering",
      "Hyderabad",
      "India",
    ],
  };
}
