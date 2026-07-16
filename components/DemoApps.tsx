"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, BookOpen, Play } from "lucide-react";

const demoApps = [
  {
    title: "Angular Enterprise Dashboard",
    subtitle: "Angular 17 + .NET 8 + SignalR",
    description:
      "Full enterprise management dashboard with real-time updates, NgRx state management, data grid, charts, and RBAC authentication.",
    features: [
      "Real-time SignalR notifications",
      "NgRx state with effects",
      "Advanced filtering & export",
      "Role-based UI rendering",
      "Lazy-loaded feature modules",
    ],
    gradient: "from-accent-blue to-accent-purple",
    glowColor: "rgba(79,142,247,0.15)",
    demoUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
  },
  {
    title: "React Client Communication Hub",
    subtitle: "React 18 + Redux Toolkit + .NET Core",
    description:
      "Centralized client communication platform with threaded messages, file attachments, audit trails, and full audit logging.",
    features: [
      "Threaded conversation UI",
      "File upload (Azure Blob)",
      "Full audit trail",
      "Search & filter inbox",
      "Notification system",
    ],
    gradient: "from-accent-purple to-accent-pink",
    glowColor: "rgba(168,85,247,0.15)",
    demoUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
  },
  {
    title: "Next.js AI Job Tracker",
    subtitle: "Next.js 15 + OpenAI + Azure Functions",
    description:
      "AI-powered job application tracker with smart resume matching, interview scheduling, pipeline analytics, and AI cover letter generation.",
    features: [
      "OpenAI resume matching",
      "Interview pipeline kanban",
      "Application analytics",
      "AI cover letter drafts",
      "Calendar integration",
    ],
    gradient: "from-accent-cyan to-accent-blue",
    glowColor: "rgba(34,211,238,0.15)",
    demoUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
    status: "Beta",
    statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
  },
  {
    title: "Vue Finance Admin Portal",
    subtitle: "Vue 3 + Pinia + ASP.NET Core + Dapper",
    description:
      "Comprehensive financial administration with transaction management, compliance dashboards, multi-currency reporting, and role-based access.",
    features: [
      "Multi-currency support",
      "Compliance dashboards",
      "Advanced reporting",
      "Transaction audit log",
      "Export to PDF/Excel",
    ],
    gradient: "from-green-500 to-accent-cyan",
    glowColor: "rgba(34,211,238,0.12)",
    demoUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
  },
];

export default function DemoApps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo-apps" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-3">
            // Live Demo Apps
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Try Them Live
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Deployed applications you can interact with. Full source code available on GitHub with
            API documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {demoApps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group glass rounded-2xl overflow-hidden glass-hover border border-border hover:border-border-glow transition-all duration-300"
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
              whileHover={{
                boxShadow: `0 20px 60px ${app.glowColor}`,
              }}
            >
              {/* Gradient header banner */}
              <div className={`h-2 bg-gradient-to-r ${app.gradient}`} />

              <div className="p-7">
                {/* Title row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${app.statusColor}`}>
                        {app.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-0.5">{app.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {app.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-1.5 mb-6">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${app.gradient} flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-border/50">
                  <a
                    href={app.demoUrl}
                    className="flex-1 sm:flex-none btn-primary text-sm py-2.5 justify-center"
                  >
                    <Play className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={app.githubUrl}
                    className="flex-1 sm:flex-none btn-secondary text-sm py-2.5 justify-center"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Repo
                  </a>
                  <a
                    href={app.docsUrl}
                    className="flex-1 sm:flex-none btn-secondary text-sm py-2.5 justify-center"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    API Docs
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 glass rounded-2xl p-7 text-center border border-border"
        >
          <p className="text-text-secondary mb-2">
            All projects are open source with full documentation.
          </p>
          <p className="text-text-muted text-sm mb-5">
            Browse the repositories for architecture decisions, code patterns, and testing strategies.
          </p>
          <a href="#" className="btn-secondary inline-flex">
            <Github className="h-4 w-4" />
            View All Projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
