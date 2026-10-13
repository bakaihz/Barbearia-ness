import React from 'react';
import {
  Scissors,
  Flame,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
  Instagram,
  Zap,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-zinc-800">
      {/* Background radial glow & textured grid with vibrant neon colors */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/40 via-zinc-950 to-zinc-950 -z-10" />
      <div className="absolute inset-0 stripes-pattern opacity-40 -z-10" />

      {/* Decorative Vibrant Neon Blurs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[320px] bg-amber-500/15 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -top-16 right-10 w-[500px] h-[350px] bg-rose-600/15 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-600/10 blur-[160px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Radical copy & key badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges Bar with Vibrant Gradients */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-amber-300 shadow-md">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Desde 2008 • +17 Anos no Mercado
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                Status: Aberta Agora ({BARBEARIA_INFO.schedule})
              </span>

              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white transition-transform hover:scale-105 border border-pink-500/40"
                style={{
                  background: 'linear-gradient(45deg, rgba(240, 148, 51, 0.25) 0%, rgba(220, 39, 67, 0.25) 50%, rgba(188, 24, 136, 0.25) 100%)',
                }}
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{BARBEARIA_INFO.instagramHandle}</span>
              </a>
            </div>

            {/* Main Punchy Title with Multi-Color Gradient */}
            <div className="space-y-2">
              <p className="text-amber-400 text-sm sm:text-base font-black tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>ESTILO RADICAL • ATITUDE • PRECISÃO MÁXIMA</span>
              </p>

              <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none">
                BARBEARIA <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 via-rose-500 to-purple-500">
                  DO NESS
                </span>
              </h1>
            </div>

            {/* Official Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Há <strong className="text-amber-400 font-bold">mais de 17 anos na região</strong> do Jardim dos Francos transformando visual com personalidade.
              Somos especializados em <strong className="text-white">todos os tipos de cabelos</strong>: realizamos cortes modernos, cortes clássicos, alisamentos, penteados e química em geral.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              <a
                href={buildWhatsAppLink(
                  'Olá! Gostaria de agendar um horário na Barbearia do Ness. Quais os horários disponíveis hoje?'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-black font-black text-base sm:text-lg tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                  boxShadow: '0 12px 35px -5px rgba(37, 211, 102, 0.5), 0 0 15px 0 rgba(37, 211, 102, 0.3)',
                }}
              >
                <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5 fill-black text-black group-hover:scale-110 transition-transform" />
                </div>
                <span>AGENDAR NO WHATSAPP</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base border border-pink-500/40 transition-all hover:scale-[1.02] shadow-xl"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              >
                <Instagram className="w-5 h-5" />
                <span>Ver Cortes no Instagram</span>
              </a>

              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-sm border border-zinc-700/80 hover:border-amber-500/50 transition-colors"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Slides</span>
              </a>
            </div>

            {/* Fast Highlights Bar with Vibrant Border Accents */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-amber-500/40 hover:border-amber-400 transition-colors shadow-lg">
                <p className="text-amber-400 font-black text-lg sm:text-xl font-display leading-tight">17+ ANOS</p>
                <p className="text-[11px] text-zinc-400 font-medium">Desde 2008 na região</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-cyan-500/40 hover:border-cyan-400 transition-colors shadow-lg">
                <p className="text-cyan-400 font-black text-lg sm:text-xl font-display leading-tight">TODOS OS FIOS</p>
                <p className="text-[11px] text-zinc-400 font-medium">Liso ao Crespo/Afro</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-fuchsia-500/40 hover:border-fuchsia-400 transition-colors shadow-lg">
                <p className="text-fuchsia-400 font-black text-lg sm:text-xl font-display leading-tight">QUÍMICA & FADE</p>
                <p className="text-[11px] text-zinc-400 font-medium">Platinados e Selagens</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-emerald-500/40 hover:border-emerald-400 transition-colors shadow-lg">
                <p className="text-emerald-400 font-black text-lg sm:text-xl font-display leading-tight">ZAP DIRETO</p>
                <p className="text-[11px] text-zinc-400 font-medium">{BARBEARIA_INFO.phoneDisplay}</p>
              </div>
            </div>

            {/* Quick Contact & Address snippet */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{BARBEARIA_INFO.addressShort}</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="text-zinc-300 font-medium">{BARBEARIA_INFO.schedule}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Animated Float Effect & Multi-Color Glow */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float">
              
              {/* Vibrant Barber Card Frame */}
              <div className="relative rounded-3xl p-1 shadow-2xl shadow-black"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(225, 29, 72, 0.8) 50%, rgba(147, 51, 234, 0.8) 100%)',
                }}
              >
                
                {/* Image Container */}
                <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-zinc-950">
                  <img
                    src="https://i.ibb.co/35HYFSWC/Screenshot-20261013-100524-Whats-App.jpg"
                    alt="Barbearia do Ness - Foto Real do Corte"
                    className="w-full h-full object-cover filter contrast-110 brightness-95"
                    loading="eager"
                  />
                  
                  {/* Dark overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />

                  {/* Stamp badge in the corner */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-rose-600 to-amber-600 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-rose-400/40 shadow-xl flex items-center gap-1.5">
                      <Scissors className="w-4 h-4 rotate-45 text-white" />
                      <span className="font-display tracking-wider text-sm font-black">FOTO REAL DO CORTE</span>
                    </div>
                  </div>

                  {/* Floating Live Card at the bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-left space-y-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                        <span className="text-xs font-black uppercase text-[#25D366] tracking-wider">
                          ABERTA AGORA
                        </span>
                      </div>
                      <span className="text-xs text-zinc-300 font-mono font-bold">
                        {BARBEARIA_INFO.schedule}
                      </span>
                    </div>

                    <div className="border-t border-zinc-800/80 pt-2 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-white font-bold text-sm">Pronto pra renovar a régua?</p>
                        <p className="text-xs text-zinc-400">{BARBEARIA_INFO.phoneDisplay}</p>
                      </div>
                      <a
                        href={buildWhatsAppLink('Olá Ness! Quero mandar uma foto do corte que quero fazer e agendar.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 text-black font-extrabold text-xs rounded-xl transition-transform hover:scale-105 flex items-center gap-1.5 shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                        }}
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
                        <span>ZAP</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 text-zinc-300 px-4 py-2.5 rounded-xl shadow-xl hidden sm:flex items-center gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Navalha afiada • Toalha Quente • @nessbarbearia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
