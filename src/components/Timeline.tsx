"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "May 2025",
    title: "CS Degree — SWOSU",
    subtitle: "Cum Laude",
    description: "Graduated with honors, completed capstone projects and research.",
  },
  {
    year: "2025",
    title: "Built Helios Desk, DevPulse, NVALT",
    subtitle: "Expanded portfolio",
    description: "Launched multiple full-stack applications covering mobile, dashboards, and e-commerce.",
  },
  {
    year: "2026",
    title: "Launched CareerCraft",
    subtitle: "AI-powered SaaS",
    description: "Built an end-to-end job platform with Claude, Supabase, Clerk, and Stripe. Ship-ready.",
  },
  {
    year: "2026",
    title: "Built RYUK and APEX",
    subtitle: "Autonomous agents",
    description: "Created J.A.R.V.I.S.-class AI assistants that run across Telegram and Discord 24/7, plus a hardened terminal agent.",
  },
  {
    year: "2026",
    title: "AI Face Detection, StockPulse, Amazon Clone",
    subtitle: "Full-stack + AI",
    description: "Demonstrated computer vision, ML, and enterprise e-commerce capabilities with real-time processing and production deployments.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="relative py-32 px-4 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-cinzel text-center mb-20 text-[#f5f5dc] tracking-wider">
          CHRONICLES
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#ff5c8d] to-transparent transform md:-translate-x-1/2 shadow-[0_0_15px_#ff5c8d,0_0_30px_#ff0033]" />

        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            className={`relative flex items-center mb-16 last:mb-0 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-[#ff0033] rounded-full border-4 border-black shadow-[0_0_15px_#ff0033] transform md:-translate-x-1/2 z-10 glow-dot" />

            {/* Content */}
            <div
              className={`ml-16 md:ml-0 md:w-1/2 ${
                idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
              }`}
            >
              <motion.div
                className="bg-[#0a0a0a] border border-[#ff5c8d]/20 p-6 rounded"
                whileHover={{ scale: 1.02, borderColor: "#ff5c8d60" }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block text-[#ff5c8d] font-cinzel text-sm mb-2">{m.year}</span>
                <h3 className="text-xl md:text-2xl font-cinzel text-[#f5f5dc] mb-2">{m.title}</h3>
                <p className="text-[#ffdd57] text-sm mb-3">{m.subtitle}</p>
                <p className="text-[#f5f5dc]/70 leading-relaxed">{m.description}</p>

                <div
                  className={`absolute top-8 w-8 h-0.5 bg-[#ff5c8d] ${
                    idx % 2 === 0 ? "-right-8 md:left-auto md:right-0" : "-left-8 md:left-0 md:right-auto"
                  } hidden md:block`}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
