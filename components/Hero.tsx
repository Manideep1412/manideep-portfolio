"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

const techBadges = [
  { label: ".NET 10", color: "blue" },
  { label: "Angular", color: "purple" },
  { label: "React", color: "cyan" },
  { label: "GPT-4o", color: "emerald" },
  { label: "Azure", color: "blue" },
  { label: "TypeScript", color: "purple" },
  { label: "C#", color: "cyan" },
  { label: "Microservices", color: "blue" },
  { label: "RAG / Vector Search", color: "emerald" },
  { label: "OAuth2 / OIDC", color: "purple" },
];

const colorMap: Record<string, string> = {
  blue: "bg-accent-blue/10 border-accent-blue/25 text-accent-blue",
  purple: "bg-accent-purple/10 border-accent-purple/25 text-accent-purple",
  cyan: "bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan",
  emerald: "bg-emerald-400/10 border-emerald-400/25 text-emerald-400",
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background hero glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Floating orb */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-purple/8 blur-[100px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-2xl"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/8 px-4 py-1.5 text-sm text-accent-blue font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
            >
              <span className="text-text-primary">Full Stack</span>{" "}
              <span className="gradient-text">.NET Developer</span>
              <br />
              <span className="text-text-primary">building </span>
              <span className="gradient-text-blue">AI-integrated,</span>
              <br />
              <span className="text-text-primary">enterprise apps.</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              variants={item}
              className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              10+ years shipping production-grade software across Angular, React, ASP.NET Core,
              microservices, and Azure — now integrating{" "}
              <span className="text-emerald-400 font-medium">OpenAI, RAG pipelines, and voice AI</span>{" "}
              into real-world products. Based in{" "}
              <span className="inline-flex items-center gap-1 text-text-primary">
                <MapPin className="h-4 w-4 text-accent-blue" />
                Abbotsford, BC, Canada
              </span>
              , working globally.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                View My Work
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="https://github.com/Manideep1412?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-secondary px-4">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/manideep-salla-150468279/" aria-label="LinkedIn" className="btn-secondary px-4">
                <Linkedin className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "5+", label: "Cloud Platforms" },
                { value: "100%", label: "Remote Ready" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={item} className="mt-10">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-medium">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <motion.span
                    key={badge.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${colorMap[badge.color]}`}
                  >
                    {badge.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            {/* Photo with animated glow ring */}
            <div className="relative">
              {/* Outer glow ring — animates */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #4f8ef7, #a855f7, #22d3ee, #4f8ef7)",
                  padding: "2px",
                  borderRadius: "9999px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Static ambient glow */}
              <div className="absolute -inset-6 rounded-full bg-accent-blue/15 blur-2xl" />
              <div className="absolute -inset-4 rounded-full bg-accent-purple/10 blur-xl" />

              {/* Photo container */}
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Manideep Salla — Full Stack .NET Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-4 glass rounded-xl px-4 py-2.5 border border-accent-blue/30 shadow-lg"
              >
                <p className="text-xs text-text-muted leading-none mb-0.5">Experience</p>
                <p className="text-lg font-extrabold gradient-text leading-none">10+ Yrs</p>
              </motion.div>

              {/* Floating .NET badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -left-6 glass rounded-xl px-3 py-2 border border-accent-purple/30 shadow-lg"
              >
                <p className="text-xs font-mono font-semibold text-accent-purple">.NET 10</p>
                <p className="text-xs text-text-muted">ASP.NET Core</p>
              </motion.div>

              {/* Floating AI badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-3 -left-8 glass rounded-xl px-3 py-2 border border-emerald-400/30 shadow-lg"
              >
                <p className="text-xs font-mono font-semibold text-emerald-400">AI Integration</p>
                <p className="text-xs text-text-muted">GPT-4o · Deepgram</p>
              </motion.div>
            </div>

            {/* Name + title below photo */}
            <div className="text-center">
              <p className="font-bold text-text-primary text-lg">Manideep Salla</p>
              <p className="text-sm text-text-muted">Full Stack .NET & AI Developer</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5 text-text-muted" />
        </motion.div>
        <span className="text-xs text-text-muted">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
