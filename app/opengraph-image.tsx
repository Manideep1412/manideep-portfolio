import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Manideep Salla — Full Stack .NET & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLUE   = "#4f8ef7";
const PURPLE = "#a855f7";
const CYAN   = "#22d3ee";
const BG     = "#05050f";
const TEXT   = "#f1f5f9";
const MUTED  = "#94a3b8";

const TAGS = [".NET 10", "Angular 20", "C#", "Azure", "TypeScript", "OpenAI / RAG", "Microservices"];
const STATS = [
  { value: "11+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "3",   label: "Industries" },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: BG,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Background blobs ── */}
        <div
          style={{
            position: "absolute", top: -160, left: "22%",
            width: 620, height: 620, borderRadius: "50%",
            background: "rgba(79,142,247,0.16)", filter: "blur(110px)",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: -120, right: "4%",
            width: 520, height: 520, borderRadius: "50%",
            background: "rgba(168,85,247,0.13)", filter: "blur(110px)",
          }}
        />
        <div
          style={{
            position: "absolute", top: "40%", left: "-5%",
            width: 300, height: 300, borderRadius: "50%",
            background: "rgba(34,211,238,0.09)", filter: "blur(80px)",
          }}
        />

        {/* ── Grid pattern overlay ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              `linear-gradient(rgba(79,142,247,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(79,142,247,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Availability badge ── */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(79,142,247,0.10)",
            border: "1px solid rgba(79,142,247,0.35)",
            borderRadius: 999, padding: "10px 24px", marginBottom: 34,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: BLUE }} />
          <span style={{ color: BLUE, fontSize: 19, fontWeight: 600 }}>
            Available for new opportunities
          </span>
        </div>

        {/* ── Name ── */}
        <div
          style={{
            fontSize: 76, fontWeight: 800, color: TEXT,
            lineHeight: 1.05, marginBottom: 16, letterSpacing: "-2px",
          }}
        >
          Manideep Salla
        </div>

        {/* ── Title ── */}
        <div
          style={{
            fontSize: 36, fontWeight: 700, color: BLUE,
            marginBottom: 48, letterSpacing: "-0.5px",
          }}
        >
          Full Stack .NET &amp; AI Developer
        </div>

        {/* ── Tech tags ── */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 0 }}>
          {TAGS.map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(79,142,247,0.09)",
                border: "1px solid rgba(79,142,247,0.28)",
                borderRadius: 999, padding: "9px 20px",
                color: MUTED, fontSize: 18,
                fontFamily: "ui-monospace, SFMono-Regular, monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* ── Stats — bottom right ── */}
        <div
          style={{
            position: "absolute", bottom: 72, right: 80,
            display: "flex", gap: 56, alignItems: "flex-end",
          }}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span style={{ fontSize: 58, fontWeight: 800, color: PURPLE, lineHeight: 1 }}>
                {value}
              </span>
              <span style={{ fontSize: 17, color: MUTED, marginTop: 4 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Neon accent line — left edge ── */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: 4,
            background: `linear-gradient(to bottom, ${BLUE}, ${PURPLE}, ${CYAN})`,
          }}
        />

        {/* ── Bottom left: domain ── */}
        <div
          style={{
            position: "absolute", bottom: 76, left: 80,
            color: "#3b3b6e", fontSize: 17, fontFamily: "ui-monospace, monospace",
          }}
        >
          manideepsalla.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
