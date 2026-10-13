import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCheck,
  Scissors,
  Phone,
  Sparkles,
  Paperclip,
  Smile,
  Flame,
} from 'lucide-react';
import { BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userCustomMessage, setUserCustomMessage] = useState('');
  const [unreadCount, setUnreadCount] = useState(1);
  const [currentTime, setCurrentTime] = useState('09:25');

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  const handleSend = (textToSend?: string) => {
    const message = textToSend || userCustomMessage || 'Olá Ness! Gostaria de agendar um horário na barbearia.';
    const url = buildWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setUnreadCount(0);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Realistic WhatsApp Chat Box Popup */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[370px] rounded-2xl overflow-hidden shadow-2xl shadow-black border border-emerald-950 bg-[#0c1317] text-white animate-in fade-in zoom-in-95 duration-200">
          
          {/* Official WhatsApp-styled Header */}
          <div className="bg-[#1f2c34] p-3.5 flex items-center justify-between border-b border-[#2a3942]">
            <div className="flex items-center gap-3">
              {/* Profile Avatar */}
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-500 bg-zinc-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=150&q=80"
                    alt="Barbearia do Ness"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Green Dot */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#1f2c34]" />
              </div>

              {/* Title & Status */}
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white tracking-wide">Barbearia do Ness</h4>
                  <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-1.5 py-0.2 rounded">
                    PRO
                  </span>
                </div>
                <p className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online agora • Aberta até 20:40
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="Fechar WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body with authentic WhatsApp dark pattern */}
          <div className="p-4 space-y-3 bg-[#0b141a] min-h-[220px] max-h-[300px] overflow-y-auto relative stripes-pattern">
            
            {/* Encryption & security banner */}
            <div className="text-center">
              <span className="bg-[#182229] text-[#ffd279] text-[10px] px-3 py-1 rounded-lg inline-block shadow-sm">
                🔒 Conversa direta com o WhatsApp oficial: {BARBEARIA_INFO.phoneDisplay}
              </span>
            </div>

            {/* Barbershop Incoming Message Bubble */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-sm p-3.5 shadow-md space-y-1.5 border border-[#26353d]">
                <p className="text-xs font-bold text-[#25D366] flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5" />
                  Ness Barbearia
                </p>
                <p className="text-xs leading-relaxed text-[#d1d7db]">
                  Salve! Bem-vindo à <strong>Barbearia do Ness</strong> (desde 2008). ✂️🔥
                </p>
                <p className="text-xs leading-relaxed text-[#d1d7db]">
                  Quer agendar seu corte, barba ou química para hoje? Como prefere o atendimento?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-400 pt-1">
                  <span>{currentTime}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                </div>
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="pt-2 space-y-1.5">
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                Sugestões rápidas:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Quero agendar um corte hoje ✂️',
                  'Qual horário disponível agora? ⏰',
                  'Quero fazer Corte + Barba 🔥',
                  'Dúvida sobre platinado / química ⚡',
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip)}
                    className="text-left text-xs bg-[#182229] hover:bg-[#25D366] text-[#e9edef] hover:text-black px-2.5 py-1.5 rounded-xl border border-[#2a3942] hover:border-[#25D366] transition-all cursor-pointer font-medium active:scale-95"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Chat Input Bar */}
          <div className="bg-[#202c33] p-2.5 flex items-center gap-2 border-t border-[#2a3942]">
            <input
              type="text"
              placeholder="Digite sua mensagem para o Ness..."
              value={userCustomMessage}
              onChange={(e) => setUserCustomMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="flex-1 bg-[#2a3942] text-white text-xs rounded-full px-4 py-2.5 placeholder-[#8696a0] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />

            <button
              onClick={() => handleSend()}
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
              title="Enviar mensagem no WhatsApp"
            >
              <Send className="w-4 h-4 text-black fill-black ml-0.5" />
            </button>
          </div>

        </div>
      )}

      {/* Ultra-Realistic WhatsApp Floating Button */}
      <div className="relative group">
        
        {/* Pulsing Sonar Ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 whatsapp-pulse pointer-events-none -z-10" />

        <button
          onClick={handleToggle}
          className="relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer box-glow-whatsapp border border-white/20"
          style={{
            background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
          }}
          aria-label="Abrir WhatsApp da Barbearia do Ness"
        >
          {/* Authentic WhatsApp Icon */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center filter drop-shadow">
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white" />
          </div>

          {/* Button Text */}
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] uppercase font-black tracking-wider text-black/75 leading-tight">
              Fale Conosco
            </span>
            <span className="block text-sm font-black text-black tracking-wide leading-none">
              WhatsApp Oficial
            </span>
          </div>

          {/* Realistic Notification Badge Counter */}
          {unreadCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-[#0c1317] shadow-lg animate-bounce">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
