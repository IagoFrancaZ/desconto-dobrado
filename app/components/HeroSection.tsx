"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-dark py-24 lg:py-32 overflow-hidden">
      {/* Fundo dinâmico com partículas e gradientes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fundo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f26] via-[#1a103c] to-[#33072e] opacity-90"></div>
        
        {/* Círculos decorativos com blur */}
        <div className="absolute top-[-20%] right-[-10%] w-[35%] h-[60%] rounded-full bg-gradient-to-r from-[#ff3b5c]/30 to-[#ff3b5c]/5 blur-3xl"></div>
        <div className="absolute bottom-[-30%] left-[-20%] w-[50%] h-[70%] rounded-full bg-gradient-to-r from-[#0071e3]/20 to-[#0071e3]/5 blur-3xl"></div>
        
        {/* Padrão de circuito digital */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="url(#gridGradient)" strokeWidth="0.1"></path>
          <path d="M0,20 L20,20 L20,40 L40,40 L40,60 L60,60 L60,80 L100,80" fill="none" stroke="url(#lineGradient)" strokeWidth="0.2"></path>
          <path d="M0,50 L30,50 L30,70 L70,70 L70,30 L100,30" fill="none" stroke="url(#lineGradient)" strokeWidth="0.2"></path>
          <path d="M0,70 L50,70 L50,50 L80,50 L80,100" fill="none" stroke="url(#lineGradient)" strokeWidth="0.2"></path>
          <circle cx="20" cy="20" r="1" fill="white"></circle>
          <circle cx="40" cy="40" r="1" fill="#ff3b5c"></circle>
          <circle cx="60" cy="60" r="1" fill="white"></circle>
          <circle cx="30" cy="50" r="1" fill="#ffc53d"></circle>
          <circle cx="70" cy="70" r="1" fill="#3b82f6"></circle>
          <circle cx="50" cy="50" r="1" fill="#34d399"></circle>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff3b5c" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Coluna de texto */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] backdrop-blur-xl rounded-full text-sm font-medium text-white mb-6 border border-white/10 shadow-xl animate-pulse">
              <span className="flex h-3 w-3 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b5c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff3b5c]"></span>
              </span>
              Qualidade em Tecnologia é aqui! 🔥
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Recomendamos </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b5c] to-[#ffc53d]">Produtos de Tecnologia</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#ff3b5c]/50 to-[#ffc53d]/50 blur-md"></span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/90"> pelos Melhores Preços</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Gadgets, smartphones, notebooks e muito mais com preços imperdíveis e{' '}
              <span className="font-bold text-white">até 70% OFF</span>. Alguns produtos possuem cupons exclusivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/categorias/eletronicos" 
                className="btn-cta btn-primary group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span className="relative z-10">Ver Produtos de Tecnologia</span>
              </Link>
              
              <Link 
                href="/mais-vendidos" 
                className="btn-cta btn-secondary group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="relative z-10">Mais Vendidos</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass px-4 py-3 rounded-lg flex items-center">
                <div className="bg-gradient-primary rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-200">Preços especiais</span>
              </div>
              
              <div className="glass px-4 py-3 rounded-lg flex items-center">
                <div className="bg-gradient-secondary rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-200">Produtos verificados</span>
              </div>
              
              <div className="glass px-4 py-3 rounded-lg flex items-center">
                <div className="bg-gradient-accent rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3d00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-200">Cupons exclusivos</span>
              </div>
            </div>
          </div>
          
          {/* Imagem/ilustração da coluna direita */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative h-[450px] w-full">
              {/* Card flutuante 1 - Smartphone */}
              <div className="absolute top-5 left-5 z-30 bg-white rounded-2xl shadow-2xl overflow-hidden w-56 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div className="relative h-40 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2127&auto=format&fit=crop" 
                    fill 
                    alt="Smartphone" 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white font-bold">Smartphones</div>
                </div>
                <div className="p-3 bg-white">
                  <div className="text-xs text-gray-500">Galaxy Ultra Pro</div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="text-sm font-bold text-[color:var(--primary)]">R$ 3.799,90</div>
                    <div className="bg-[color:var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">25% OFF</div>
                  </div>
                </div>
              </div>
              
              {/* Card flutuante 2 - Fone */}
              <div className="absolute top-[45%] right-10 z-20 bg-white rounded-2xl shadow-2xl overflow-hidden w-52 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div className="relative h-36 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=2070&auto=format&fit=crop" 
                    fill 
                    alt="Fones" 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white font-bold">Fones</div>
                </div>
                <div className="p-3 bg-white">
                  <div className="text-xs text-gray-500">Fone Bluetooth Pro</div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="text-sm font-bold text-[color:var(--primary)]">R$ 329,90</div>
                    <div className="bg-[color:var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">33% OFF</div>
                  </div>
                </div>
              </div>
              
              {/* Card flutuante 3 - Notebook */}
              <div className="absolute bottom-10 left-12 z-10 bg-white rounded-2xl shadow-2xl overflow-hidden w-60 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div className="relative h-44 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070&auto=format&fit=crop" 
                    fill 
                    alt="Notebook" 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white font-bold">Notebooks</div>
                </div>
                <div className="p-3 bg-white">
                  <div className="text-xs text-gray-500">Notebook Ultrafino</div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="text-sm font-bold text-[color:var(--primary)]">R$ 4.299,90</div>
                    <div className="bg-[color:var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">22% OFF</div>
                  </div>
                </div>
              </div>
              
              {/* Círculos de destaque */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-secondary rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </div>
        
        {/* Estatísticas dos usuários */}
        <div className={`mt-8 flex items-center justify-center sm:justify-start transition-all duration-1000 ease-out delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass py-2 px-4 rounded-xl flex items-center gap-4">
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            </div>
            <div className="text-gray-200 font-medium">
              +1.250 clientes satisfeitos esta semana!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 