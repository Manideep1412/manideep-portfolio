"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Angular Enterprise Dashboard",
    description:
      "A feature-rich enterprise management dashboard built with Angular 17, NgRx state management, and a .NET 8 backend. Features real-time data via SignalR, role-based access control, and advanced data grid with filtering, sorting, and export.",
    tech: ["Angular 17", "NgRx", "ASP.NET Core", "SignalR", "SQL Server", "RBAC", "Chart.js"],
    gradient: "from-accent-blue/20 to-accent-purple/10",
    borderGlow: "hover:border-accent-blue/40",
    accentColor: "text-accent-blue",
    badgeColor: "bg-accent-blue/10 border-accent-blue/20 text-accent-blue",
    demoUrl: "#",
    githubUrl: "#",
    tag: "Enterprise SaaS",
  },
  {
    title: "React Client Communication Repository",
    description:
      "A centralized communication hub for managing client interactions built with React 18, TypeScript, and Redux Toolkit. Features threaded messaging, file attachments, audit trails, and a .NET Core API with Entity Framework Core.",
    tech: ["React 18", "Redux Toolkit", "TypeScript", ".NET Core", "EF Core", "PostgreSQL", "Azure Blob"],
    gradient: "from-accent-purple/20 to-accent-pink/10",
    borderGlow: "hover:border-accent-purple/40",
    accentColor: "text-accent-purple",
    badgeColor: "bg-accent-purple/10 border-accent-purple/20 text-accent-purple",
    demoUrl: "#",
    githubUrl: "#",
    tag: "Communication Platform",
  },
  {
    title: "Next.js AI Job Tracker",
    description:
      "An AI-powered job application tracker built with Next.js 15 App Router, Tailwind CSS, and OpenAI integration. Smart resume matching, interview scheduling, pipeline analytics, and a serverless .NET Azure Functions backend.",
    tech: ["Next.js 15", "TypeScript", "OpenAI API", "Azure Functions", "MongoDB", "Tailwind CSS"],
    gradient: "from-accent-cyan/20 to-accent-blue/10",
    borderGlow: "hover:border-accent-cyan/40",
    accentColor: "text-accent-cyan",
    badgeColor: "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan",
    demoUrl: "#",
    githubUrl: "#",
    tag: "AI-Powered Tool",
  },
  {
    title: "Vue Finance Admin Portal",
    description:
      "A comprehensive financial administration portal built with Vue 3, Pinia, and Vite. Features advanced reporting, transaction management, compliance dashboards, multi-currency support, and a secure .NET 8 API with Dapper.",
    tech: ["Vue 3", "Pinia", "Vite", "ASP.NET Core", "Dapper", "SQL Server", "Highcharts"],
    gradient: "from-green-500/15 to-accent-cyan/10",
    borderGlow: "hover:border-green-500/40",
    accentColor: "text-green-400",
    badgeColor: "bg-green-500/10 border-green-500/20 text-green-400",
    demoUrl: "#",
    githubUrl: "#",
    tag: "FinTech Portal",
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
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-accent-blue transition-colors group/link"
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.githubUrl}
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
