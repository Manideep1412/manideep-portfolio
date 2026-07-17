"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Support Agent",
    description:
      "RAG-powered customer support chatbot built with Next.js 15 and a .NET 9 backend. Uses OpenAI embeddings stored in MongoDB Atlas vector search to deliver semantically relevant answers from a curated knowledge base, with real-time SSE streaming and persistent session history.",
    tech: ["Next.js 15", "TypeScript", ".NET 9", "OpenAI", "MongoDB Atlas", "Vector Search", "SSE"],
    gradient: "from-accent-cyan/20 to-accent-blue/10",
    borderGlow: "hover:border-accent-cyan/40",
    accentColor: "text-accent-cyan",
    badgeColor: "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan",
    demoUrl: "https://ai-support-agent-three-ebon.vercel.app/",
    githubUrl: "https://github.com/Manideep1412/ai-support-agent",
    tag: "AI / RAG",
  },
  {
    title: "React Client Hub",
    description:
      "Real-time client communication platform built with React 18, Vite, and Zustand. SignalR WebSocket hub powers live messaging across a multi-conversation inbox with contact management, conversation status (open/resolved/closed), and a .NET 9 API backed by SQLite.",
    tech: ["React 18", "Vite", "TypeScript", "Zustand", "SignalR", ".NET 9", "SQLite"],
    gradient: "from-accent-purple/20 to-accent-pink/10",
    borderGlow: "hover:border-accent-purple/40",
    accentColor: "text-accent-purple",
    badgeColor: "bg-accent-purple/10 border-accent-purple/20 text-accent-purple",
    demoUrl: "https://react-client-hub.vercel.app/login",
    githubUrl: "https://github.com/Manideep1412/react-client-hub",
    tag: "Real-time Platform",
  },
  {
    title: "Angular Enterprise Dashboard",
    description:
      "Enterprise Identity & Access Management dashboard built with Angular 19 and a .NET 9 API. JWT authentication with role-based access control (Admin / Manager), user and role management, audit log viewer, and a secured SQLite-backed backend with Swagger docs.",
    tech: ["Angular 19", "TypeScript", ".NET 9", "JWT", "RBAC", "SQLite", "Swagger"],
    gradient: "from-accent-blue/20 to-accent-purple/10",
    borderGlow: "hover:border-accent-blue/40",
    accentColor: "text-accent-blue",
    badgeColor: "bg-accent-blue/10 border-accent-blue/20 text-accent-blue",
    demoUrl: "https://angular-enterprise-dashboard-iota.vercel.app/",
    githubUrl: "https://github.com/Manideep1412/angular-enterprise-dashboard",
    tag: "Enterprise IAM",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            What I&apos;ve Built
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Real-world applications demonstrating enterprise architecture, performance, and clean
            code across multiple frameworks and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative glass rounded-2xl p-7 border border-border ${project.borderGlow} transition-all duration-300 overflow-hidden`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-mono font-medium ${project.accentColor} bg-current/10 border border-current/20 px-2.5 py-1 rounded-full inline-block mb-3`}
                      style={{ background: "transparent" }}>
                      <span className={`${project.accentColor} font-mono text-xs`}>{project.tag}</span>
                    </span>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Layers className={`h-6 w-6 ${project.accentColor} opacity-60 flex-shrink-0 mt-1`} />
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-accent-blue transition-colors group/link"
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="#demo-apps"
                    className={`ml-auto flex items-center gap-1 text-xs ${project.accentColor} opacity-0 group-hover:opacity-100 transition-all`}
                  >
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
