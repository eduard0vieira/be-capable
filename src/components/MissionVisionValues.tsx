"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Transparência",
    description:
      "Acreditamos em relações honestas com nossos clientes. Compartilhamos resultados, desafios e aprendizados com clareza e responsabilidade.",
    icon: "👁",
  },
  {
    title: "Excelência",
    description:
      "Não nos contentamos com o mediano. Cada entrega é tratada com rigor e cuidado, buscando sempre superar expectativas.",
    icon: "✦",
  },
  {
    title: "Fé",
    description:
      "Acreditamos no poder de uma visão maior. Nossa fé nos move a persistir, inovar e encontrar propósito em cada projeto.",
    icon: "✝",
  },
  {
    title: "Propósito",
    description:
      "Não trabalhamos apenas por resultados — trabalhamos por impacto. Cada ação é conectada a um motivo genuíno de transformação.",
    icon: "◈",
  },
];

const pillars = [
  {
    label: "Missão",
    text: "Oferecer soluções estratégicas de marketing que potencializem o crescimento e o posicionamento de marcas com autenticidade, criatividade e resultados mensuráveis.",
    accent: "bg-[#800020]",
    textColor: "text-white",
    numberColor: "text-white/20",
  },
  {
    label: "Visão",
    text: "Ser reconhecida como a agência que realmente transforma negócios, construindo histórias de marcas que inspiram e conectam pessoas.",
    accent: "bg-[#F5F5F0]",
    textColor: "text-[#1a1a1a]",
    numberColor: "text-[#1a1a1a]/10",
  },
];

export default function MissionVisionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="valores" className="py-24 bg-[#F5F5F0]">
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
            Institucional
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a]"
          >
            Missão, Visão & Valores
          </motion.h2>
        </div>

        {/* Missão e Visão — cards lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative ${pillar.accent} rounded-3xl p-10 overflow-hidden border border-[#1a1a1a]/10`}
            >
              <span
                className={`absolute top-6 right-8 font-serif text-8xl font-black ${pillar.numberColor} select-none leading-none`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <p
                  className={`font-sans text-xs font-semibold tracking-widest uppercase mb-4 ${
                    pillar.accent === "bg-[#800020]"
                      ? "text-white/60"
                      : "text-[#800020]"
                  }`}
                >
                  {pillar.label}
                </p>
                <p
                  className={`font-serif text-xl md:text-2xl font-medium leading-relaxed ${pillar.textColor}`}
                >
                  {pillar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Valores — grid de 4 */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-serif text-2xl font-bold text-[#1a1a1a] text-center mb-8"
          >
            Nossos Valores
          </motion.h3>

          <div className="grid grid-cols-1 gap-5 max-w-full">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="group bg-white rounded-3xl p-7 flex flex-col gap-4 border border-[#1a1a1a]/8 hover:border-[#800020]/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl">{value.icon}</span>
                <h4 className="font-serif text-lg font-bold text-[#1a1a1a]">
                  {value.title}
                </h4>
                <p className="font-sans text-sm text-[#1a1a1a]/60 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nota humanitária */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-[#800020]/8 border border-[#800020]/20 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <span className="text-2xl mb-3 block">✦</span>
          <p className="font-serif text-lg text-[#1a1a1a]/80 italic leading-relaxed">
            Parte dos nossos resultados é direcionada ao apoio de{" "}
            <strong className="font-bold text-[#800020] not-italic">
              projetos humanitários
            </strong>
            . Acreditamos que negócios prósperos têm a responsabilidade de
            contribuir para um mundo mais justo e solidário.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
