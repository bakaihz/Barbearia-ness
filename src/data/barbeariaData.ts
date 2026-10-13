export interface ServiceItem {
  id: string;
  name: string;
  category: 'cortes' | 'barba' | 'quimica' | 'combos';
  badge?: string;
  description: string;
  duration: string;
  highlight: string;
  color: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  imageUrl: string;
  accentColor: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  likes: string;
  views: string;
  tag: string;
  imageUrl: string;
  url: string;
}

export const BARBEARIA_INFO = {
  name: 'Barbearia do Ness',
  phoneDisplay: '(11) 96823-2262',
  phoneRaw: '5511968232262',
  instagramHandle: '@nessbarbearia',
  instagramUrl: 'https://www.instagram.com/nessbarbearia/',
  schedule: '09:20 – 20:40',
  scheduleDetails: 'Segunda a Sábado: 09:20 às 20:40 (Domingos e feriados sob consulta)',
  category: 'Beleza, cosméticos e cuidados pessoais',
  sinceYear: 2008,
  yearsInMarket: 'Mais de 17 anos',
  neighborhood: 'Jardim dos Francos, São Paulo – SP',
  address: 'R. Ari Carneiro Fernandes, 195 – Jardim dos Francos, São Paulo – SP, 02874-000, Brasil',
  addressShort: 'R. Ari Carneiro Fernandes, 195 – Jardim dos Francos',
  cityStateZip: 'São Paulo – SP, CEP 02874-000',
  description:
    'Barbearia desde 2008 no mercado da barbearia, atendendo há mais de 17 anos na região. Somos especializados em todos os tipos de cabelos, realizamos cortes modernos, cortes clássicos, alisamentos, penteados e química em geral.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Ari+Carneiro+Fernandes,+195+-+Jardim+dos+Francos,+S%C3%A3o+Paulo+-+SP,+02874-000',
  wazeUrl:
    'https://waze.com/ul?q=R.+Ari+Carneiro+Fernandes,+195+-+Jardim+dos+Francos,+S%C3%A3o+Paulo+-+SP',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'corte-moderno',
    name: 'Corte Moderno / Fade Radical',
    category: 'cortes',
    badge: 'Mais Pedido',
    description: 'Degradê na navalha (low, mid ou high fade), taper fade americano e acabamento a laser com navalha afiada.',
    duration: '40 min',
    highlight: 'Degradê & Navalha Afiada',
    color: 'from-amber-500 to-orange-600',
    popular: true,
  },
  {
    id: 'corte-classico',
    name: 'Corte Clássico & Social',
    category: 'cortes',
    badge: 'Tradição 2008',
    description: 'Trabalho minucioso na tesoura, alinhamento tradicional para todas as idades com caimento impecável.',
    duration: '35 min',
    highlight: 'Tesoura & Estilo Raiz',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'barboterapia',
    name: 'Barboterapia com Toalha Quente',
    category: 'barba',
    badge: 'Relax Radical',
    description: 'Vapor de ozônio, toalha quente aromática, massagem facial, óleo nutritivo e navalhamento de precisão.',
    duration: '35 min',
    highlight: 'Toalha Quente & Massagem',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    id: 'combo-pesado',
    name: 'Combo Brutal: Corte Fade + Barba',
    category: 'combos',
    badge: 'Destaque VIP',
    description: 'A transformação total do seu visual. Corte moderno ou clássico completo + barboterapia com toalha quente + sobrancelha.',
    duration: '70 min',
    highlight: 'Experiência Completa VIP',
    color: 'from-fuchsia-500 to-rose-600',
    popular: true,
  },
  {
    id: 'alisamento',
    name: 'Alisamento & Relaxamento Capilar',
    category: 'quimica',
    badge: 'Especialista',
    description: 'Fórmula balanceada para alinhamento e redução de volume. Atendemos todos os tipos e curvaturas de cabelo.',
    duration: '60 min',
    highlight: 'Todos os Tipos de Cabelo',
    color: 'from-violet-500 to-purple-600',
    popular: true,
  },
  {
    id: 'platinado-nevou',
    name: 'Nevou Radical / Platinado Global',
    category: 'quimica',
    badge: 'Alta Performance',
    description: 'Descoloração controlada sem quebrar os fios, fundo branco gelo/platinado perfeito e tratamento pós-química.',
    duration: '90-120 min',
    highlight: 'Platinado Branco Blindado',
    color: 'from-sky-400 to-indigo-600',
  },
  {
    id: 'selagem-botox',
    name: 'Selagem Térmica & Botox Capilar',
    category: 'quimica',
    badge: 'Reconstrução',
    description: 'Tratamento intensivo que fecha as cutículas dos fios, elimina o frizz e confere brilho imediato com durabilidade.',
    duration: '50 min',
    highlight: 'Brilho & Zero Frizz',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'penteado-finalizacao',
    name: 'Penteado & Finalização Texturizada',
    category: 'cortes',
    badge: 'Evento / Rolê',
    description: 'Lavagem especial, secagem estruturada e modelagem profissional de alta fixação.',
    duration: '25 min',
    highlight: 'Estruturação & Fixação',
    color: 'from-amber-400 to-yellow-600',
  },
  {
    id: 'freestyle-risco',
    name: 'Freestyle & Desenho na Navalha',
    category: 'cortes',
    badge: 'Arte Urbana',
    description: 'Riscos geométricos, tribal urbano ou detalhes customizados esculpidos à mão livre na lâmina.',
    duration: '20 min',
    highlight: 'Desenhos Customizados',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 'sobrancelha-navalha',
    name: 'Alinhamento de Sobrancelha',
    category: 'barba',
    badge: 'Express',
    description: 'Desenho limpo na navalha mantendo a naturalidade e harmonia do rosto masculino.',
    duration: '15 min',
    highlight: 'Precisão na Navalha',
    color: 'from-emerald-500 to-green-600',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-real-1',
    title: 'Degradê Fade na Régua (Corte Real)',
    category: 'Corte Moderno Real',
    description: 'Trabalho autêntico feito na cadeira da Barbearia do Ness. Transição cirúrgica na navalha e topo alinhado.',
    tag: 'Foto Real do Ness',
    imageUrl: 'https://i.ibb.co/35HYFSWC/Screenshot-20261013-100524-Whats-App.jpg',
    accentColor: '#f59e0b',
  },
  {
    id: 'gal-real-2',
    title: 'Corte Moderno & Alinhamento (Corte Real)',
    category: 'Especialidade Ness',
    description: 'Corte real realizado na barbearia no Jardim dos Francos. Acabamento impecável com atitude e precisão.',
    tag: 'Foto Real do Ness',
    imageUrl: 'https://i.ibb.co/mgtZ5PC/Screenshot-20261013-100520-Whats-App.jpg',
    accentColor: '#10b981',
  },
  {
    id: 'gal-real-3',
    title: 'Fade Especial & Finalização (Corte Real)',
    category: 'Trabalho Autêntico',
    description: 'Transformação de visual real. Especialistas em todos os tipos de cabelo com caimento perfeito.',
    tag: 'Foto Real do Ness',
    imageUrl: 'https://i.ibb.co/4n2Fy9gK/Screenshot-20261013-100522-Whats-App.jpg',
    accentColor: '#ec4899',
  },
  {
    id: 'gal-real-4',
    title: 'Degradê & Topete Alinhado (Corte Real)',
    category: 'Corte Moderno Real',
    description: 'Trabalho exclusivo na navalha feito na Barbearia do Ness. Alinhamento de perfil impecável e acabamento fino.',
    tag: 'Foto Real do Ness',
    imageUrl: 'https://i.ibb.co/B2ffNXVW/Screenshot-20261013-100513-Whats-App.jpg',
    accentColor: '#06b6d4',
  },
  {
    id: 'gal-1',
    title: 'Mid Fade Cirúrgico',
    category: 'Corte Moderno',
    description: 'Transição suave na navalha com topo texturizado e alinhamento milimétrico.',
    tag: 'Degradê Navalhado',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80',
    accentColor: '#38bdf8',
  },
  {
    id: 'gal-2',
    title: 'Barba Alinhada & Toalha Quente',
    category: 'Barboterapia',
    description: 'Contorno esculpido na navalha com toalha quente e óleo aromatizado.',
    tag: 'Toalha Quente',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    accentColor: '#10b981',
  },
  {
    id: 'gal-3',
    title: 'Nevou / Platinado Intenso',
    category: 'Química & Cor',
    description: 'Clareamento total e matização sem ressecamento dos fios capilares.',
    tag: 'Química Avançada',
    imageUrl: 'https://images.unsplash.com/photo-1517832606589-7629c3395909?auto=format&fit=crop&w=900&q=80',
    accentColor: '#38bdf8',
  },
  {
    id: 'gal-4',
    title: 'Freestyle Radical & Desenho',
    category: 'Arte Urbana',
    description: 'Linhas agressivas personalizadas esculpidas à mão livre na lâmina.',
    tag: 'Arte na Navalha',
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80',
    accentColor: '#ef4444',
  },
  {
    id: 'gal-5',
    title: 'Corte Clássico Pompadour',
    category: 'Tradição 2008',
    description: 'Penteado retrô encorpado com finalização estruturada e alinhamento perfeito.',
    tag: 'Tesoura Fina',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80',
    accentColor: '#a855f7',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-real-1',
    caption: 'Corte real feito aqui na Barbearia do Ness! Fade navalhado no capricho 🔥✂️ Agende pelo ZAP: (11) 96823-2262',
    likes: '1.4k',
    views: '16.5k',
    tag: '#CorteRealDoNess',
    imageUrl: 'https://i.ibb.co/35HYFSWC/Screenshot-20261013-100524-Whats-App.jpg',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-real-2',
    caption: 'Alinhamento e disfarce impecável na navalha! Trabalho autêntico no Jardim dos Francos 🏆',
    likes: '1.8k',
    views: '22k',
    tag: '#FadeNavalha',
    imageUrl: 'https://i.ibb.co/mgtZ5PC/Screenshot-20261013-100520-Whats-App.jpg',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-real-3',
    caption: 'Mais um cliente saindo com a autoestima no talo! Especialistas em todos os tipos de cabelo ⚡',
    likes: '1.6k',
    views: '19.2k',
    tag: '#BarbeariaDoNess',
    imageUrl: 'https://i.ibb.co/4n2Fy9gK/Screenshot-20261013-100522-Whats-App.jpg',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-real-4',
    caption: 'Degradê e perfil esculpido milimetricamente na lâmina! Vem pro Ness dar um grau no visual 💈💥',
    likes: '1.9k',
    views: '24.1k',
    tag: '#ReguaMaxima',
    imageUrl: 'https://i.ibb.co/B2ffNXVW/Screenshot-20261013-100513-Whats-App.jpg',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-4',
    caption: 'Freestyle e arte no cabelo! Aqui a navalha dança com atitude ✂️💥',
    likes: '2.1k',
    views: '25k',
    tag: '#ArteNaNavalha',
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-5',
    caption: 'Corte clássico e elegante na tesoura. Tradição desde 2008 no Jardim dos Francos 🏆',
    likes: '850',
    views: '9.8k',
    tag: '#CorteClassico',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
  {
    id: 'ig-6',
    caption: 'Alisamento perfeito mantendo a naturalidade e o brilho dos fios! 🚀',
    likes: '1.1k',
    views: '13k',
    tag: '#AlisamentoMasculino',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.instagram.com/nessbarbearia/',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Marcos Vinicius',
    since: 'Cliente há 8 anos',
    text: 'Corta aqui desde moleque no Jardim dos Francos. O Ness manja demais de fade e química, você senta na cadeira e sai com a autoestima no talo!',
    rating: 5,
    tag: 'Fade Navalhado',
  },
  {
    name: 'Rodrigo Santana',
    since: 'Cliente há 5 anos',
    text: 'Barbearia de raiz com atitude e respeito. O alinhamento da barba na toalha quente é diferenciado. Não troco por nenhuma outra da ZN.',
    rating: 5,
    tag: 'Barboterapia',
  },
  {
    name: 'Felipe Alencar',
    since: 'Cliente há 12 anos',
    text: '17 anos de história não é pra qualquer um. O Ness domina qualquer tipo de cabelo: liso, crespo, ondulado. Já fiz platinado e ficou animal!',
    rating: 5,
    tag: 'Platinado / Nevou',
  },
  {
    name: 'Carlos Eduardo (Kadu)',
    since: 'Cliente novo',
    text: 'Agendei pelo WhatsApp em 2 minutos. Cheguei lá, recepção top, som de qualidade e o corte ficou impecável. Recomendo de olhos fechados.',
    rating: 5,
    tag: 'Corte + Barba',
  },
];

