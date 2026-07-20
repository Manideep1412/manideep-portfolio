"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, ChevronRight, Users, Building2, Layers } from "lucide-react";

interface EnterpriseProject {
  product: string;
  client: string;
  via: string;
  domain: string;
  period: string;
  accentClass: string;
  accentText: string;
  borderClass: string;
  dotClass: string;
  icon: React.ElementType;
  summary: string;
  scale: string[];
  highlights: string[];
  tech: string[];
}

const projects: EnterpriseProject[] = [
  {
    product: "ARLO — User Account Management",
    client: "Government of Alberta",
    via: "Vantix Systems",
    domain: "Government · IAM",
    period: "Feb 2024 – Present",
    accentClass: "bg-accent-blue/10 border-accent-blue/25 text-accent-blue",
    accentText: "text-accent-blue",
    borderClass: "border-l-accent-blue",
    dotClass: "bg-accent-blue",
    icon: Building2,
    summary:
      "Enterprise Identity & Access Management platform for Alberta's regulatory and licensing operations — handling secure user onboarding, multi-agency role hierarchies, and full account lifecycle management for government internal and external users.",
    scale: ["Thousands of gov. users", "Multi-agency RBAC", "OpenShift production"],
    highlights: [
      "Led .NET 8 → .NET 10 upgrade, resolving breaking changes across Dapper, EF Core, and Keycloak/OIDC middleware on OpenShift",
      "Built AI-assisted dependency audit automation to detect non-MIT licensed packages and recommend compliant replacements",
      "Implemented centralized RBAC/PBAC with Keycloak — custom AuthorizationHandlers (PEP) delegating to a Policy Decision Point (PDP) backed by the Access Control System (ACS)",
      "Delivered secure onboarding, invitation, and account-management workflows with Angular 20, NgRx, GoA Design System, and ASP.NET Core CQRS microservices",
    ],
    tech: ["Angular 20", ".NET 10", "C#", "Keycloak", "OIDC", "Redis", "OpenShift", "NgRx", "CQRS"],
  },
  {
    product: "CCR — Client Communication Platform",
    client: "Citibank",
    via: "Virtusa Inc",
    domain: "Banking · FinTech",
    period: "Dec 2021 – Jan 2024",
    accentClass: "bg-accent-purple/10 border-accent-purple/25 text-accent-purple",
    accentText: "text-accent-purple",
    borderClass: "border-l-accent-purple",
    dotClass: "bg-accent-purple",
    icon: Users,
    summary:
      "Enterprise-scale banking communication platform managing millions of secure client communications across global channels — with maker-checker approval flows, template management, bounced-email handling, and enterprise identity integration for a global banking institution.",
    scale: ["Millions of communications", "Global multi-channel", "Enterprise identity"],
    highlights: [
      "Built core communication modules: maker-checker approval workflows, template management, read-receipt tracking, and bounced-email handling with RBAC",
      "Designed and optimized SQL Server stored procedures and EF Core queries for high-volume report generation and communication delivery",
      "Developed automated NUnit + Moq test suite integrated into TeamCity CI, with Swagger and Postman for API integration testing",
      "Delivered consistent, accessible, pixel-perfect enterprise UI across Angular modules using the ICG Design System",
    ],
    tech: ["Angular 13", "ASP.NET Core 6", "SQL Server", "NUnit", "Moq", "TeamCity", "Azure DevOps"],
  },
  {
    product: "Enterprise Business Management Portal",
    client: "Synmek",
    via: "Direct",
    domain: "SaaS · Process Automation",
    period: "Mar 2020 – Nov 2021",
    accentClass: "bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan",
    accentText: "text-accent-cyan",
    borderClass: "border-l-accent-cyan",
    dotClass: "bg-accent-cyan",
    icon: Layers,
    summary:
      "Cloud-based enterprise portal streamlining business workflows and process automation across departments — built on Clean Architecture with JWT-secured REST APIs, role-based access control, and fully automated Azure infrastructure provisioning.",
    scale: ["Multi-dept. automation", "Azure App Services", "Clean Architecture"],
    highlights: [
      "End-to-end delivery: Angular 9 frontend + ASP.NET MVC / Web API backend + SQL Server, deployed on Azure App Services",
      "JWT authorization, role-based UI visibility, and secure REST API integrations with Azure-hosted backend",
      "ARM templates for Azure resource provisioning and automated deployment pipelines for both API and Angular layers",
      "Repository Pattern + Clean Architecture for loosely coupled, maintainable layers; xUnit TDD practices throughout",
    ],
    tech: ["Angular 9", "ASP.NET MVC", "Web API", ".NET 4.8", "Azure", "SQL Server", "xUnit"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // Enterprise Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Professional Client Work
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Production systems built for government, banking, and enterprise clients —
            handling real users, real data, and real compliance requirements.
          </p>

          {/* Confidential notice */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-surface-2 border border-border text-xs text-text-muted">
            <Lock className="h-3 w-3" />
            Client work — systems are confidential and not publicly accessible
          </div>
        </motion.div>

        {/* Project cards — single column, wide horizontal layout */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.product}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glass rounded-2xl overflow-hidden glass-hover border-l-4 ${project.borderClass}`}
              >
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:gap-10">

                    {/* ── Left panel ── */}
                    <div className="flex-shrink-0 lg:w-60 mb-6 lg:mb-0">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${project.accentClass}`}>
                          {project.domain}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-border bg-surface-2 text-text-muted flex items-center gap-1">
                          <Lock className="h-2.5 w-2.5" /> Confidential
                        </span>
                      </div>

                      {/* Icon + product name */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg flex-shrink-0 border ${project.accentClass}`}>
                          <Icon className={`h-4 w-4 ${project.accentText}`} />
                        </div>
                        <h3 className="text-base font-bold text-text-primary leading-snug">
                          {project.product}
                        </h3>
                      </div>

                      {/* Client info */}
                      <div className="space-y-0.5 mb-5 pl-0 sm:pl-12">
                        <p className="text-sm font-medium text-text-secondary">{project.client}</p>
                        {project.via !== "Direct" && (
                          <p className="text-xs text-text-muted">via {project.via}</p>
                        )}
                        <p className="text-xs text-text-muted font-mono">{project.period}</p>
                      </div>

                      {/* Scale stats */}
                      <div className="flex flex-col gap-2">
                        {project.scale.map((stat) => (
                          <div key={stat} className="flex items-center gap-2 text-xs text-text-muted">
                            <div className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${project.dotClass}`} />
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Right panel ── */}
                    <div className="flex-1 min-w-0">
                      {/* Summary */}
                      <p className="text-sm text-text-secondary leading-relaxed mb-5">
                        {project.summary}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-6">
                        {project.highlights.map((h, hi) => (
                          <motion.li
                            key={hi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.15 + hi * 0.05 + 0.3 }}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <ChevronRight className={`h-4 w-4 ${project.accentText} flex-shrink-0 mt-0.5`} />
                            {h}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-text-muted text-sm mb-4">
            Want the full career timeline with detailed achievements?
          </p>
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary inline-flex"
          >
            View Full Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}
