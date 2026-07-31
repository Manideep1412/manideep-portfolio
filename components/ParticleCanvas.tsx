"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const COLORS = ["#4f8ef7", "#a855f7", "#22d3ee", "#f472b6", "#4f8ef7", "#4f8ef7"];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mkParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.4 + 0.8,
      opacity: Math.random() * 0.6 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.012 + Math.random() * 0.02,
    });

    resize();
    for (let i = 0; i < 90; i++) particles.push(mkParticle());

    const onResize = () => resize();
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse opacity
        p.pulse += p.pulseSpeed;
        const pulsedOpacity = p.opacity * (0.75 + 0.25 * Math.sin(p.pulse));

        // Subtle mouse repulsion
        const dx = mx - p.x;
        const dy = my - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 14400) { // 120px
          const dist = Math.sqrt(distSq);
          const force = (120 - dist) / 120 * 0.00035;
          p.vx -= dx * force;
          p.vy -= dy * force;
        }

        p.vx *= 0.998;
        p.vy *= 0.998;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        // Large outer glow
        const grd2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
        grd2.addColorStop(0, p.color + "55");
        grd2.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
        ctx.fillStyle = grd2;
        ctx.globalAlpha = pulsedOpacity * 0.5;
        ctx.fill();

        // Inner glow halo
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        grd.addColorStop(0, p.color);
        grd.addColorStop(0.5, p.color + "99");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.globalAlpha = pulsedOpacity * 0.8;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = pulsedOpacity * 0.9;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cd = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cd < 130) {
            const alpha = (1 - cd / 130) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.85 }}
    />
  );
}
