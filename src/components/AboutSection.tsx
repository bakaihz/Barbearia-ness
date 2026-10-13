import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Scissors,
  Flame,
  CheckCircle,
  MapPin,
  Instagram,
  Clock,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-zinc-950 relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual History Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-1 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.7) 0%, rgba(225, 29, 72, 0.7) 50%, rgba(147, 51, 234, 0.7) 100%)',
              }}
            >
              
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-zinc-950">
                <img
                  src="https://i.ibb.co/4n2Fy9gK/Screenshot-20261013-100522-Whats-App.jpg"
                  alt="Barbearia do Ness - Trabalho Real Desde 2008"
                  className="w-full h-full object-cover filter contrast-110 brightness-95 hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Big Stamp */}
                <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 rounded-xl font-display text-lg font-black tracking-wider shadow-lg">
                  DESDE 2008
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 space-y-1">
                  <p className="text-amber-400 font-display text-xl font-black">17+ ANOS DE HISTÓRIA</p>
                  <p className="text-zinc-300 text-xs">
                    Uma das barbearias mais respeitadas e tradicionais da Zona Norte de São Paulo.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 text-center shadow-lg">
                <span className="font-display text-3xl font-black text-amber-400">2008</span>
                <p className="text-xs text-zinc-400 font-semibold mt-1">Ano de Fundação</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 text-center shadow-lg">
                <span className="font-display text-3xl font-black text-[#25D366]">+17 ANOS</span>
                <p className="text-xs text-zinc-400 font-semibold mt-1">Experiência Real</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
                <Award className="w-4 h-4" />
                História & Tradição no Jardim dos Francos
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
                CONHEÇA A <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-purple-500">BARBEARIA DO NESS</span>
              </h2>
            </div>

            {/* Primary Quote from User Brief */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent border-l-4 border-amber-500 space-y-3">
              <p className="text-base sm:text-lg text-zinc-200 font-medium italic leading-relaxed">
                "{BARBEARIA_INFO.description}"
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                {BARBEARIA_INFO.category}
              </div>
            </div>

            {/* Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">Especialistas em Todos os Tipos de Cabelos</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Do liso com caimento ao crespo com alinhamento milimétrico. Dominamos a anatomia e a técnica certa para cada textura capilar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5 text-rose-400">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">Química em Geral, Alisamentos e Platinados</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Procedimentos químicos com produtos seguros para não danificar o couro cabeludo nem ressecar os fios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5 text-purple-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">17 Anos Criando Amizades no Jardim dos Francos</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    Atendemos gerações de clientes com dedicação e profissionalismo.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA with realistic WhatsApp button & Instagram link */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={buildWhatsAppLink('Olá Ness! Quero conhecer a barbearia e agendar meu corte.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-black font-extrabold text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-black text-black" />
                <span>Falar no WhatsApp ({BARBEARIA_INFO.phoneDisplay})</span>
              </a>

              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold text-sm transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              >
                <Instagram className="w-4 h-4" />
                <span>@nessbarbearia</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
