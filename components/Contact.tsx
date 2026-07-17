"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "devmanideep.s@gmail.com",
    href: "mailto:devmanideep.s@gmail.com",
    desc: "Best for project inquiries",
    color: "blue",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manideep-salla",
    href: "https://www.linkedin.com/in/manideep-salla-150468279/",
    desc: "Professional network",
    color: "blue",
    copyable: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Manideep1412",
    href: "https://github.com/Manideep1412?tab=repositories",
    desc: "Open source work",
    color: "purple",
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Canada",
    href: null,
    desc: "Open to remote globally",
    color: "cyan",
    copyable: false,
  },
];

const colorMap: Record<string, string> = {
  blue: "text-accent-blue border-accent-blue/25 bg-accent-blue/8",
  purple: "text-accent-purple border-accent-purple/25 bg-accent-purple/8",
  cyan: "text-accent-cyan border-accent-cyan/25 bg-accent-cyan/8",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md text-text-muted hover:text-accent-blue transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-blue uppercase tracking-widest mb-3">
            // Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            I&apos;m open to senior full stack roles, contract work, and consulting engagements.
            Let&apos;s talk about what you&apos;re building.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-7 mb-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Open to Opportunities
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m actively looking for <strong className="text-text-primary">Senior Full Stack Developer</strong> positions
                or long-term contract engagements where I can leverage my .NET, Angular, and Azure expertise.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Full-time", "Contract", "Remote", "Hybrid", "Canada / Global"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-accent-blue/20 bg-accent-blue/8 text-accent-blue font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {contactMethods.map((method, i) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 glass-hover flex items-center gap-4"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colorMap[method.color]} flex-shrink-0`}>
                  <method.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-muted mb-0.5">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-sm font-medium text-text-primary hover:text-accent-blue transition-colors truncate block"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-text-primary truncate">
                      {method.value}
                    </p>
                  )}
                  <p className="text-xs text-text-muted mt-0.5">{method.desc}</p>
                </div>
                {method.copyable && <CopyButton text={method.value} />}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ContactForm inView={inView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ inView: _inView }: { inView: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-7 space-y-5"
    >
      <h3 className="text-lg font-bold text-text-primary">Send a Message</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-text-muted font-medium">Your Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-text-muted font-medium">Email Address</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-text-muted font-medium">Subject</label>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Senior .NET Developer Role — Company Name"
          className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-text-muted font-medium">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about the role, your stack, timeline, and what you're building..."
          className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={`w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed ${status === "error" ? "!bg-red-500/80" : ""}`}
        whileHover={status === "idle" ? { scale: 1.01 } : {}}
        whileTap={status === "idle" ? { scale: 0.99 } : {}}
      >
        {status === "idle" && (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
        {status === "sending" && (
          <>
            <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending...
          </>
        )}
        {status === "sent" && (
          <>
            <Check className="h-4 w-4 text-green-300" />
            Message Sent!
          </>
        )}
        {status === "error" && (
          <>
            <Send className="h-4 w-4" />
            Failed — Try Again
          </>
        )}
      </motion.button>

      <p className="text-xs text-text-muted text-center">
        I typically respond within 24 hours. You can also reach me directly via email.
      </p>
    </form>
  );
}
