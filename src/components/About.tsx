"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "./Icons";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Bio text */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-cinzel text-[#f5f5dc]">
            <span className="text-[#ff5c8d]">"I don't write code.</span>
            <br />
            <span className="text-[#ff9a5c]">I write destinies.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#f5f5dc]/90">
            <p>
              CS graduate from{" "}
              <span className="text-[#ffdd57] font-semibold">SWOSU</span>.{" "}
              <span className="text-[#ff5c8d] font-bold">Cum Laude</span>. I build
              full-stack applications, AI-powered platforms, and autonomous agents
              that operate 24/7 like a Shinigami's gaze.
            </p>
            <p>
              Currently seeking entry-level SWE roles where I can ship
              production code from day one. I don't just solve problems — I
              eliminate them.
            </p>
          </div>

          {/* Divider with shinigami eye */}
          <div className="relative py-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#ff5c8d] to-transparent shadow-[0_0_15px_#ff5c8d]" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full bg-[#0a0a0a] border-4 border-[#ff5c8d] flex items-center justify-center shadow-[0_0_20px_#ff0033]"
              animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 15px #ff0033", "0 0 30px #ff0033", "0 0 15px #ff0033"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-[#ff0033] rounded-full" />
            </motion.div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-[#ffdd57] text-lg">
            <MapPin className="w-5 h-5" />
            <span>Plano, Texas</span>
            <span className="text-[#ff5c8d]">|</span>
            <span className="text-[#f5f5dc]/70">Open to relocation</span>
          </div>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="https://github.com/chrisoutthepaint34-2267"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ryuk inline-flex items-center gap-3 px-6 py-3 rounded font-cinzel tracking-wider uppercase text-sm border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/christipher-trufant"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ryuk inline-flex items-center gap-3 px-6 py-3 rounded font-cinzel tracking-wider uppercase text-sm border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:christipher.trufant@outlook.com"
              className="btn-ryuk inline-flex items-center gap-3 px-6 py-3 rounded font-cinzel tracking-wider uppercase text-sm border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>
          </div>
        </div>

        {/* Right: Ryuk-inspired silhouette */}
        <div className="relative flex items-center justify-center">
          {/* Glowing backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff0033]/10 via-transparent to-[#ff9a5c]/10 blur-3xl rounded-full" />

          {/* Ryuk perched SVG */}
          <motion.svg
            width="280"
            height="320"
            viewBox="0 0 280 320"
            className="relative drop-shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Tower */}
            <rect x="130" y="200" width="20" height="120" fill="#0a0a0a" />
            {[30, 60, 90, 120].map((top) => (
              <rect
                key={top}
                x={`${100 + (top/120)*40}`}
                y={`${200 - top}`}
                width={60}
                height="2"
                fill="#333"
              />
            ))}
            <ellipse cx="140" cy="200" rx="30" ry="8" fill="#111" />
            {/* Ryuk body */}
            <path
              d="M120 120
                 C100 100, 80 80, 70 50
                 L60 -10
                 C55 -30, 45 -35, 40 -25
                 L35 -15
                 C33 -10, 28 0, 30 10
                 L40 30
                 C45 45, 55 50, 65 35
                 L85 60
                 C100 75, 115 70, 125 55
                 L145 35
                 C155 20, 175 15, 190 25
                 L210 -15
                 C215 -35, 225 -40, 230 -30
                 L235 -15
                 C238 -5, 245 5, 240 20
                 L230 60
                 C220 85, 200 100, 190 120
                 L195 210
                 C197 230, 210 240, 215 220
                 L205 210
                 L200 210 L190 230 L160 230 L150 210
                 L145 210
                 C140 240, 155 250, 160 220
                 L165 210
                 C180 210, 200 195, 210 170
                 L215 150
                 C225 130, 215 120, 210 105
                 L200 80
                 C190 60, 170 55, 160 65
                 L140 85
                 C130 95, 110 100, 100 85
                 L90 60
                 C80 40, 60 35, 50 45
                 L40 65
                 C30 80, 40 90, 55 100
                 L75 115
                 Z"
              fill="#0a0a0a"
            />
            {/* Eyes */}
            <circle cx="90" cy="65" r="7" fill="#ff0033" filter="drop-shadow(0 0 10px #ff0033)" />
            <circle cx="150" cy="65" r="7" fill="#ff0033" filter="drop-shadow(0 0 10px #ff0033)" />
            {/* Wings */}
            <path d="M50 90 L20 140 L25 150 L55 105" fill="none" stroke="#111" strokeWidth="3" />
            <path d="M230 90 L260 140 L255 150 L225 105" fill="none" stroke="#111" strokeWidth="3" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}
