import React, { useState } from 'react';
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Flame,
  CheckCircle,
  Camera,
  Eye,
} from 'lucide-react';
import { BARBEARIA_INFO, INSTAGRAM_POSTS, InstagramPost } from '../data/barbeariaData';

export const InstagramSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Dynamic colorful neon ambient glows */}
      <div className="absolute top-1/4 -right-36 w-96 h-96 bg-fuchsia-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-36 w-96 h-96 bg-amber-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white border border-fuchsia-500/40 shadow-lg"
              style={{
                background: 'linear-gradient(45deg, rgba(240, 148, 51, 0.2) 0%, rgba(220, 39, 67, 0.2) 50%, rgba(188, 24, 136, 0.2) 100%)',
              }}
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram Oficial • Fotos & Vídeos dos Cortes</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              ACOMPANHE OS CORTES NO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                {BARBEARIA_INFO.instagramHandle}
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Quer ver os cortes mais recentes, bastidores, transformações de visual e técnicas de química? Siga o Ness no Instagram e escolha seu próximo corte!
            </p>
          </div>

          {/* Instagram Profile Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gradient-to-r from-zinc-900 to-zinc-900/90 p-4 rounded-2xl border border-zinc-800 shadow-xl self-start lg:self-auto">
            <div className="flex items-center gap-3">
              <div className="relative p-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=200&q=80"
                    alt="Ness Barbearia Instagram"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-sm">nessbarbearia</span>
                  <CheckCircle className="w-4 h-4 text-sky-400 fill-sky-400 text-black" />
                </div>
                <p className="text-xs text-zinc-400">Barbearia do Ness • SP</p>
              </div>
            </div>

            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir Perfil</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Frame with Instagram Overlay */}
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  loading="lazy"
                />

                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Post Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 rounded-lg backdrop-blur-md text-[10px] font-black uppercase tracking-wider ${
                    post.id.startsWith('ig-real-')
                      ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-black border border-white/30 shadow-lg'
                      : 'bg-black/80 text-amber-300 border border-amber-500/30'
                  }`}>
                    {post.tag}
                  </span>
                </div>

                {/* Instagram watermark icon in corner */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-pink-400 border border-pink-500/30">
                  <Instagram className="w-4 h-4" />
                </div>

                {/* Hover Like / Views Counter Overlay */}
                <div className={`absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center gap-6 transition-opacity duration-200 ${
                  hoveredId === post.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <Eye className="w-5 h-5 text-sky-400" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Direct Instagram Action */}
              <div className="p-5 space-y-3 bg-zinc-900/90 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs text-zinc-400">
                    <span className="font-bold text-white">@nessbarbearia</span>
                    <span>•</span>
                    <span className="text-pink-400 font-semibold">{post.tag}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Publicado no feed</span>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-pink-400 hover:text-pink-300 text-xs font-bold transition-colors border border-zinc-700"
                  >
                    <span>Ver no Insta</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Bottom Follow CTA with colorful Instagram gradient */}
        <div className="mt-12 p-8 rounded-3xl relative overflow-hidden border border-pink-500/30 text-center space-y-4 shadow-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(188, 24, 136, 0.15) 0%, rgba(20, 20, 25, 0.95) 100%)',
          }}
        >
          <div className="inline-flex p-3 rounded-2xl shadow-xl text-white mb-2"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}
          >
            <Instagram className="w-8 h-8" />
          </div>

          <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            QUER VER MAIS CORTES AO VIVO?
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Siga nosso Instagram diário para não perder nenhuma transformação, avisos de horários e cortes exclusivos feitos no Jardim dos Francos.
          </p>

          <div className="pt-2">
            <a
              href={BARBEARIA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-2xl transition-transform hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                boxShadow: '0 10px 30px -5px rgba(220, 39, 67, 0.4)',
              }}
            >
              <Instagram className="w-5 h-5" />
              <span>SEGUIR @NESSBARBEARIA NO INSTAGRAM</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
