import { motion } from "framer-motion";
import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const sections = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "experience", Component: Timeline },
  { id: "contact", Component: Contact },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Loading screen */}
      <LoadingScreen />

      {/* Particle background */}
      <ParticleBackground />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        {sections.map(({ id, Component }) => (
          <div key={id} id={id}>
            <Component />
          </div>
        ))}
        <Footer />
      </motion.div>

      {/* Scroll progress bar */}
      <ScrollProgress />
    </main>
  );
}

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-bar");
    if (!bar) return;
    const onScroll = () => {
      const win = document.documentElement;
      const doc = document.body;
      const scrollTop = win.scrollTop || doc.scrollTop;
      const height = win.scrollHeight - win.clientHeight;
      const pct = (scrollTop / height) * 100;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      id="scroll-bar"
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#c0c0c0] to-[#e6f1ff] z-50 shadow-[0_0_10px_#c0c0c0]"
      style={{ width: "0%", transition: "width 0.1s ease-out" }}
    />
  );
}
