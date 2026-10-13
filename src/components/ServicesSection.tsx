import React, { useState } from 'react';
import {
  Scissors,
  Flame,
  Clock,
  Sparkles,
  Instagram,
  Check,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_LIST, BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'cortes' | 'barba' | 'quimica' | 'combos'>('todos');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (activeTab === 'todos') return true;
    return srv.category === activeTab;
  });

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-zinc-950 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5 text-amber-400" />
            Especialidades & Menu de Cortes
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            CORTES, QUÍMICA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-purple-500">BARBA RAIZ</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Especialistas em <strong className="text-white font-bold">todos os tipos de cabelos</strong> desde 2008.
            Do degradê radical na navalha ao clássico elegante, alisamentos, selagens e platinados impecáveis.
          </p>
        </div>

        {/* Category Tabs with Colorful Active States */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { key: 'todos', label: 'Todos os Serviços', color: 'from-amber-500 to-orange-500' },
            { key: 'cortes', label: 'Cortes & Penteados', color: 'from-cyan-500 to-blue-500' },
            { key: 'barba', label: 'Barba & Navalha', color: 'from-emerald-500 to-teal-500' },
            { key: 'quimica', label: 'Química & Alisamento', color: 'from-purple-500 to-pink-500' },
            { key: 'combos', label: 'Combos Especiais', color: 'from-rose-500 to-red-500' },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? `bg-gradient-to-r ${tab.color} text-black font-black shadow-lg scale-105 ring-2 ring-white/30`
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid with colorful card borders and glowing badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group rounded-3xl bg-zinc-900/90 border transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl ${
                service.popular
                  ? 'border-amber-500/70 shadow-xl shadow-amber-950/20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950'
                  : 'border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {/* Colorful Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`} />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  {service.badge && (
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-gradient-to-r ${service.color} text-black`}>
                      {service.badge}
                    </span>
                  )}
                  <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 ml-auto">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                  {service.name}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature pill */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-200 bg-zinc-800/80 px-2.5 py-1 rounded-lg border border-zinc-700/80 font-medium">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {service.highlight}
                  </span>
                </div>
              </div>

              {/* Card Footer with Realistic WhatsApp Button */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <a
                  href={BARBEARIA_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-zinc-400 hover:text-pink-400 flex items-center gap-1 transition-colors"
                  title="Ver fotos no Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>Ver no Insta</span>
                </a>

                <a
                  href={buildWhatsAppLink(
                    `Olá Ness! Gostaria de agendar o serviço: *${service.name}*. Tem horário disponível hoje?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-black font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                  }}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
                  <span>AGENDAR NO ZAP</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Colorful Bottom Banner linking to Instagram & WhatsApp */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-rose-950/20 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white font-extrabold text-lg sm:text-xl flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              Quer ver fotos e vídeos reais desse corte?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Visite nosso feed no Instagram <strong className="text-pink-400">@nessbarbearia</strong> ou mande sua referência no WhatsApp <strong>{BARBEARIA_INFO.phoneDisplay}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-white font-black text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <Instagram className="w-4 h-4" />
              <span>Ver no Instagram</span>
            </a>

            <a
              href={buildWhatsAppLink('Olá Ness, quero mandar uma foto de referência de corte para tirar uma dúvida!')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-black font-black text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
              }}
            >
              <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
              <span>ZAP (11) 96823-2262</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
