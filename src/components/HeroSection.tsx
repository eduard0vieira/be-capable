"use client";

import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.07 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#800020]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full bg-[#800020]"
        />
        {/* Thin horizontal line accent */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#800020]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Tag line */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#800020]/30 rounded-full font-sans text-xs font-semibold text-[#800020] tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#800020] inline-block" />
            Agência de Marketing
          </motion.span>

          {/* Main title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-none tracking-tight"
          >
            Be.{" "}
            <span className="text-[#800020]">Capable</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-[#1a1a1a]/60 font-light max-w-2xl leading-relaxed"
          >
            Estratégias inteligentes, criatividade e performance para gerar{" "}
            <strong className="font-semibold text-[#1a1a1a]/80">
              resultados reais
            </strong>{" "}
            para o seu negócio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#800020] text-white font-sans font-semibold rounded-full text-base hover:bg-[#600018] transition-all duration-300 shadow-lg shadow-[#800020]/25 hover:shadow-[#800020]/40 hover:scale-105"
            >
              Solicite um orçamento
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a1a1a]/20 text-[#1a1a1a] font-sans font-medium rounded-full text-base hover:border-[#800020] hover:text-[#800020] transition-all duration-300"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs text-[#1a1a1a]/40 uppercase tracking-widest">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#800020]/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
