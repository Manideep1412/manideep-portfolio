import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BackendEngineering from "@/components/BackendEngineering";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import DemoApps from "@/components/DemoApps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import FloatingGeometry from "@/components/FloatingGeometry";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background grid-bg">
      {/* Scroll progress — neon line at top of viewport */}
      <ScrollProgress />
      {/* Cosmic particle field */}
      <ParticleCanvas />
      {/* 3D wireframe geometry decoration */}
      <FloatingGeometry />

      {/* Ambient aurora orbs — vivid cosmic depth */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-blob absolute -top-40 left-1/4 h-[750px] w-[750px]"
          style={{ background: "rgba(79,142,247,0.22)" }} />
        <div className="aurora-blob absolute top-1/3 -right-40 h-[650px] w-[650px]"
          style={{ background: "rgba(168,85,247,0.18)", animationDelay: "-4s", animationDuration: "15s" }} />
        <div className="aurora-blob absolute bottom-1/4 left-1/3 h-[550px] w-[550px]"
          style={{ background: "rgba(34,211,238,0.14)", animationDelay: "-8s", animationDuration: "18s" }} />
        <div className="aurora-blob absolute top-2/3 right-1/4 h-[450px] w-[450px]"
          style={{ background: "rgba(244,114,182,0.10)", animationDelay: "-12s", animationDuration: "22s" }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DemoApps />
        <BackendEngineering />
        <Architecture />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
