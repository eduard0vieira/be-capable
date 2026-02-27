"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const whatsappNumber = "+554796028431";
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Be.Capable e gostaria de solicitar um orçamento."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#1a1a1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#800020] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <Logo width={160} height={78} className="brightness-0 invert" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Pronto para crescer?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-white/80 text-lg font-light mb-10 max-w-xl mx-auto"
          >
            Entre em contato e descubra como podemos transformar a presença
            digital da sua marca.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#800020] font-sans font-bold rounded-full text-base hover:bg-[#F5F5F0] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="mailto:be.capablemkt@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold rounded-full text-base hover:border-white/60 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar e-mail
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <a href="#">
                <Logo width={120} height={58} className="brightness-0 invert" />
              </a>
              <p className="font-sans text-sm text-white/50 leading-relaxed font-light max-w-xs">
                Estratégias inteligentes, criatividade e performance para gerar
                resultados reais para o seu negócio.
              </p>
            </div>

            {/* Links rápidos */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-semibold text-white/40 uppercase tracking-widest">
                Navegação
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["Serviços", "#servicos"],
                  ["Quem Somos", "#quem-somos"],
                  ["Valores", "#valores"],
                  ["Fundadora", "#fundadora"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-semibold text-white/40 uppercase tracking-widest">
                Contato
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:be.capablemkt@gmail.com"
                  className="group flex items-center gap-3 font-sans text-sm text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  be.capablemkt@gmail.com
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-sans text-sm text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-[#800020]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +55 47 9602-8431
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/30">
              © {new Date().getFullYear()} Be.Capable Agência de Marketing. Todos os direitos reservados.
            </p>
            <p className="font-sans text-xs text-white/30">
              Feito com{" "}
              <span className="text-[#800020]">♥</span>{" "}
              e propósito.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
