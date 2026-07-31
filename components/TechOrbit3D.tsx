"use client";

import { useEffect, useRef } from "react";

// Inner ring — major tech
const RING1 = [
  { label: ".NET 10",    color: "#4f8ef7" },
  { label: "Angular",    color: "#a855f7" },
  { label: "React",      color: "#22d3ee" },
  { label: "C#",         color: "#60a5fa" },
  { label: "Azure",      color: "#38bdf8" },
  { label: "OpenAI",     color: "#10b981" },
  { label: "Docker",     color: "#06b6d4" },
  { label: "TypeScript", color: "#f472b6" },
];

// Outer ring — secondary tech
const RING2 = [
  { label: "Kubernetes", color: "#22d3ee" },
  { label: "SQL Server", color: "#a855f7" },
  { label: "OAuth2",     color: "#4f8ef7" },
  { label: "RAG / LLM",  color: "#10b981" },
  { label: "gRPC",       color: "#f472b6" },
  { label: "Redis",      color: "#ef4444" },
];

// Container: 400×400. Center at (200, 200).
const CX = 200;
const CY = 200;
const RX1 = 165; // inner ring x-radius
const RY1 =  54; // inner ring y-radius (foreshortened → looks tilted in 3D)
const RX2 = 195; // outer ring x-radius
const RY2 =  65; // outer ring y-radius

export default function TechOrbit3D() {
  const r1Ref = useRef<HTMLDivElement>(null);
  const r2Ref = useRef<HTMLDivElement>(null);
  const a1 = useRef(0);
  const a2 = useRef(Math.PI * 0.75);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      a1.current += 0.007;
      a2.current -= 0.005;

      const moveRing = (
        ref: React.RefObject<HTMLDivElement | null>,
        n: number,
        base: number,
        rx: number,
        ry: number
      ) => {
        const els = ref.current?.querySelectorAll<HTMLElement>(".oi");
        els?.forEach((el, i) => {
          const phase = base + (i / n) * Math.PI * 2;
          const x = CX + rx * Math.cos(phase);
          const y = CY + ry * Math.sin(phase);
          const depth = (Math.sin(phase) + 1) / 2; // 0=back 1=front
          const scale = 0.65 + 0.35 * depth;
          const opacity = 0.4 + 0.6 * depth;

          el.style.left = `${x}px`;
          el.style.top = `${y}px`;
          el.style.transform = `translate(-50%, -50%) scale(${scale})`;
          el.style.opacity = `${opacity}`;
          el.style.zIndex = depth > 0.45 ? "5" : "1";
        });
      };

      moveRing(r1Ref, RING1.length, a1.current, RX1, RY1);
      moveRing(r2Ref, RING2.length, a2.current, RX2, RY2);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative" style={{ width: 400, height: 400 }}>
      {/* SVG orbit track ellipses */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={400}
        height={400}
        style={{ zIndex: 2 }}
      >
        {/* Inner ring track */}
        <ellipse
          cx={CX} cy={CY} rx={RX1} ry={RY1}
          fill="none"
          stroke="rgba(79,142,247,0.25)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* Outer ring track */}
        <ellipse
          cx={CX} cy={CY} rx={RX2} ry={RY2}
          fill="none"
          stroke="rgba(168,85,247,0.18)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        {/* Center crosshair */}
        <line x1={CX - 8} y1={CY} x2={CX + 8} y2={CY} stroke="rgba(79,142,247,0.5)" strokeWidth="1" />
        <line x1={CX} y1={CY - 8} x2={CX} y2={CY + 8} stroke="rgba(79,142,247,0.5)" strokeWidth="1" />
        {/* Center glow dot */}
        <circle cx={CX} cy={CY} r="3" fill="rgba(79,142,247,0.6)" />
      </svg>

      {/* Inner ring items */}
      <div ref={r1Ref} className="absolute inset-0 pointer-events-none">
        {RING1.map((item) => (
          <div
            key={item.label}
            className="oi absolute"
            style={{ left: CX, top: CY, willChange: "transform, opacity, left, top" }}
          >
            <span
              style={{
                display: "inline-block",
                background: `${item.color}20`,
                border: `1px solid ${item.color}90`,
                color: item.color,
                padding: "3px 10px",
                borderRadius: "8px",
                fontSize: "11px",
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                whiteSpace: "nowrap",
                boxShadow: `0 0 12px ${item.color}60`,
                backdropFilter: "blur(6px)",
                letterSpacing: "0.02em",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Outer ring items */}
      <div ref={r2Ref} className="absolute inset-0 pointer-events-none">
        {RING2.map((item) => (
          <div
            key={item.label}
            className="oi absolute"
            style={{ left: CX, top: CY, willChange: "transform, opacity, left, top" }}
          >
            <span
              style={{
                display: "inline-block",
                background: `${item.color}14`,
                border: `1px solid ${item.color}70`,
                color: item.color,
                padding: "2px 9px",
                borderRadius: "7px",
                fontSize: "10px",
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 600,
                whiteSpace: "nowrap",
                boxShadow: `0 0 8px ${item.color}45`,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
