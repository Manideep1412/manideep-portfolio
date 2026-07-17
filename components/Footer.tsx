"use client";

import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Manideep1412?tab=repositories", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/manideep-salla-150468279/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:deepu1919.salla@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-text-primary">Manideep Salla</p>
              <p className="text-xs text-text-muted">Full Stack .NET Developer</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-accent-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted hover:text-accent-blue hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-accent-pink fill-current" /> using Next.js 15, TypeScript &amp; Tailwind CSS
          </p>
          <p className="mt-1 text-xs text-text-muted">
            © {new Date().getFullYear()} Manideep Salla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
