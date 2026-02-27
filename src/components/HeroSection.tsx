"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/contact";

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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
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
      <motion.a
        href="#servicos"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 group cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-[#800020]/25 flex items-start justify-center pt-2 group-hover:border-[#800020]/50 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#800020]"
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
