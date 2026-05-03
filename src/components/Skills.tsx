"use client";

import { motion } from "framer-motion";

const skillsData = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "D3.js", "Framer Motion"],
  Backend: ["Node.js", "Express", "Python", "PostgreSQL", "Supabase", "Prisma", "REST APIs", "GraphQL"],
  "AI/ML": ["Claude API", "TensorFlow.js", "Prompt Engineering", "LLM Orchestration", "Computer Vision", "Hugging Face"],
  Mobile: ["React Native", "Android Studio", "Jetpack Compose", "iOS"],
  Tools: ["Git", "Vercel", "Clerk", "Stripe", "CI/CD", "Docker", "AWS", "Linux"],
};

const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-cinzel text-center mb-20 text-[#ffdd57] tracking-wider">
          ARSENAL
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              className="group perspective-1000"
              initial={{ opacity: 0, rotateY: -15, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="death-note-page rounded-lg p-8 min-h-[280px] relative overflow-hidden border border-[#333]">
                <h3 className="text-2xl font-cinzel text-[#ff5c8d] mb-6 border-b border-[#ff5c8d]/30 pb-3 tracking-wider">
                  {category.toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {skillsData[category].map((skill, i) => (
                    <motion.li
                      key={skill}
                      className="text-lg text-[#f5f5dc] flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-[#ff5c8d] rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                {/* Glowing corner on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff5c8d]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -bottom-4 -right-2 w-10 h-14 bg-[#0a0a0a] border border-[#ff5c8d]/30 rounded flex items-center justify-center text-xs text-[#ff5c8d] font-mono">
                {String(idx + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="mt-24 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-2xl md:text-3xl font-cinzel text-[#f5f5dc] italic leading-relaxed">
          &ldquo;The pen is mightier than the sword, but the{" "}
          <span className="text-[#ff5c8d]">keyboard</span> is mightier than
          both.&rdquo;
        </p>
        <footer className="mt-4 text-[#ffdd57] text-sm tracking-widest uppercase">
          — Christipher Trufant
        </footer>
      </motion.blockquote>
    </section>
  );
}
