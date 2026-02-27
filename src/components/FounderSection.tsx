"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fundadora" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-2xl mx-auto px-6 text-center" ref={ref}>

        {/* Foto circular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#800020]/20">
            <Image
              src="/seo-be-capable.png"
              alt="CEO e Fundadora da Be.Capable"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl font-bold text-[#800020] mb-6"
        >
          CEO e Fundadora da Be.Capable
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-sans text-base md:text-lg text-[#800020]/80 leading-relaxed"
        >
          Minha jornada no marketing começou há dois anos, atuando internamente em
          uma empresa. Foi ali que descobri minha paixão por estratégia e organização
          — algo que sempre foi meu ponto forte. Com fé e direção de Deus, decidi dar um
          passo maior e fundar a Be.Capable. Hoje, lidero a agência com propósito, visão
          e o compromisso de gerar resultados reais para cada cliente. Acredito que
          empreender é mais do que crescer negócios — é impactar vidas.
        </motion.p>

      </div>
    </section>
  );
}
