"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Database, Shield, Cloud, ArrowRight } from "lucide-react";

const layers = [
  {
    id: "frontend",
    layer: "Presentation Layer",
    title: "Frontend Applications",
    icon: Monitor,
    color: "blue",
    gradient: "from-accent-blue/20 to-accent-blue/5",
    border: "border-accent-blue/25",
    iconBg: "from-accent-blue/30 to-accent-blue/10",
    iconColor: "text-accent-blue",
    items: [
      "Angular 20 (NgRx, Signals, Standalone)",
      "React 18 (Next.js App Router, RSC)",
      "TypeScript — strict mode",
      "Tailwind CSS / PrimeNG / Material",
      "RxJS reactive data streams",
      "Lazy loading & code splitting",
    ],
  },
  {
    id: "api",
    layer: "API Gateway / BFF Layer",
    title: "ASP.NET Core APIs",
    icon: Server,
    color: "purple",
    gradient: "from-accent-purple/20 to-accent-purple/5",
    border: "border-accent-purple/25",
    iconBg: "from-accent-purple/30 to-accent-purple/10",
    iconColor: "text-accent-purple",
    items: [
      ".NET 10 Web API / Minimal APIs",
      "CQRS with MediatR",
      "FluentValidation & Middleware",
      "OpenAPI 3.0 / Swagger",
      "Rate limiting & caching",
      "Structured logging (Serilog)",
    ],
  },
  {
    id: "auth",
    layer: "Security & Identity",
    title: "Auth & Authorization",
    icon: Shield,
    color: "pink",
    gradient: "from-accent-pink/15 to-accent-pink/5",
    border: "border-accent-pink/25",
    iconBg: "from-accent-pink/25 to-accent-pink/10",
    iconColor: "text-accent-pink",
    items: [
      "Keycloak / Azure AD / Entra ID",
      "OAuth2 Authorization Code + PKCE",
      "OpenID Connect (OIDC) SSO",
      "JWT token validation",
      "RBAC + Claims-based policies",
      "Refresh token rotation",
    ],
  },
  {
    id: "database",
    layer: "Data Layer",
    title: "Databases & Storage",
    icon: Database,
    color: "cyan",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
    border: "border-accent-cyan/25",
    iconBg: "from-accent-cyan/30 to-accent-cyan/10",
    iconColor: "text-accent-cyan",
    items: [
      "SQL Server (EF Core + Dapper)",
      "PostgreSQL (relational)",
      "MongoDB (document store)",
      "Redis (distributed cache)",
      "Azure Blob / S3 (files)",
      "Azure Service Bus (messaging)",
    ],
  },
  {
    id: "cloud",
    layer: "Infrastructure & Cloud",
    title: "Azure & DevOps",
    icon: Cloud,
    color: "blue",
    gradient: "from-accent-blue/15 to-accent-cyan/10",
    border: "border-accent-blue/20",
    iconBg: "from-accent-blue/25 to-accent-cyan/15",
    iconColor: "text-accent-blue",
    items: [
      "Azure Kubernetes Service (AKS)",
      "Docker containerization",
      "GitHub Actions CI/CD",
      "Azure DevOps Pipelines",
      "OpenShift (on-prem k8s)",
      "Infrastructure as Code (Terraform)",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  cyan: "text-accent-cyan",
  pink: "text-accent-pink",
};

export default function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="architecture" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-3">
            // System Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            How I Architect Systems
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A layered approach to building enterprise-grade applications — each layer with clear
            boundaries, responsibilities, and technology choices.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass rounded-2xl border ${layer.border} overflow-hidden glass-hover group`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${layer.gradient} opacity-60`} />

              <div className="relative p-6 lg:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon + labels */}
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center sm:min-w-[120px]">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${layer.iconBg} border ${layer.border} flex-shrink-0`}>
                      <layer.icon className={`h-6 w-6 ${layer.iconColor}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-mono uppercase tracking-wider ${colorMap[layer.color]} mb-0.5`}>
                        {layer.layer}
                      </p>
                      <h3 className="font-bold text-text-primary text-sm sm:text-base">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="hidden sm:flex items-center">
                    <ArrowRight className={`h-5 w-5 ${colorMap[layer.color]} opacity-40`} />
                  </div>

                  {/* Items grid */}
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-1.5 text-xs text-text-secondary leading-snug"
                      >
                        <span className={`mt-1.5 h-1 w-1 rounded-full ${colorMap[layer.color]} bg-current flex-shrink-0`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {i < layers.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-border-glow to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Design principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-text-primary mb-6 text-center">
            Core Design Principles
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "SOLID", desc: "Principles" },
              { label: "DRY", desc: "Don't Repeat Yourself" },
              { label: "Clean Arch", desc: "Layer separation" },
              { label: "Domain-Driven", desc: "DDD patterns" },
              { label: "Zero-Trust", desc: "Security model" },
              { label: "Observability", desc: "Logs, metrics, traces" },
            ].map((p) => (
              <div key={p.label} className="text-center">
                <p className="font-bold gradient-text text-sm mb-1">{p.label}</p>
                <p className="text-xs text-text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
