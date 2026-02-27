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
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#800020]/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#800020]/15 scale-125" />

              {/* Photo circle */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#800020]/10 border-4 border-[#800020]/20 flex items-center justify-center">
                {/* 
                  Para adicionar a foto real da CEO, substitua o conteúdo abaixo por:
                  <Image src="/founder.jpg" alt="Nome da CEO" fill className="object-cover" />
                  e coloque a foto em public/founder.jpg
                */}
                <div className="flex flex-col items-center gap-3 text-[#800020]/40">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-sans text-xs text-[#800020]/50 text-center px-4">
                    Foto da CEO
                  </span>
                </div>
              </div>

              {/* Badge */}
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

          {/* Content */}
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
              Uma jornada movida por{" "}
              <em className="text-[#800020] not-italic">propósito</em>
            </h3>

            <div className="flex flex-col gap-4 font-sans text-[#1a1a1a]/65 text-base leading-relaxed font-light">
              <p>
                À frente da <strong className="font-semibold text-[#1a1a1a]/80">Be.Capable</strong>, nossa fundadora construiu sua trajetória com dedicação, fé e uma visão clara: ajudar outros empreendedores a encontrarem seu lugar no mercado com autenticidade e estratégia.
              </p>
              <p>
                Com experiência em marketing digital, criação de conteúdo e gestão de marcas, ela acredita que o sucesso verdadeiro nasce da combinação entre criatividade, consistência e um propósito genuíno.
              </p>
              <p>
                Sua missão vai além dos negócios — é sobre transformar histórias e deixar um legado que impacte positivamente a vida das pessoas ao redor.
              </p>
            </div>

            {/* Quote de impacto */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative border-l-2 border-[#800020] pl-6 py-2"
            >
              <p className="font-serif text-xl md:text-2xl text-[#1a1a1a]/80 italic leading-relaxed">
                &ldquo;Empreender não é sobre ter todas as respostas — é sobre ter a coragem de fazer as perguntas certas e seguir em frente mesmo sem garantias.&rdquo;
              </p>
              <footer className="mt-4 font-sans text-sm font-semibold text-[#800020] not-italic">
                — Fundadora, Be.Capable
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
