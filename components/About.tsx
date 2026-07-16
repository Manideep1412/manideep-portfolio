"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Briefcase,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Enterprise-Grade Engineering",
    desc: "Architecting and delivering large-scale .NET and Angular applications for enterprise clients across healthcare, finance, and SaaS domains.",
  },
  {
    icon: Shield,
    title: "Security & Identity First",
    desc: "Deep expertise in OAuth2, OIDC, JWT, Keycloak, and RBAC — designing zero-trust authentication flows for regulated industries.",
  },
  {
    icon: Zap,
    title: "Full Stack Ownership",
    desc: "End-to-end delivery from UI components in Angular/React to REST APIs in ASP.NET Core, backed by SQL Server and deployed on Azure.",
  },
  {
    icon: Globe,
    title: "Cloud-Native Architecture",
    desc: "Designing microservices, containerized with Docker and orchestrated via Kubernetes on Azure, with CI/CD through GitHub Actions and Azure DevOps.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    desc: "Working closely with product, design, and QA teams in Agile environments. Mentoring junior developers and conducting technical code reviews.",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    desc: "Staying current with .NET 10, Angular signals, React Server Components, and AI-assisted development workflows.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            The Developer Behind the Code
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            I&apos;m a Full Stack developer with 10+ years of experience building enterprise
            applications that are secure, performant, and built to last.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile photo card */}
            <div className="glass rounded-2xl p-6 glass-hover flex items-center gap-6">
              <div className="relative flex-shrink-0">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan opacity-60 blur-sm" />
                <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src="/profile.png"
                    alt="Manideep Salla"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Manideep Salla</h3>
                <p className="text-accent-blue text-sm font-medium mt-0.5">Full Stack .NET Developer</p>
                <p className="text-text-muted text-xs mt-1">📍 Canada · 10+ Years Experience</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-medium">Open to Work</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-muted">Remote Ready</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 glass-hover">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Who I Am
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Based in <strong className="text-text-primary">Canada</strong>, I specialize in
                  building secure, scalable enterprise applications using the Microsoft .NET ecosystem
                  alongside modern JavaScript frameworks. My core strength lies in bridging backend
                  complexity with clean, performant frontends.
                </p>
                <p>
                  I&apos;ve designed and shipped systems handling authentication flows for
                  <strong className="text-text-primary"> thousands of users</strong>, REST APIs
                  serving as the backbone of microservice architectures, and Angular dashboards
                  used daily by enterprise teams.
                </p>
                <p>
                  Outside of coding, I&apos;m passionate about software architecture, security
                  engineering, and helping teams deliver better software faster through automation
                  and clean design principles.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass rounded-2xl p-6 glass-hover">
              <h3 className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Location", value: "Canada" },
                  { label: "Experience", value: "10+ Years" },
                  { label: "Focus", value: ".NET / Angular / React" },
                  { label: "Availability", value: "Open to Opportunities" },
                  { label: "Work Style", value: "Remote / Hybrid" },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-text-muted">{fact.label}</span>
                    <span className="text-text-primary font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="glass rounded-xl p-5 glass-hover group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-accent-blue/20 mb-3 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
                  <item.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
