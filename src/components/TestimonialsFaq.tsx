import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, Quote } from 'lucide-react';
import { TESTIMONIALS, FAQS, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const TestimonialsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-zinc-950 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Respeito de Quem Corta Conosco
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              A VOZ DA <span className="text-amber-400">COMUNIDADE</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Mais de 17 anos construindo confiança e estilo no Jardim dos Francos. Veja o que diz quem senta na nossa cadeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 flex flex-col justify-between relative group hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-amber-400 font-semibold">{t.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              Tire Suas Dúvidas
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              PERGUNTAS <span className="text-amber-400">FREQUENTES</span>
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-zinc-900/90 border border-zinc-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick FAQ CTA */}
          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-400">
              Tem alguma dúvida que não está aqui?{' '}
              <a
                href={buildWhatsAppLink('Olá Ness, tenho uma dúvida rápida que gostaria de tirar!')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-bold hover:underline inline-flex items-center gap-1.5 ml-1"
              >
                <span>Chame a gente no WhatsApp</span>
                <WhatsAppIcon className="w-4 h-4 inline fill-[#25D366]" />
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
