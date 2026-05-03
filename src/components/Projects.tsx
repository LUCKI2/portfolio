"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "./Icons";

const projects = [
  {
    name: "CareerCraft",
    description: "AI-Powered Career SaaS Platform",
    tech: ["Next.js", "TypeScript", "Claude API", "Supabase", "Clerk", "Stripe"],
    live: "https://careercraftai.it.com",
    github: "https://github.com/chrisoutthepaint34-2267/CareerCraft",
    featured: true,
  },
  {
    name: "RYUK",
    description: "Autonomous AI Agent — A J.A.R.V.I.S.-class agent that runs 24/7 across platforms",
    tech: ["Hermes Agent", "Telegram Bot", "Discord Bot", "LLM Orchestration"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/hack-ryuk",
  },
  {
    name: "APEX",
    description: "Security-Hardened Terminal AI Agent with Rich TUI and keychain integration",
    tech: ["Python", "Claude API", "Rich TUI", "macOS Keychain"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/apex",
  },
  {
    name: "AI Face Detection",
    description: "Real-Time Computer Vision with facial expression recognition",
    tech: ["JavaScript", "TensorFlow.js", "face-api.js"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/face-detection",
  },
  {
    name: "StockPulse",
    description: "AI Stock Prediction Dashboard with live charts and alerts",
    tech: ["Next.js", "TypeScript", "Recharts", "ML"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/stock-app",
  },
  {
    name: "Amazon Clone",
    description: "Full-Stack E-Commerce Platform with Prisma, PostgreSQL, and Stripe",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Stripe"],
    live: "https://amazon-clone-sigma-brown.vercel.app",
    github: "https://github.com/LUCKI2/amazon-clone",
  },
  {
    name: "Helios Desk",
    description: "iOS Helpdesk & SLA Platform built with React Native",
    tech: ["React Native", "TypeScript", "iOS"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/helios-desk",
  },
  {
    name: "DevPulse",
    description: "Developer Productivity Dashboard with real-time metrics",
    tech: ["React", "TypeScript", "D3.js"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/devpulse",
  },
  {
    name: "NVALT",
    description: "Full-Stack E-Commerce platform with React, Node, and Stripe",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/NVALT",
  },
  {
    name: "Gridiron Quest",
    description: "Python Football Simulator with advanced AI decision-making",
    tech: ["Python", "AI Simulation", "Statistics"],
    live: null,
    github: "https://github.com/chrisoutthepaint34-2267/gridiron-quest",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-cinzel text-center mb-4 text-[#c0c0c0] tracking-wider">
          THE DEATH NOTE
        </h2>
        <p className="text-center text-[#e6f1ff] tracking-widest uppercase text-sm mb-16">
          Projects Written in Blood
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            className={`${project.featured ? "md:col-span-2" : ""}`}
          >
            <div className="torn-edge bg-[#0f0f1a] p-8 transition-all duration-500 hover:border-l-[#c0c0c0] border-l-4 border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c0c0c0]/5 via-transparent to-[#e6f1ff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-cinzel text-[#f5f5dc] mb-2 group-hover:text-[#c0c0c0] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-lg text-[#e6f1ff] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs border border-[#c0c0c0]/30 rounded-full text-[#f5f5dc]/80 bg-[#0a0a0f]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ryuk inline-flex items-center gap-2 px-5 py-2 border"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-cinzel text-xs uppercase tracking-wider">Live</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-[#1a1a2e] text-[#f5f5dc] rounded border border-[#c0c0c0]/30 hover:border-[#c0c0c0] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-cinzel text-xs uppercase tracking-wider">Code</span>
                    </motion.a>
                  </div>
                </div>

                <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent" />
                <p className="mt-2 text-right text-xs text-[#c0c0c0]/60 font-mono">
                  Entry #{String(idx + 1).padStart(3, "0")}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
