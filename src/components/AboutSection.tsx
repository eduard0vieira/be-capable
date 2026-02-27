"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const stats = [
  { value: "100%", label: "Comprometimento" },
  { value: "10+", label: "Serviços oferecidos" },
  { value: "∞", label: "Potencial de crescimento" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-24 bg-[#EAEAE4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-4 bg-[#800020] rounded-[3rem] rotate-3" />
              <div className="absolute inset-4 bg-[#F5F5F0] rounded-[3rem] -rotate-2 border-2 border-[#800020]/20" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 rounded-[3rem]">
                <Logo width={220} height={107} />
                <div className="mt-8 w-16 h-0.5 bg-[#800020]/40" />
                <p className="mt-6 font-sans text-sm text-[#1a1a1a]/50 text-center italic leading-relaxed">
                  &ldquo;Ser capaz de fazer sua marca acontecer.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#800020] tracking-widest uppercase">
              <span className="w-8 h-px bg-[#800020]" />
              Quem Somos
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Transformando marcas em{" "}
              <em className="text-[#800020] not-italic">referências</em>
            </h2>

            <div className="flex flex-col gap-4 font-sans text-[#1a1a1a]/65 text-base leading-relaxed font-light">
              <p>
                Somos uma agência de marketing focada em crescimento, posicionamento e geração de resultados.
              </p>
              <p>
                Nossa missão é ajudar empresas a se destacarem no mercado através de estratégias digitais personalizadas.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#800020] text-white font-sans font-semibold rounded-full text-sm hover:bg-[#600018] transition-colors"
              >
                Ver nossos serviços
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-[#800020] hover:underline underline-offset-4"
              >
                Fale conosco →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
