"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const expColorMap: Record<string, { text: string; dot: string; border: string; bg: string }> = {
  "accent-blue": {
    text: "text-accent-blue",
    dot: "bg-accent-blue",
    border: "border-accent-blue",
    bg: "bg-accent-blue",
  },
  "accent-purple": {
    text: "text-accent-purple",
    dot: "bg-accent-purple",
    border: "border-accent-purple",
    bg: "bg-accent-purple",
  },
  "accent-cyan": {
    text: "text-accent-cyan",
    dot: "bg-accent-cyan",
    border: "border-accent-cyan",
    bg: "bg-accent-cyan",
  },
};

const experiences = [
  {
    company: "Vantix Systems — Government of Alberta (ARLO)",
    role: "Senior Full Stack Developer",
    period: "Feb 2024 – Present",
    location: "Edmonton, AB (Remote)",
    type: "Full-time",
    color: "accent-blue",
    achievements: [
      "Led the upgrade of the ARLO UAM backend from .NET 8 to .NET 10 — resolving breaking changes, replacing NuGet packages that transitioned from MIT to commercial licensing with compliant open-source alternatives, and validating compatibility across Dapper, EF Core, and Keycloak/OIDC middleware on OpenShift.",
      "Built an AI-assisted dependency-audit automation that scans the .NET codebase for outdated and non-MIT-licensed packages, identifies commercial-licensing changes, and recommends compliant replacements — reducing manual license-compliance effort.",
      "Implemented centralized RBAC/PBAC authorization using Keycloak, OAuth2, and OIDC — with custom AuthorizationHandlers (PEP) delegating decisions to a Policy Decision Point (PDP) backed by the Access Control System (ACS).",
      "Delivered secure onboarding, invitation, and account-management workflows for internal and external users using Angular 20, NgRx, GoA Design System, and ASP.NET Core microservices with CQRS/Mediator.",
      "Implemented Redis caching for high-traffic onboarding workflows and mentored junior developers through code reviews on Angular and ASP.NET Core best practices.",
    ],
    tech: ["Angular 20", ".NET 10", "C#", "Keycloak", "OIDC", "Redis", "OpenShift", "NgRx", "CQRS"],
  },
  {
    company: "Virtusa Inc — Citi Bank (CCR)",
    role: "Senior Full Stack Developer",
    period: "Dec 2021 – Jan 2024",
    location: "Toronto, ON (Remote)",
    type: "Full-time",
    color: "accent-purple",
    achievements: [
      "Built and enhanced an enterprise banking communication platform managing millions of secure client communications across global channels using Angular 13 and ASP.NET Core 6 microservices.",
      "Developed maker-checker approval workflows, template management, read-receipt tracking, and bounced-email handling with role-based access control integrated with enterprise identity systems.",
      "Designed and optimized SQL Server stored procedures and Entity Framework queries, improving report generation and communication delivery performance.",
      "Developed automated unit tests using NUnit and Moq integrated into the TeamCity CI pipeline, and performed API integration testing via Swagger and Postman.",
      "Leveraged ICG Design System components to deliver consistent, accessible, and pixel-perfect enterprise UI across Angular modules.",
    ],
    tech: ["Angular 13", "ASP.NET Core 6", "SQL Server", "NUnit", "Moq", "TeamCity", "Azure DevOps"],
  },
  {
    company: "Synmek",
    role: "Full Stack Developer",
    period: "Mar 2020 – Nov 2021",
    location: "Toronto, ON (Remote)",
    type: "Full-time",
    color: "accent-cyan",
    achievements: [
      "Developed a cloud-based Enterprise Business Management Portal using Angular 9, ASP.NET MVC, Web API, and SQL Server — streamlining business workflows and process automation across departments.",
      "Implemented JWT authorization, role-based UI visibility, and secure REST API integrations with Azure App Services deployment.",
      "Created ARM templates, provisioned Azure resources, and deployed both API and Angular layers using Azure App Services.",
      "Built reusable repositories using the Repository Pattern and Clean Architecture principles for maintainable, loosely coupled application layers.",
      "Developed unit tests using xUnit as part of TDD practices and performed integration testing with Swagger and Postman.",
    ],
    tech: ["Angular 9", "ASP.NET MVC", "Web API", ".NET 4.8", "Azure", "SQL Server", "xUnit"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Professional Journey
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            10+ years building production enterprise software across multiple industries and domains.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 sm:left-5 top-6 h-5 w-5 rounded-full border-2 ${expColorMap[exp.color].border} bg-background hidden sm:flex items-center justify-center`}>
                  <div className={`h-2 w-2 rounded-full ${expColorMap[exp.color].dot}`} />
                </div>

                <div className="glass rounded-2xl p-7 glass-hover group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className={`h-4 w-4 ${expColorMap[exp.color].text}`} />
                        <span className={`text-xs font-mono ${expColorMap[exp.color].text} uppercase tracking-wider`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                      <p className="text-text-secondary font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5 text-sm text-text-muted justify-end">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-text-muted justify-end">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((achievement, ai) => (
                      <motion.li
                        key={ai}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + ai * 0.05 + 0.3 }}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <ChevronRight className={`h-4 w-4 ${expColorMap[exp.color].text} flex-shrink-0 mt-0.5`} />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted mb-4 text-sm">Want the full details?</p>
          <a href="/resume.pdf" download className="btn-primary inline-flex">
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