export const FAQS = [
  {
    question: 'Preciso agendar com antecedência ou posso ir direto?',
    answer:
      'Atendemos tanto por agendamento via WhatsApp (11 96823-2262) quanto por ordem de chegada se houver vaga na hora. Recomendamos clicar no botão do ZAP para garantir seu horário sem fila!',
  },
  {
    question: 'Vocês atendem todos os tipos de cabelos mesmo?',
    answer:
      'Sim! Com mais de 17 anos de experiência, somos especialistas em fios lisos, ondulados, cacheados, crespos e afro. Adaptamos o corte, a tesoura e a química ideal para a sua estrutura capilar.',
  },
  {
    question: 'Onde posso ver fotos dos cortes e novidades atualizadas?',
    answer:
      'Siga nosso Instagram oficial @nessbarbearia (https://www.instagram.com/nessbarbearia/) onde postamos vídeos, stories diários e fotos de cortes reais!',
  },
  {
    question: 'Como funciona o platinado / "nevou" e alisamento?',
    answer:
      'Fazemos uma avaliação rápida do fio antes do procedimento químico para garantir a saúde do cabelo. Utilizamos produtos profissionais de alta performance com proteção capilar.',
  },
  {
    question: 'Quais as formas de pagamento aceitas?',
    answer:
      'Aceitamos PIX, cartões de crédito e débito de todas as bandeiras, além de dinheiro em espécie.',
  },
];

export function buildWhatsAppLink(message?: string): string {
  const defaultMessage =
    'Olá, vim pelo site da Barbearia do Ness e gostaria de agendar um horário!';
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${BARBEARIA_INFO.phoneRaw}?text=${text}`;
}

export function buildCustomBookingLink({
  name,
  service,
  date,
  time,
  notes,
}: {
  name: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}): string {
  const parts = [
    '💈 *AGENDAMENTO - BARBEARIA DO NESS* 💈',
    `👤 *Cliente:* ${name || 'Não informado'}`,
    `✂️ *Serviço:* ${service}`,
    `📅 *Data desejada:* ${date}`,
    `⏰ *Horário desejado:* ${time}`,
  ];
  if (notes && notes.trim()) {
    parts.push(`📝 *Obs:* ${notes.trim()}`);
  }
  parts.push('', 'Olá Ness, gostaria de agendar esse horário. Está disponível?');

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${BARBEARIA_INFO.phoneRaw}?text=${text}`;
}
