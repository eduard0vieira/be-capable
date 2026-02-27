"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fundadora" className="py-24 bg-[#EAEAE4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#800020]/30 rounded-full font-sans text-xs font-semibold text-[#800020] tracking-widest uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#800020] inline-block" />
            Quem está por trás
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a]"
          >
            A Fundadora
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-[#800020]/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#800020]/15 scale-125" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#800020]/20">
                <Image
                  src="/seo-be-capable.png"
                  alt="CEO e Fundadora da Be.Capable"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-[#800020] text-white rounded-2xl px-5 py-3 shadow-lg"
              >
                <p className="font-sans text-xs font-semibold tracking-wide uppercase">CEO & Fundadora</p>
                <p className="font-serif text-sm font-bold mt-0.5">Be.Capable</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#800020] tracking-widest uppercase">
              <span className="w-8 h-px bg-[#800020]" />
              Sua história
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              CEO e Fundadora da{" "}
              <em className="text-[#800020] not-italic">Be.Capable</em>
            </h3>

            <p className="font-sans text-base text-[#1a1a1a]/65 leading-relaxed font-light">
              Minha jornada no marketing começou há dois anos, atuando internamente em
              uma empresa. Foi ali que descobri minha paixão por estratégia e organização
              — algo que sempre foi meu ponto forte. Com fé e direção de Deus, decidi dar um
              passo maior e fundar a Be.Capable. Hoje, lidero a agência com propósito, visão
              e o compromisso de gerar resultados reais para cada cliente. Acredito que
              empreender é mais do que crescer negócios — é impactar vidas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
