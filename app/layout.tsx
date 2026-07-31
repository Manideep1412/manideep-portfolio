import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manideep Salla | Full Stack .NET Developer",
  description:
    "Full Stack .NET / Angular / React Developer with 10+ years building secure, scalable enterprise applications. Based in Canada. Expert in C#, ASP.NET Core, Angular, React, Azure, microservices, and OAuth2/OIDC.",
  keywords: [
    "Full Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "React Developer",
    "C# Developer",
    "ASP.NET Core",
    "TypeScript",
    "Azure",
    "Microservices",
    "Canada",
    "Manideep Salla",
    "Software Engineer",
    "Enterprise Developer",
  ],
  authors: [{ name: "Manideep Salla", url: "https://manideepsalla.dev" }],
  creator: "Manideep Salla",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://manideepsalla.dev",
    title: "Manideep Salla | Full Stack .NET Developer",
    description:
      "Full Stack .NET / Angular / React Developer building secure, scalable enterprise applications.",
    siteName: "Manideep Salla Portfolio",
    // og:image injected automatically from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Manideep Salla | Full Stack .NET Developer",
    description:
      "Full Stack .NET / Angular / React Developer building secure, scalable enterprise applications.",
    // twitter:image injected automatically from app/opengraph-image.tsx
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
};

export const viewport: Viewport = {
  themeColor: "#05050f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
