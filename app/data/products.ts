// Dados dos produtos recomendados de alta qualidade
// Alguns produtos podem ter cupons como benefício adicional

export interface Product {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  couponCode?: string;
  expirationDate?: string;
  remainingItems?: number;
  affiliateLink: string;
  badges: ('urgent' | 'savings' | 'popular' | 'verified')[];
  categories: string[];
  featured?: boolean;
}

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

const twoWeeks = new Date();
twoWeeks.setDate(twoWeeks.getDate() + 14);

export const products: Product[] = [
  {
    id: "tech-001",
    title: "Fone de Ouvido Bluetooth Premium",
    description: "Fone de ouvido sem fio com cancelamento de ruído ativo e até 30h de bateria. Conexão multipontos e som imersivo.",
    originalPrice: 499.90,
    discountPrice: 329.90,
    image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=2070&auto=format&fit=crop",
    couponCode: "FONE35OFF",
    expirationDate: nextWeek.toISOString(),
    remainingItems: 5,
    affiliateLink: "#",
    badges: ['savings', 'popular', 'verified'],
    categories: ["acessorios", "cupons"],
    featured: true
  },
  {
    id: "tech-002",
    title: "Smartphone XYZ Ultra 5G 256GB",
    description: "Smartphone com tela AMOLED de 6.8 polegadas, 12GB RAM, câmera 108MP e processador de última geração.",
    originalPrice: 4999.90,
    discountPrice: 3799.90,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2127&auto=format&fit=crop",
    couponCode: "SMARTPHONE25",
    expirationDate: tomorrow.toISOString(),
    remainingItems: 2,
    affiliateLink: "#",
    badges: ['urgent', 'savings', 'verified'],
    categories: ["smartphones", "cupons"],
    featured: true
  },
  {
    id: "tech-003",
    title: "Smartwatch GPS Monitor Cardíaco",
    description: "Smartwatch com GPS integrado, monitor cardíaco contínuo, SpO2 e mais de 100 modos esportivos.",
    originalPrice: 1299.90,
    discountPrice: 899.90,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2128&auto=format&fit=crop",
    expirationDate: twoWeeks.toISOString(),
    remainingItems: 4,
    affiliateLink: "#",
    badges: ['savings', 'verified', 'popular'],
    categories: ["acessorios"],
    featured: true
  },
  {
    id: "tech-004",
    title: "Notebook Ultrafino 16GB RAM SSD 512GB",
    description: "Notebook leve e potente com processador de última geração, tela Full HD e bateria de longa duração.",
    originalPrice: 5499.90,
    discountPrice: 4299.90,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070&auto=format&fit=crop",
    couponCode: "NOTE22OFF",
    expirationDate: tomorrow.toISOString(),
    remainingItems: 3,
    affiliateLink: "#",
    badges: ['urgent', 'savings', 'verified'],
    categories: ["computadores", "cupons"],
    featured: true
  },
  {
    id: "tech-005",
    title: "Console de Videogame 4K 1TB",
    description: "Videogame com suporte a jogos em 4K, 1TB de armazenamento SSD e controle sem fio ergonômico.",
    originalPrice: 4499.90,
    discountPrice: 3999.90,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=2070&auto=format&fit=crop",
    expirationDate: tomorrow.toISOString(),
    remainingItems: 1,
    affiliateLink: "#",
    badges: ['urgent', 'verified', 'popular'],
    categories: ["eletronicos"]
  },
  {
    id: "tech-006",
    title: "Tablet 10.5\" 128GB WiFi+4G",
    description: "Tablet com tela de alta resolução, processador octa-core e bateria para o dia todo de uso.",
    originalPrice: 2499.90,
    discountPrice: 1999.90,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1975&auto=format&fit=crop",
    couponCode: "TABLET20OFF",
    expirationDate: nextWeek.toISOString(),
    remainingItems: 6,
    affiliateLink: "#",
    badges: ['savings', 'verified'],
    categories: ["smartphones", "cupons"]
  },
  {
    id: "tech-007",
    title: "Smart TV 55\" 4K QLED",
    description: "Smart TV com painel QLED, resolução 4K, HDR10+ e sistema operacional intuitivo com todas as apps.",
    originalPrice: 3999.90,
    discountPrice: 3199.90,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
    expirationDate: twoWeeks.toISOString(),
    remainingItems: 5,
    affiliateLink: "#",
    badges: ['savings', 'popular', 'verified'],
    categories: ["eletronicos"]
  },
  {
    id: "tech-008",
    title: "Caixa de Som Bluetooth à Prova D'água",
    description: "Caixa de som bluetooth portátil, resistente à água IPX7, com 20 horas de bateria e som potente.",
    originalPrice: 449.90,
    discountPrice: 299.90,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
    couponCode: "SOUND33OFF",
    expirationDate: nextWeek.toISOString(),
    remainingItems: 7,
    affiliateLink: "#",
    badges: ['urgent', 'savings'],
    categories: ["acessorios", "cupons"]
  },
  {
    id: "tech-009",
    title: "Monitor Gamer 27\" 165Hz 1ms",
    description: "Monitor IPS para jogos com alta taxa de atualização, tempo de resposta ultra rápido e tecnologia anti-tearing.",
    originalPrice: 1999.90,
    discountPrice: 1599.90,
    image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?q=80&w=2070&auto=format&fit=crop",
    expirationDate: tomorrow.toISOString(),
    remainingItems: 2,
    affiliateLink: "#",
    badges: ['urgent', 'verified', 'popular'],
    categories: ["computadores"]
  },
  {
    id: "tech-010",
    title: "Câmera Mirrorless 4K com 2 Lentes",
    description: "Câmera mirrorless profissional com gravação 4K, estabilização interna e kit com duas lentes versáteis.",
    originalPrice: 7999.90,
    discountPrice: 6799.90,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop",
    couponCode: "CAMERA15OFF",
    expirationDate: twoWeeks.toISOString(),
    remainingItems: 3,
    affiliateLink: "#",
    badges: ['savings', 'verified'],
    categories: ["eletronicos", "cupons"]
  }
]; 