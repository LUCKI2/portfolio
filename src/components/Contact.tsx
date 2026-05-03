"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-cinzel text-center mb-4 text-[#ff5c8d] tracking-wider">
          WRITE MY NAME
        </h2>
        <p className="text-center text-[#ff9a5c] tracking-widest uppercase text-sm mb-16">
          In the Death Note... or just send a message
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form action="https://formspree.io/f/mqazqkqp" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider text-[#ffdd57] mb-2 font-cinzel">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name..."
                className="w-full bg-[#0a0a0a] border border-[#ff5c8d]/30 rounded px-4 py-3 text-[#f5f5dc] placeholder:text-[#f5f5dc]/40 focus:outline-none focus:border-[#ff5c8d] focus:ring-1 focus:ring-[#ff5c8d] transition-all font-serif"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider text-[#ffdd57] mb-2 font-cinzel">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="your@email.com"
                className="w-full bg-[#0a0a0a] border border-[#ff5c8d]/30 rounded px-4 py-3 text-[#f5f5dc] placeholder:text-[#f5f5dc]/40 focus:outline-none focus:border-[#ff5c8d] focus:ring-1 focus:ring-[#ff5c8d] transition-all font-serif"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-[#ffdd57] mb-2 font-cinzel">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Write your message here..."
                className="w-full bg-[#0a0a0a] border border-[#ff5c8d]/30 rounded px-4 py-3 text-[#f5f5dc] placeholder:text-[#f5f5dc]/40 focus:outline-none focus:border-[#ff5c8d] focus:ring-1 focus:ring-[#ff5c8d] transition-all resize-none font-serif"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-ryuk w-full py-4 font-cinzel text-lg tracking-wider uppercase border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Write in the Death Note
            </motion.button>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-3xl font-cinzel text-[#f5f5dc] mb-6">Direct Channels</h3>
            <div className="space-y-6">
              <a
                href="mailto:christipher.trufant@outlook.com"
                className="flex items-center gap-4 text-xl text-[#f5f5dc]/80 hover:text-[#ff5c8d] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff5c8d]/20 border border-[#ff5c8d]/30 flex items-center justify-center group-hover:border-[#ff5c8d] group-hover:bg-[#ff5c8d]/40 transition-all">
                  <Mail className="w-5 h-5 text-[#ff5c8d]" />
                </div>
                <span>CHR378@outlook.com</span>
              </a>
              <a
                href="https://github.com/chrisoutthepaint34-2267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl text-[#f5f5dc]/80 hover:text-[#ff5c8d] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff5c8d]/20 border border-[#ff5c8d]/30 flex items-center justify-center group-hover:border-[#ff5c8d] group-hover:bg-[#ff5c8d]/40 transition-all">
                  <Github className="w-5 h-5 text-[#ff5c8d]" />
                </div>
                <span>github.com/chrisoutthepaint34-2267</span>
              </a>
              <a
                href="https://linkedin.com/in/christipher-trufant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl text-[#f5f5dc]/80 hover:text-[#ff5c8d] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff5c8d]/20 border border-[#ff5c8d]/30 flex items-center justify-center group-hover:border-[#ff5c8d] group-hover:bg-[#ff5c8d]/40 transition-all">
                  <Linkedin className="w-5 h-5 text-[#ff5c8d]" />
                </div>
                <span>linkedin.com/in/christipher-trufant</span>
              </a>
            </div>
          </div>

          <div className="border-l-4 border-[#ff5c8d] pl-6 py-4 bg-[#0a0a0a]/50">
            <p className="text-xl italic text-[#f5f5dc]/80">
              &ldquo;I don&apos;t just write code — I write destinies.&rdquo;
            </p>
            <p className="mt-2 text-[#ffdd57] text-right">— CT</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
