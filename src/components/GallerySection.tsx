import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Flame,
  Camera,
  Layers,
  LayoutGrid,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { GALLERY_ITEMS, BARBEARIA_INFO, buildWhatsAppLink } from '../data/barbeariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = GALLERY_ITEMS.length;

  useEffect(() => {
    if (viewMode !== 'slide' || !isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, viewMode, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentSlide = GALLERY_ITEMS[currentIndex];

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Dynamic colorful glow background */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-rose-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              Galeria de Cortes & Slides em Alta Definição
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              ESTILOS RADICAIS EM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-cyan-400">SLIDES & CORES</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Deslize pelos estilos mais pedidos na Barbearia do Ness. Também temos vídeos de cada corte no Instagram oficial{' '}
              <a
                href={BARBEARIA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline font-bold inline-flex items-center gap-1"
              >
                <span>@nessbarbearia</span>
                <ExternalLink className="w-3 h-3" />
              </a>.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 self-start md:self-auto shadow-xl">
            <button
              onClick={() => setViewMode('slide')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                viewMode === 'slide'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md font-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Slides Dinâmicos</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md font-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Ver Grade</span>
            </button>
          </div>
        </div>

        {/* SLIDE MODE */}
        {viewMode === 'slide' ? (
          <div className="relative">
            {/* Main Interactive Slide Stage with Colored Glow Border */}
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-500"
              style={{
                boxShadow: `0 20px 50px -10px ${currentSlide.accentColor}25`,
              }}
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
                
                {/* Visual Image Area (Left / Top) */}
                <div className="lg:col-span-7 relative overflow-hidden bg-black aspect-[4/3] lg:aspect-auto">
                  <img
                    key={currentSlide.id}
                    src={currentSlide.imageUrl}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover filter contrast-110 brightness-95 transition-all duration-700 ease-out transform scale-100 hover:scale-105"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-900" />

                  {/* Stamp Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3.5 py-1.5 rounded-xl backdrop-blur-md text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl ${
                      currentSlide.tag === 'Foto Real do Ness'
                        ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-black border border-white/40 ring-2 ring-amber-400/50'
                        : 'bg-black/85 text-amber-300 border border-amber-500/40'
                    }`}>
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      {currentSlide.tag}
                    </span>
                  </div>

                  {/* Slide count index indicator */}
                  <div className="absolute bottom-4 left-4 z-10 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-zinc-300 font-mono text-xs border border-zinc-800">
                    Slide <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {total}
                  </div>
                </div>

                {/* Details & Actions (Right) */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-zinc-900/90 relative">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-lg border text-white font-mono shadow-sm"
                        style={{
                          backgroundColor: `${currentSlide.accentColor}20`,
                          borderColor: `${currentSlide.accentColor}50`,
                          color: currentSlide.accentColor,
                        }}
                      >
                        {currentSlide.category}
                      </span>

                      {/* Autoplay Controls */}
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-zinc-400 hover:text-white p-1 rounded-xl bg-zinc-800/80 border border-zinc-700 text-xs flex items-center gap-1.5 px-2.5 cursor-pointer"
                        title={isPlaying ? 'Pausar slides' : 'Iniciar slides'}
                      >
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        <span className="text-[10px] uppercase font-bold">{isPlaying ? 'Pausar' : 'Rodar'}</span>
                      </button>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-wide leading-tight">
                      {currentSlide.title}
                    </h3>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {currentSlide.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          Atendimento Personalizado
                        </p>
                        <a
                          href={BARBEARIA_INFO.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-pink-400 hover:underline flex items-center gap-1 font-semibold"
                        >
                          <Instagram className="w-3 h-3" />
                          <span>Ver no Insta</span>
                        </a>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Gostou desse corte? Clique no botão abaixo para abrir o WhatsApp da barbearia com essa referência salva para agendar!
                      </p>
                    </div>
                  </div>

                  {/* Actions & Slide Controls */}
                  <div className="pt-6 space-y-3.5">
                    <a
                      href={buildWhatsAppLink(
                        `Olá Ness! Vi o estilo *${currentSlide.title}* no slide do site e gostaria de agendar um horário para fazer!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-5 rounded-2xl text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                        boxShadow: '0 10px 25px -4px rgba(37, 211, 102, 0.4)',
                      }}
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-black text-black" />
                      <span>QUERO AGENDAR ESTE CORTE NO ZAP</span>
                    </a>

                    {/* Nav arrows & progress dots */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        {GALLERY_ITEMS.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setCurrentIndex(dotIdx)}
                            className={`h-2.5 rounded-full transition-all cursor-pointer ${
                              dotIdx === currentIndex
                                ? 'w-8 bg-amber-400 shadow-md'
                                : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                            }`}
                            aria-label={`Slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700 active:scale-95"
                          aria-label="Slide anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-colors cursor-pointer font-bold active:scale-95 shadow-md shadow-amber-950"
                          aria-label="Próximo slide"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Thumbnail Navigation Row */}
            <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2">
              {GALLERY_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'border-amber-400 scale-105 shadow-lg shadow-amber-950/60 ring-2 ring-amber-400/50'
                      : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* GRID MODE */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl aspect-[3/4] flex flex-col justify-end hover:-translate-y-1.5 transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/85 text-amber-300 border border-amber-500/30">
                    {item.tag}
                  </span>
                </div>

                <div className="relative p-5 space-y-2">
                  <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-2">
                    {item.description}
                  </p>

                  <a
                    href={buildWhatsAppLink(
                      `Olá Ness! Vi a foto *${item.title}* na grade e gostaria de agendar!`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 py-2.5 px-3 rounded-xl text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #2fe672 0%, #25D366 50%, #1da851 100%)',
                    }}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
                    <span>Agendar este no ZAP</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
