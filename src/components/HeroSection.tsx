"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gap-10 bg-[#F5F5F0] px-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <Logo width={420} height={204} />
      </motion.div>

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4"
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <a
          href="#servicos"
          className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a1a1a]/20 text-[#1a1a1a] font-sans font-medium rounded-full text-base hover:border-[#800020] hover:text-[#800020] transition-all duration-300"
        >
          Conheça nossos serviços
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
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
    </section>
  );
}
