"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 md:px-12 border-t border-[#c0c0c0]/20 bg-gradient-to-b from-[#0f0f1a]/20 to-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#f5f5dc] font-cinzel">
            Built by{" "}
            <span className="text-[#c0c0c0] font-bold">Christipher Trufant</span>
          </p>
          <p className="text-sm text-[#e6f1ff] mt-1">
            Powered by <span className="text-[#e6f1ff]">RYUK</span> — Autonomous AI Agent
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c0c0c0] to-[#e6f1ff] flex items-center justify-center shadow-[0_0_20px_#c0c0c0]">
            {/* Shinigami eye symbol */}
            <div className="w-6 h-6 bg-[#f5f5dc] rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#c0c0c0] rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: "https://github.com/chrisoutthepaint34-2267" },
            { Icon: Linkedin, href: "https://linkedin.com/in/christipher-trufant" },
            { Icon: Mail, href: "mailto:christipher.trufant@outlook.com" },
            { Icon: Code2, href: "https://github.com/chrisoutthepaint34-2267" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#c0c0c0]/30 flex items-center justify-center text-[#f5f5dc] hover:border-[#c0c0c0] hover:text-[#c0c0c0] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#c0c0c0]/10 text-center">
        <p className="text-sm text-[#c0c0c0]/60">
          © {new Date().getFullYear()} Christipher Trufant. All rights reserved.
        </p>
        <motion.a
          href="#hero"
          className="inline-block mt-4 text-sm text-[#e6f1ff] hover:text-[#c0c0c0] transition-colors"
          whileHover={{ y: -2 }}
        >
          Return to the top ↑
        </motion.a>
      </div>
    </footer>
  );
}
