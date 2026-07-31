"use client";

interface CubeProps {
  size: number;
  color: string;
  duration: number;
  delay: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity: number;
}

const CUBES: CubeProps[] = [
  { size: 58, color: "79,142,247",  top: "10%", left: "2.5%",  duration: 22, delay: 0,   opacity: 0.35 },
  { size: 42, color: "168,85,247",  top: "38%", right: "2%",   duration: 30, delay: -10, opacity: 0.28 },
  { size: 68, color: "34,211,238",  top: "65%", left: "1.5%",  duration: 38, delay: -18, opacity: 0.22 },
  { size: 36, color: "244,114,182", top: "20%", right: "7%",   duration: 25, delay: -6,  opacity: 0.26 },
  { size: 50, color: "79,142,247",  top: "80%", right: "3.5%", duration: 32, delay: -22, opacity: 0.20 },
  { size: 32, color: "168,85,247",  top: "52%", left: "5%",    duration: 19, delay: -8,  opacity: 0.30 },
  { size: 44, color: "34,211,238",  top: "88%", left: "12%",   duration: 27, delay: -14, opacity: 0.18 },
  { size: 38, color: "244,114,182", top: "5%",  right: "18%",  duration: 34, delay: -3,  opacity: 0.22 },
];

function WireframeCube({ size, color, duration, delay, opacity, top, left, right, bottom }: CubeProps) {
  const h = size / 2;
  const border = `rgba(${color},${opacity})`;
  const bg = `rgba(${color},0.015)`;

  const faces: { transform: string }[] = [
    { transform: `translateZ(${h}px)` },
    { transform: `rotateY(180deg) translateZ(${h}px)` },
    { transform: `rotateY(-90deg) translateZ(${h}px)` },
    { transform: `rotateY(90deg) translateZ(${h}px)` },
    { transform: `rotateX(90deg) translateZ(${h}px)` },
    { transform: `rotateX(-90deg) translateZ(${h}px)` },
  ];

  return (
    <div style={{ position: "absolute", top, left, right, bottom, perspective: `${size * 7}px` }}>
      <div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          animation: `rotateCube3D ${duration}s linear ${delay}s infinite`,
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              border: `1px solid ${border}`,
              background: bg,
              transform: face.transform,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Rotating wireframe rings (flat torus-like decoration)
const RINGS = [
  { size: 90,  top: "30%", right: "1%",  color: "79,142,247",  duration: 15, delay: 0,   opacity: 0.22 },
  { size: 70,  top: "70%", left: "3%",   color: "168,85,247",  duration: 20, delay: -7,  opacity: 0.18 },
  { size: 110, top: "8%",  left: "8%",   color: "34,211,238",  duration: 25, delay: -12, opacity: 0.15 },
];

function WireframeRing({ size, top, left, right, color, duration, delay, opacity }: {
  size: number; top?: string; left?: string; right?: string; color: string; duration: number; delay: number; opacity: number;
}) {
  const border = `rgba(${color},${opacity})`;
  return (
    <div style={{ position: "absolute", top, left, right, perspective: `${size * 5}px` }}>
      <div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          animation: `rotateRing ${duration}s linear ${delay}s infinite`,
        }}
      >
        {/* Three flat rings at different rotations for wireframe torus look */}
        {[0, 60, 120].map((angle) => (
          <div
            key={angle}
            style={{
              position: "absolute",
              inset: 0,
              border: `1px solid ${border}`,
              borderRadius: "50%",
              transform: `rotateY(${angle}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {CUBES.map((cube, i) => (
        <WireframeCube key={i} {...cube} />
      ))}
      {RINGS.map((ring, i) => (
        <WireframeRing key={i} {...ring} />
      ))}
    </div>
  );
}
