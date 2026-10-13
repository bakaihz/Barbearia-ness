import React, { useState } from 'react';
import {
  Scissors,
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Flame,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner with live operational highlight and Instagram quick link */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-black text-xs sm:text-sm font-bold uppercase tracking-wider py-1.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-black animate-ping" />
            <span className="font-extrabold flex items-center gap-1">
              <span className="bg-black text-amber-300 px-1.5 py-0.5 rounded text-[10px] uppercase font-black">
                ABERTA AGORA
              </span>{' '}
              09:20 ÀS 20:40
            </span>
            <span className="hidden md:inline text-black/70">•</span>
            <span className="hidden md:inline text-black/90">
              TRADIÇÃO DESDE 2008 ({BARBEARIA_INFO.yearsInMarket})
            </span>
          </div>

          <div className="flex items-center gap-4 ml-2 whitespace-nowrap text-xs sm:text-sm">
            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-black font-black hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{BARBEARIA_INFO.instagramHandle}</span>
            </a>

            <a
              href={buildWhatsAppLink('Olá Ness! Gostaria de tirar uma dúvida sobre agendamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline font-black text-black"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BARBEARIA_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand with dynamic colorful gradient border */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-rose-950/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <Scissors className="w-6 h-6 text-amber-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-rose-600 text-white text-[9px] font-black px-1.5 rounded-sm uppercase tracking-tighter">
                08
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl tracking-wider text-white font-black leading-none group-hover:text-amber-400 transition-colors">
                BARBEARIA DO NESS
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-400 font-medium tracking-widest uppercase flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-500 inline" />
                Estilo Radical & Desde 2008
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-zinc-300">
            <a href="#inicio" className="hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-amber-400 transition-colors">
              Serviços & Cortes
            </a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">
              Slides de Cortes
            </a>
            <a href="#instagram" className="hover:text-pink-400 transition-colors flex items-center gap-1 font-bold">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram</span>
            </a>
            <a href="#agendamento" className="hover:text-amber-400 transition-colors">
              Agendador ZAP
            </a>
            <a href="#sobre" className="hover:text-amber-400 transition-colors">
              Sobre Nós
            </a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">
              Localização
            </a>
          </nav>

          {/* Action CTAs with Realistic WhatsApp button and Instagram icon */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              title="Instagram @nessbarbearia"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <div className="text-right hidden xl:block">
              <p className="text-[11px] text-zinc-400 font-medium leading-none">Jardim dos Francos, SP</p>
              <p className="text-xs font-bold text-[#25D366] leading-tight">ZAP: {BARBEARIA_INFO.phoneDisplay}</p>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-black font-black text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95 group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                boxShadow: '0 8px 25px -4px rgba(37, 211, 102, 0.4)',
              }}
            >
              <WhatsAppIcon className="w-4 h-4 fill-black text-black group-hover:rotate-12 transition-transform" />
              <span>AGENDAR NO WHATSAPP</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-amber-400 cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-5 pt-3 pb-6 space-y-3">
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#25D366] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Aberta Agora (09:20 – 20:40)
                </span>
                <span className="text-zinc-400 font-mono font-bold">{BARBEARIA_INFO.phoneDisplay}</span>
              </div>
              <p className="text-zinc-400">{BARBEARIA_INFO.addressShort}</p>
            </div>

            <nav className="flex flex-col gap-2 pt-2 text-base font-medium">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Início
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Serviços & Cortes
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Slides de Cortes
              </a>
              <a
                href="#instagram"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-pink-400 font-bold flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @nessbarbearia</span>
              </a>
              <a
                href="#agendamento"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Agendador Rápido no WhatsApp
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Sobre a Barbearia
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-zinc-900 text-zinc-200 hover:text-amber-400"
              >
                Como Chegar & Horário
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-black font-black text-sm tracking-wide shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-black text-black" />
                IR DIRETO PRO ZAP DA BARBEARIA
              </a>

              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              >
                <Instagram className="w-4 h-4" />
                VER CORTES NO INSTAGRAM
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
