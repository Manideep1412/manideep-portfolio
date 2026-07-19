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

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background grid-bg">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-accent-cyan/4 blur-[100px]" />
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
