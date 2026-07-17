"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Cloud, Database, Shield, TestTube, Brain } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Monitor,
    color: "blue",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React / Next.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES2024)", level: 95 },
      { name: "RxJS", level: 88 },
      { name: "NgRx / Redux", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "purple",
    skills: [
      { name: "C# / .NET 10", level: 95 },
      { name: "ASP.NET Core", level: 95 },
      { name: "REST API Design", level: 95 },
      { name: "Microservices", level: 88 },
      { name: "gRPC / SignalR", level: 80 },
      { name: "Entity Framework Core", level: 90 },
      { name: "Dapper", level: 85 },
      { name: "CQRS / MediatR", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "cyan",
    skills: [
      { name: "Microsoft Azure", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes / OpenShift", level: 82 },
      { name: "GitHub Actions", level: 90 },
      { name: "Azure DevOps", level: 88 },
      { name: "Terraform (IaC)", level: 72 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Azure Service Bus", level: 80 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "blue",
    skills: [
      { name: "SQL Server", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Redis (caching)", level: 80 },
      { name: "Azure Cosmos DB", level: 72 },
      { name: "Database Design", level: 90 },
      { name: "Query Optimization", level: 88 },
    ],
  },
  {
    category: "Security & Auth",
    icon: Shield,
    color: "purple",
    skills: [
      { name: "OAuth2 / OIDC", level: 92 },
      { name: "JWT / Token Management", level: 92 },
      { name: "Keycloak", level: 85 },
      { name: "RBAC / Claims-Based", level: 90 },
      { name: "Azure AD / Entra ID", level: 85 },
      { name: "API Security", level: 90 },
      { name: "Zero-Trust Architecture", level: 78 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    color: "pink",
    skills: [
      { name: "OpenAI API / GPT-4o", level: 85 },
      { name: "RAG (Retrieval-Augmented Gen)", level: 82 },
      { name: "Vector Embeddings", level: 80 },
      { name: "MongoDB Atlas Vector Search", level: 78 },
      { name: "Prompt Engineering", level: 85 },
      { name: "SSE / AI Streaming", level: 80 },
      { name: "LLM Integration (.NET)", level: 78 },
    ],
  },
  {
    category: "Testing",
    icon: TestTube,
    color: "cyan",
    skills: [
      { name: "xUnit / NUnit", level: 88 },
      { name: "Moq / NSubstitute", level: 85 },
      { name: "Jasmine / Jest", level: 85 },
      { name: "Cypress (E2E)", level: 80 },
      { name: "Integration Testing", level: 85 },
      { name: "TDD Practices", level: 82 },
      { name: "Postman / REST Testing", level: 90 },
    ],
  },
];

const colorConfig: Record<string, { bar: string; icon: string; border: string; bg: string }> = {
  blue: {
    bar: "from-accent-blue to-accent-cyan",
    icon: "text-accent-blue",
    border: "border-accent-blue/20",
    bg: "from-accent-blue/10 to-accent-blue/5",
  },
  purple: {
    bar: "from-accent-purple to-accent-blue",
    icon: "text-accent-purple",
    border: "border-accent-purple/20",
    bg: "from-accent-purple/10 to-accent-purple/5",
  },
  cyan: {
    bar: "from-accent-cyan to-accent-blue",
    icon: "text-accent-cyan",
    border: "border-accent-cyan/20",
    bg: "from-accent-cyan/10 to-accent-cyan/5",
  },
  pink: {
    bar: "from-accent-pink to-accent-purple",
    icon: "text-accent-pink",
    border: "border-accent-pink/20",
    bg: "from-accent-pink/10 to-accent-pink/5",
  },
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text-secondary font-medium">{name}</span>
        <span className="text-xs text-text-muted font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorConfig[color].bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            My Technology Stack
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            10+ years of hands-on experience across the full stack — from Angular UIs to .NET APIs
            to Azure infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const config = colorConfig[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="glass rounded-2xl p-6 glass-hover"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${config.border} bg-gradient-to-br ${config.bg}`}>
                    <group.icon className={`h-5 w-5 ${config.icon}`} />
                  </div>
                  <h3 className="font-bold text-text-primary">{group.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                      delay={gi * 0.1 + si * 0.06}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
