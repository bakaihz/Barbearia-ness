import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Instagram,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationSchedule: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BARBEARIA_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-zinc-950 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Onde Estamos & Horários
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            LOCALIZAÇÃO & <span className="text-amber-400">FUNCIONAMENTO</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Fácil acesso no <strong className="text-white">Jardim dos Francos</strong>, Zona Norte de São Paulo. Venha tomar um café, resenhar e dar um grau no corte!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards: Details & Actions */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Status & Hours Card */}
            <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-wider text-[#25D366]">
                    STATUS: ABERTA AGORA
                  </span>
                </div>
                <span className="text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                  Pronta para Atendimento
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Horário Oficial de Funcionamento</p>
                    <p className="text-2xl font-black text-white font-display tracking-wide mt-0.5">
                      {BARBEARIA_INFO.schedule}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      {BARBEARIA_INFO.scheduleDetails}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-zinc-800/80">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-[#25D366]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Telefone & WhatsApp Oficial</p>
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-black text-[#25D366] hover:underline font-mono tracking-wide"
                    >
                      {BARBEARIA_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Atendimento direto com o Ness
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-zinc-800/80">
                  <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shrink-0 text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Instagram dos Cortes</p>
                    <a
                      href={BARBEARIA_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-pink-400 hover:underline"
                    >
                      {BARBEARIA_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Endereço Completo</p>
                  <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                    {BARBEARIA_INFO.address}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Ponto de referência tradicional no bairro Jardim dos Francos (desde 2008).
                  </p>
                </div>
              </div>

              {/* Action Buttons for Navigation */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={copyAddress}
                  className="flex-1 min-w-[130px] py-3 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-zinc-700 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#25D366]" />
                      <span className="text-[#25D366]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={BARBEARIA_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={BARBEARIA_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-3 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Card: Interactive Map Visual & Direct CTA */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between shadow-2xl">
            
            {/* Visual map preview / embed container */}
            <div className="relative aspect-video sm:aspect-[16/10] bg-zinc-950 overflow-hidden">
              <iframe
                title="Localização Barbearia do Ness"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                src="https://maps.google.com/maps?q=Rua+Ari+Carneiro+Fernandes+195+Jardim+dos+Francos+Sao+Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />

              {/* Overlay card for quick orientation */}
              <div className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-3 rounded-2xl max-w-xs pointer-events-none shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                  <p className="text-white font-extrabold text-xs">Barbearia do Ness</p>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1">R. Ari Carneiro Fernandes, 195</p>
              </div>
            </div>

            {/* Bottom Direct CTA with Realistic WhatsApp Button */}
            <div className="p-6 bg-gradient-to-t from-zinc-950 to-zinc-900 border-t border-zinc-800 space-y-4">
              <div>
                <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  Precisa de orientações de trajeto ou tem horário marcado?
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Fale com a gente no WhatsApp antes de sair de casa para confirmar a cadeira livre!
                </p>
              </div>

              <a
                href={buildWhatsAppLink(
                  'Olá! Estou a caminho da Barbearia do Ness na R. Ari Carneiro Fernandes, 195. Tem vaga na cadeira agora?'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-black text-black" />
                <span>AVISAR QUE ESTOU A CAMINHO NO WHATSAPP ({BARBEARIA_INFO.phoneDisplay})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
