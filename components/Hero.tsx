"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import TechOrbit3D from "@/components/TechOrbit3D";
import MagneticButton from "@/components/MagneticButton";

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

      {/* Vivid aurora blobs */}
      <div className="aurora-blob absolute -top-20 left-1/3 h-[500px] w-[500px] pointer-events-none"
        style={{ background: "rgba(79,142,247,0.30)", animationDuration: "10s" }} />
      <div className="aurora-blob absolute top-1/4 right-1/4 h-[400px] w-[400px] pointer-events-none"
        style={{ background: "rgba(168,85,247,0.24)", animationDelay: "-5s", animationDuration: "13s" }} />
      <div className="aurora-blob absolute bottom-0 left-1/4 h-[300px] w-[300px] pointer-events-none"
        style={{ background: "rgba(34,211,238,0.18)", animationDelay: "-9s", animationDuration: "16s" }} />

      {/* Floating orb — hidden on mobile to avoid overflow */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-purple/12 blur-[80px] pointer-events-none"
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
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
            >
              <span className="text-text-primary">Full Stack</span>{" "}
              <span className="gradient-text glow-text-blue">.NET Developer</span>
              <br />
              <span className="text-text-primary">building </span>
              <span className="gradient-text-blue glow-text-cyan">AI-integrated,</span>
              <br />
              <span className="text-text-primary">enterprise apps.</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              variants={item}
              className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              11+ years shipping production-grade software across Angular, React, ASP.NET Core,
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
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton className="w-full sm:w-auto">
                <a href="#projects" className="btn-primary w-full justify-center">
                  <Sparkles className="h-4 w-4" />
                  View My Work
                </a>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <a href="/resume.pdf" download="Manideep_Resume.pdf" className="btn-secondary w-full justify-center">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="https://github.com/Manideep1412?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-secondary px-4">
                  <Github className="h-4 w-4" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="https://www.linkedin.com/in/manideep-salla-150468279/" aria-label="LinkedIn" className="btn-secondary px-4">
                  <Linkedin className="h-4 w-4" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: "11+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "5+", label: "Cloud Platforms" },
                { value: "100%", label: "Remote Ready" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={item} className="mt-10">
              <p className="text-xs text-text-secondary uppercase tracking-widest mb-3 font-medium">
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

          {/* ── Right: 3D Tech Orbit + Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-4"
          >
            {/* ── Mobile: plain photo ── */}
            <div className="block lg:hidden relative">
              <div className="absolute -inset-6 rounded-full blur-3xl" style={{ background: "rgba(79,142,247,0.30)" }} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #4f8ef7, #a855f7, #22d3ee, #4f8ef7)",
                  padding: "2px",
                  borderRadius: "9999px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/profile.png" alt="Manideep Salla" fill sizes="(max-width: 640px) 192px, 256px" className="object-cover object-top" priority />
              </div>
            </div>

            {/* ── Desktop: 3D orbit + photo in center ── */}
            <div className="hidden lg:block relative" style={{ width: 400, height: 400, marginBottom: "-30px" }}>
              {/* Orbit rings */}
              <TechOrbit3D />

              {/* Photo pinned to orbit center, z-index 3 (between back and front orbit items) */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
                <div className="relative">
                  {/* Ambient glow behind photo */}
                  <div className="absolute -inset-8 rounded-full blur-3xl" style={{ background: "rgba(79,142,247,0.38)" }} />
                  <div className="absolute -inset-4 rounded-full blur-2xl" style={{ background: "rgba(168,85,247,0.22)" }} />

                  {/* Rotating conic ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-3 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #4f8ef7, #a855f7, #22d3ee, #f472b6, #4f8ef7)",
                      padding: "2.5px",
                      borderRadius: "9999px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Photo */}
                  <div className="relative h-52 w-52 rounded-full overflow-hidden border-2 border-white/15 shadow-2xl">
                    <Image
                      src="/profile.png"
                      alt="Manideep Salla — Full Stack .NET Developer"
                      fill
                      sizes="208px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  {/* Experience badge — bottom right of photo */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-6 glass rounded-xl px-3 py-2 border border-accent-blue/40 shadow-lg"
                    style={{ zIndex: 6 }}
                  >
                    <p className="text-xs text-text-secondary leading-none mb-0.5">Experience</p>
                    <p className="text-base font-extrabold gradient-text leading-none">11+ Yrs</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Name + title */}
            <div className="text-center mt-1">
              <p className="font-bold text-text-primary text-lg">Manideep Salla</p>
              <p className="text-sm text-text-secondary">Full Stack .NET & AI Developer</p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
