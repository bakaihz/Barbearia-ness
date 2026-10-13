import React from 'react';
import {
  Scissors,
  Phone,
  Clock,
  MapPin,
  Flame,
  Instagram,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center text-amber-400">
                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                  <Scissors className="w-5 h-5 -rotate-45 text-amber-400" />
                </div>
              </div>
              <span className="font-display text-2xl font-black text-white tracking-wider">
                BARBEARIA DO NESS
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              {BARBEARIA_INFO.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Desde 2008 • {BARBEARIA_INFO.yearsInMarket} de Tradição</span>
            </div>

            <div className="pt-1">
              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-white text-xs font-bold transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: {BARBEARIA_INFO.instagramHandle}</span>
              </a>
            </div>

            <p className="text-[11px] text-zinc-500">
              Categoria: <strong className="text-zinc-400">{BARBEARIA_INFO.category}</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">Navegação</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Serviços & Cortes
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">
                  Slides de Cortes
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-pink-400 transition-colors font-semibold">
                  Fotos no Instagram
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-amber-400 transition-colors">
                  Agendador ZAP
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">Atendimento & Horários</p>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">{BARBEARIA_INFO.schedule}</p>
                  <p className="text-zinc-400 text-[11px]">Status: Aberta agora</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold hover:underline font-mono text-sm"
                  >
                    {BARBEARIA_INFO.phoneDisplay}
                  </a>
                  <p className="text-zinc-400 text-[11px]">WhatsApp Oficial para Agendamentos</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BARBEARIA_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 font-bold hover:underline"
                  >
                    {BARBEARIA_INFO.instagramHandle}
                  </a>
                  <p className="text-zinc-400 text-[11px]">Acompanhe os cortes atualizados</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-300">{BARBEARIA_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Box with Realistic WhatsApp CTA */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">Agendamento Expresso</p>
            <p className="text-xs text-zinc-400">
              Clique no botão abaixo para conversar no WhatsApp com o Ness ({BARBEARIA_INFO.phoneDisplay}) e garantir seu horário de hoje.
            </p>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
              }}
            >
              <WhatsAppIcon className="w-5 h-5 fill-black text-black" />
              <span>IR PRO ZAP ({BARBEARIA_INFO.phoneDisplay})</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Barbearia do Ness. Todos os direitos reservados. Desde 2008.</p>
          <p className="flex items-center gap-2">
            <span>Régua Máxima • Atitude & Respeito</span>
            <span>•</span>
            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              {BARBEARIA_INFO.instagramHandle}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
