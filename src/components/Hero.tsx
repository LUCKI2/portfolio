"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const subtitles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Agent Architect",
  "Problem Solver",
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = subtitles[subtitleIndex];
    const speed = isDeleting ? 50 : 100;
    const pause = 2000;

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, subtitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background: dramatic sunset sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e] via-[#ff5c8d] to-[#ff9a5c] opacity-90" />

      {/* Cloud layers */}
      <div className="cloud-layer absolute inset-0" />

      {/* City skyline silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Simple cityscape */}
          <path
            fill="#000"
            d="M0,120 L40,120 L40,80 L60,80 L60,120 L80,120 L80,60 L100,60 L100,120 L120,120 L120,90 L140,90 L140,120 L160,120 L160,100 L180,100 L180,120 L200,120 L200,70 L220,70 L220,120 L240,120 L240,110 L260,110 L260,120 L280,120 L280,80 L300,80 L300,120 L320,120 L320,50 L340,50 L340,120 L360,120 L360,120 L380,120 L380,60 L400,60 L400,120 L420,120 L420,40 L440,40 L440,120 L460,120 L460,95 L480,95 L480,120 L500,120 L500,120 L520,120 L520,55 L540,55 L540,120 L560,120 L560,100 L580,100 L580,120 L600,120 L600,120 L620,120 L620,65 L640,65 L640,120 L660,120 L660,85 L680,85 L680,120 L700,120 L700,30 L720,30 L720,120 L740,120 L740,120 L760,120 L760,105 L780,105 L780,120 L800,120 L800,120 L820,120 L820,60 L840,60 L840,120 L860,120 L860,40 L880,40 L880,120 L900,120 L900,120 L920,120 L920,75 L940,75 L940,120 L960,120 L960,120 L980,120 L980,90 L1000,90 L1000,120 L1020,120 L1020,110 L1040,110 L1040,120 L1060,120 L1060,120 L1080,120 L1080,55 L1100,55 L1100,120 L1120,120 L1120,85 L1140,85 L1140,120 L1160,120 L1160,120 L1180,120 L1180,65 L1200,65 L1200,120 L1220,120 L1220,100 L1240,100 L1240,120 L1260,120 L1260,120 L1280,120 L1280,70 L1300,70 L1300,120 L1320,120 L1320,95 L1340,95 L1340,120 L1360,120 L1360,120 L1380,120 L1380,45 L1400,45 L1400,120 L1440,120 L1440,200 L0,200 Z"
          />
        </svg>
      </div>

      {/* Ryuk silhouette on tower */}
      <motion.div
        className="relative z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
      >
        {/* Metal tower */}
        <div className="relative -translate-x-1/2 left-1/2">
          {/* Tower trunk */}
          <div className="w-4 h-80 bg-gradient-to-b from-[#2a2a2a] to-black mx-auto" />
          {/* Cross bars */}
          {[20, 40, 60, 80].map((top) => (
            <div
              key={top}
              className="absolute w-16 h-1 bg-[#333]"
              style={{ top: `${top}px`, left: "-6px" }}
            />
          ))}
          {/* Circular platform at top */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full border border-[#444]" />
        </div>

        {/* Ryuk figure */}
        <svg
          width="140"
          height="180"
          viewBox="0 0 140 180"
          className="relative drop-shadow-2xl"
          style={{ marginLeft: "-70px" }}
        >
          {/* Body silhouette */}
          <path
            d="M70 30
               C50 30, 30 50, 25 80
               L20 140
               C20 160, 30 170, 40 165
               L55 150
               L55 170 L85 170 L85 150
               L100 165
               C110 170, 120 160, 120 140
               L115 80
               C110 50, 90 30, 70 30
               Z"
            fill="#0a0a0a"
          />
          {/* Head */}
          <ellipse cx="70" cy="40" rx="25" ry="30" fill="#0a0a0a" />
          {/* Spiky hair */}
          <path
            d="M45 30 L40 10 L55 25 L60 5 L75 25 L90 5 L105 25 L100 10 L90 30"
            fill="#0a0a0a"
          />
          {/* Wings hint */}
          <path d="M25 70 L5 100 L10 110 L30 85" fill="none" stroke="#111" strokeWidth="3" />
          <path d="M115 70 L135 100 L130 110 L110 85" fill="none" stroke="#111" strokeWidth="3" />
          {/* Glowing red eyes */}
          <circle cx="60" cy="40" r="5" fill="#ff0033" className="animate-pulse" filter="drop-shadow(0 0 8px #ff0033)" />
          <circle cx="80" cy="40" r="5" fill="#ff0033" className="animate-pulse" filter="drop-shadow(0 0 8px #ff0033)" />
          {/* Death Note in hand */}
          <rect x="95" y="100" width="20" height="28" rx="2" fill="#1a1a1a" stroke="#ff0033" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Name — below Ryuk */}
      <motion.div
        className="mt-12 text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4.5 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f5f5dc] glow-name tracking-wider">
          CHRISTIPHER
          <br />
          <span className="text-[#ff5c8d]">TRUFANT</span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="mt-6 text-xl md:text-2xl text-[#ffdd57] font-light min-h-[2em]">
          <span className="font-serif italic">{displayed}</span>
          <span className="typewriter-cursor ml-1 animate-pulse" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <div className="w-6 h-10 border-2 border-[#ff5c8d] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-[#ffdd57] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs text-[#ff5c8d] uppercase tracking-widest">Scroll</p>
      </motion.div>
    </section>
  );
}
