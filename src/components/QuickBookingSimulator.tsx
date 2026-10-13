import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Scissors,
  User,
  FileText,
  Sparkles,
  CheckCircle2,
  Flame,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import {
  BARBEARIA_INFO,
  SERVICES_LIST,
  buildCustomBookingLink,
  buildWhatsAppLink,
} from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

const TIME_SLOTS = [
  '09:30',
  '10:15',
  '11:00',
  '12:00',
  '13:30',
  '14:15',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '19:45',
  '20:15',
];

export const QuickBookingSimulator: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('combo-pesado');
  const [selectedDay, setSelectedDay] = useState<string>('Hoje');
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');

  const selectedService =
    SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalLink = buildCustomBookingLink({
      name: clientName || 'Cliente',
      service: selectedService.name,
      date: selectedDay,
      time: selectedTime,
      notes: clientNotes,
    });
    window.open(finalLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-16 sm:py-24 bg-zinc-950 relative border-b border-zinc-800">
      {/* Background colorful glowing flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-amber-600/10 via-rose-600/10 to-purple-600/10 blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-400" />
            Agendador Rápido no WhatsApp
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            AGENDE SEU CORTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-emerald-400">SEM ENROLAÇÃO</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Monte os detalhes do seu visual abaixo e envie direto para o WhatsApp do Ness (<strong className="text-[#25D366]">{BARBEARIA_INFO.phoneDisplay}</strong>).
            Atendimento veloz de <span className="text-white font-semibold">{BARBEARIA_INFO.schedule}</span>.
          </p>
        </div>

        {/* Interactive Booking Container */}
        <div className="max-w-4xl mx-auto bg-zinc-900/90 rounded-3xl border border-zinc-800 shadow-2xl shadow-black overflow-hidden backdrop-blur-sm">
          
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 p-5 sm:p-6 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base sm:text-lg">Personalize seu Agendamento</h3>
                <p className="text-zinc-400 text-xs">Mensagem direta pro barbeiro no WhatsApp oficial</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-pink-500/30 text-pink-400 text-xs font-bold hover:bg-zinc-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@nessbarbearia</span>
              </a>

              <div className="flex items-center gap-2 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-[#25D366]" />
                <span>Horário: <strong className="text-white">{BARBEARIA_INFO.schedule}</strong></span>
              </div>
            </div>
          </div>

          <form onSubmit={handleOpenWhatsApp} className="p-5 sm:p-8 space-y-8">
            
            {/* Step 1: Escolha do Serviço */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                1. Escolha o Serviço Desejado
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICES_LIST.map((srv) => {
                  const isSelected = srv.id === selectedServiceId;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 relative cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-950/50 ring-2 ring-amber-500/50 scale-[1.02]'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-950'
                      }`}
                    >
                      {srv.badge && (
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded absolute top-2 right-2 ${
                            isSelected
                              ? 'bg-amber-500 text-black'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {srv.badge}
                        </span>
                      )}

                      <div className="pr-14">
                        <p className="font-bold text-sm text-white">{srv.name}</p>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{srv.description}</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-zinc-800/80">
                        <span className="text-zinc-400 font-mono">{srv.duration}</span>
                        <span className="text-amber-400 font-bold text-xs">{srv.highlight}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dia e Horário */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Day selection */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2. Dia de Preferência
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {['Hoje', 'Amanhã', 'Sábado'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                        selectedDay === day
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black border-amber-500 font-black shadow-md'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="pt-1">
                  <input
                    type="text"
                    placeholder="Ou digite outra data (ex: Quinta 15/10)"
                    value={selectedDay !== 'Hoje' && selectedDay !== 'Amanhã' && selectedDay !== 'Sábado' ? selectedDay : ''}
                    onChange={(e) => setSelectedDay(e.target.value || 'Hoje')}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Time Slot selection */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  3. Horário Sugerido (09:20 – 20:40)
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.slice(0, 8).map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 rounded-xl text-xs font-mono font-bold border transition-all text-center cursor-pointer ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black border-amber-500 font-black shadow-md'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-zinc-400">Outro:</span>
                  <input
                    type="text"
                    placeholder="Ex: 19:30"
                    value={!TIME_SLOTS.slice(0, 8).includes(selectedTime) ? selectedTime : ''}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

            </div>

            {/* Step 3: Informações do Cliente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400" />
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como você se chama?"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Observação / Referência (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Quero fazer um risco na lateral / cabelo cacheado"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* WhatsApp Message Preview Box */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-bold text-zinc-300">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                  Prévia da Mensagem para o WhatsApp:
                </span>
                <span className="text-[#25D366] font-mono text-[11px] font-bold">{BARBEARIA_INFO.phoneDisplay}</span>
              </div>

              <div className="bg-[#1f2c34] rounded-xl p-3.5 text-xs font-mono text-zinc-200 border-l-4 border-[#25D366] space-y-1">
                <p className="text-[#25D366] font-bold">💈 AGENDAMENTO - BARBEARIA DO NESS 💈</p>
                <p>👤 Cliente: <span className="text-white">{clientName || '(seu nome)'}</span></p>
                <p>✂️ Serviço: <span className="text-amber-400">{selectedService.name}</span></p>
                <p>📅 Data: <span className="text-white">{selectedDay}</span></p>
                <p>⏰ Horário sugerido: <span className="text-white">{selectedTime}</span></p>
                {clientNotes && <p>📝 Obs: <span className="text-zinc-300">{clientNotes}</span></p>}
              </div>
            </div>

            {/* Submit Button with Realistic WhatsApp Design */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl text-black font-black text-base sm:text-lg tracking-wide uppercase shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                  boxShadow: '0 10px 30px -5px rgba(37, 211, 102, 0.4)',
                }}
              >
                <WhatsAppIcon className="w-6 h-6 fill-black text-black" />
                <span>ENVIAR AGENDAMENTO NO WHATSAPP ({BARBEARIA_INFO.phoneDisplay})</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 px-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  Confirmação instantânea direta com o barbeiro
                </span>

                <a
                  href={BARBEARIA_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Ver fotos no Instagram @nessbarbearia
                </a>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
