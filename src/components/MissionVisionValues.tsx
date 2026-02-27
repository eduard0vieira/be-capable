"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Missão",
    text: "Impulsionar negócios por meio do marketing estratégico.",
  },
  {
    title: "Visão",
    text: "Ser referência em inovação e resultados digitais.",
  },
  {
    title: "Valores",
    text: "Transparência, Excelência, Fé e Propósito.",
  },
];

export default function MissionVisionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="valores" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F5F5F0] border-2 border-dashed border-[#800020]/50 rounded-2xl p-10 flex flex-col items-center text-center gap-5"
            >
              <h3 className="font-serif text-3xl font-bold text-[#800020]">
                {card.title}
              </h3>
              <p className="font-sans text-base text-[#1a1a1a]/70 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
