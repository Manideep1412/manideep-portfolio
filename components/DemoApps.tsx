"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, BookOpen, Play } from "lucide-react";

interface DemoApp {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  glowColor: string;
  demoUrl: string;
  githubUrl: string;
  docsUrl?: string;
  status: string;
  statusColor: string;
  badge?: { label: string; color: string };
}

const demoApps: DemoApp[] = [
  {
    title: "AI Interview Coach",
    subtitle: "Next.js 15 · GPT-4o · Deepgram · TypeScript",
    description:
      "Voice-powered interview preparation platform. Speak your answers, get instant GPT-4o scoring across five dimensions, and hear feedback read aloud. Ships with 300 hand-crafted questions across 10 categories, plus a Custom Topic feature that generates 20 AI questions for any technology or role on demand.",
    features: [
      "Deepgram Nova-2 real-time voice transcription",
      "GPT-4o evaluation: clarity, depth, examples, delivery",
      "300 questions across 10 categories (30 each)",
      "Custom Topic — AI questions for any stack or language",
      "Progress dashboard with score trends & session history",
    ],
    gradient: "from-emerald-400 to-amber-400",
    glowColor: "rgba(0,201,122,0.15)",
    demoUrl: "https://ai-interview-coach-sage-phi.vercel.app/",
    githubUrl: "https://github.com/Manideep1412/ai-interview-coach",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
    badge: { label: "🎤 Voice AI", color: "text-amber-400 bg-amber-400/10 border-amber-400/25" },
  },
  {
    title: "AI Support Agent",
    subtitle: "Next.js 15 · .NET 9 · OpenAI · MongoDB Atlas",
    description:
      "RAG-powered support chatbot with semantic vector search. Ask any question and the agent retrieves the most relevant knowledge base articles using OpenAI embeddings, streams the answer in real time, and persists conversation history across sessions.",
    features: [
      "Vector search via MongoDB Atlas",
      "OpenAI GPT-4o mini with SSE streaming",
      "Knowledge base admin (add / embed articles)",
      "Session history with sidebar navigation",
      "Containerised .NET 9 API on Render",
    ],
    gradient: "from-accent-cyan to-accent-blue",
    glowColor: "rgba(34,211,238,0.15)",
    demoUrl: "https://ai-support-agent-three-ebon.vercel.app/",
    githubUrl: "https://github.com/Manideep1412/ai-support-agent",
    docsUrl: "https://ai-support-agent-api-d8al.onrender.com/swagger/index.html",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
  },
  {
    title: "React Client Hub",
    subtitle: "React 18 · Vite · Zustand · SignalR · .NET 9",
    description:
      "Real-time client communication platform. A SignalR WebSocket hub pushes messages instantly across a multi-conversation inbox. Agents can create contacts, open conversations, and mark threads resolved or closed — all updating live without a page refresh.",
    features: [
      "Real-time messaging via SignalR WebSockets",
      "Multi-conversation inbox with unread counts",
      "Create contact + open conversation flow",
      "Resolve / Close conversation actions",
      "JWT-secured .NET 9 API on Render",
    ],
    gradient: "from-accent-purple to-accent-pink",
    glowColor: "rgba(168,85,247,0.15)",
    demoUrl: "https://react-client-hub.vercel.app/login",
    githubUrl: "https://github.com/Manideep1412/react-client-hub",
    docsUrl: "https://react-client-hub-api.onrender.com/swagger/index.html",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/25",
  },
  {
    title: "Angular Enterprise Dashboard",
    subtitle: "Angular 19 · .NET 9 · JWT · RBAC · SQLite",
    description:
      "Enterprise Identity & Access Management dashboard with role-based access control. Admins manage users and roles; Managers get a read-only view. Every sensitive action is captured in an immutable audit log. Login with the demo credentials shown on the login page.",
    features: [
      "JWT authentication with refresh tokens",
      "Admin / Manager role-based UI rendering",
      "User and role management screens",
      "Immutable audit log with filtering",
      "Swagger API docs on Render backend",
    ],
    gradient: "from-accent-blue to-accent-purple",
    glowColor: "rgba(79,142,247,0.15)",
    demoUrl: "https://angular-enterprise-dashboard-iota.vercel.app/",
    githubUrl: "https://github.com/Manideep1412/angular-enterprise-dashboard",
    docsUrl: "https://angular-dashboard-api.onrender.com/swagger/index.html",
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
            Deployed applications you can interact with right now. Full source code on GitHub with
            Swagger API documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {demoApps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group glass rounded-2xl overflow-hidden glass-hover border border-border hover:border-border-glow transition-all duration-300 flex flex-col"
              whileHover={{ boxShadow: `0 20px 60px ${app.glowColor}` }}
            >
              {/* Gradient header banner */}
              <div className={`h-2 bg-gradient-to-r ${app.gradient} flex-shrink-0`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${app.statusColor}`}>
                    {app.status}
                  </span>
                  {app.badge && (
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${app.badge.color}`}>
                      {app.badge.label}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors mb-0.5">
                  {app.title}
                </h3>
                <p className="text-xs font-mono text-text-muted mb-4">{app.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {app.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${app.gradient} flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA buttons — pinned to bottom */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-border/50 mt-auto">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none btn-primary text-sm py-2.5 justify-center"
                  >
                    <Play className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none btn-secondary text-sm py-2.5 justify-center"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Repo
                  </a>
                  {app.docsUrl && (
                    <a
                      href={app.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none btn-secondary text-sm py-2.5 justify-center"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      API Docs
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 glass rounded-2xl p-7 text-center border border-border"
        >
          <p className="text-text-secondary mb-2">
            All projects are open source with full documentation.
          </p>
          <p className="text-text-muted text-sm mb-5">
            Browse the repositories for architecture decisions, code patterns, and deployment config.
          </p>
          <a
            href="https://github.com/Manideep1412?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github className="h-4 w-4" />
            View All Projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
