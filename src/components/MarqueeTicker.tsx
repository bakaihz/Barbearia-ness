import React from 'react';
import { Flame, Scissors, Instagram, Zap, ShieldCheck } from 'lucide-react';
import { BARBEARIA_INFO } from '../data/barbeariaData';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    'BARBEARIA DO NESS',
    'INSTAGRAM: @NESSBARBEARIA',
    'DESDE 2008 • MAIS DE 17 ANOS NA REGIÃO',
    'STATUS: ABERTA AGORA (09:20 – 20:40)',
    'WHATSAPP OFICIAL: (11) 96823-2262',
    'ESPECIALISTAS EM TODOS OS TIPOS DE CABELOS',
    'CORTES MODERNOS, CLÁSSICOS & DEGRADÊ',
    'ALISAMENTOS & QUÍMICA EM GERAL',
    'JARDIM DOS FRANCOS - SÃO PAULO',
  ];

  return (
    <div className="text-black py-2.5 overflow-hidden select-none shadow-xl border-y border-amber-300"
      style={{
        background: 'linear-gradient(90deg, #f59e0b 0%, #fb923c 25%, #f43f5e 50%, #d946ef 75%, #f59e0b 100%)',
      }}
    >
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8 font-black">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 font-display text-lg tracking-wider">
            <span>{item}</span>
            <Scissors className="w-4 h-4 -rotate-45 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
