import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
