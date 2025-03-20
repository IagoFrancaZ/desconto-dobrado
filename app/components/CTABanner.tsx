"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  image?: string;
  labelText?: string;
}

export default function CTABanner({
  title = "Economize até 70% em produtos de tecnologia!",
  subtitle = "Cupons exclusivos com tempo limitado. Não perca as melhores ofertas em smartphones, notebooks e gadgets.",
  buttonText = "Ver ofertas incríveis",
  buttonLink = "/categorias/eletronicos",
  image = "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
  labelText = "OFERTA LIMITADA"
}: CTABannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Animação de entrada
  useEffect(() => {
    setIsVisible(true);
    
    // Contagem regressiva
    const timer = setInterval(() => {
      setCountdown(prevState => {
        let { hours, minutes, seconds } = prevState;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              // Reset para 23:59:59 quando chegar a zero
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Formata os números com dois dígitos
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div 
      className={`rounded-2xl overflow-hidden relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ animationDelay: "0.3s" }}
    >
      {/* Background com overlay gradiente */}
      <div className="absolute inset-0 z-0">
        {image && (
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f26]/95 via-[#1a103c]/85 to-[#33072e]/90"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10 py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Coluna de texto */}
            <div className="flex-1 text-center md:text-left">
              {labelText && (
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] backdrop-blur-xl rounded-full text-sm font-medium text-white mb-6 border border-white/10 shadow-lg">
                  <span className="flex h-3 w-3 relative mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b5c] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff3b5c]"></span>
                  </span>
                  {labelText}
                </div>
              )}
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                {title}
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                {subtitle}
              </p>
              
              <Link 
                href={buttonLink}
                className="btn-cta btn-primary group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10">{buttonText}</span>
              </Link>
              
              <div className="mt-8 text-gray-300 text-sm">
                Ofertas por tempo limitado. Economize enquanto estiver disponível.
              </div>
            </div>
            
            {/* Contador regressivo */}
            <div className="flex-shrink-0">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-sm text-gray-300 mb-2 uppercase tracking-wider">A oferta expira em</div>
                <div className="flex gap-3 justify-center">
                  <div className="bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] p-3 rounded-lg w-20">
                    <div className="text-3xl font-bold text-white">{formatTime(countdown.hours)}</div>
                    <div className="text-xs text-gray-400 mt-1">HORAS</div>
                  </div>
                  
                  <div className="text-2xl font-bold text-white self-center">:</div>
                  
                  <div className="bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] p-3 rounded-lg w-20">
                    <div className="text-3xl font-bold text-white">{formatTime(countdown.minutes)}</div>
                    <div className="text-xs text-gray-400 mt-1">MINUTOS</div>
                  </div>
                  
                  <div className="text-2xl font-bold text-white self-center">:</div>
                  
                  <div className="bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] p-3 rounded-lg w-20">
                    <div className="text-3xl font-bold text-white animate-pulse">{formatTime(countdown.seconds)}</div>
                    <div className="text-xs text-gray-400 mt-1">SEGUNDOS</div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center gap-3">
                  <div className="flex items-center text-xs text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[color:var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Frete grátis
                  </div>
                  <div className="h-3 w-0.5 bg-gray-700 rounded-full"></div>
                  <div className="flex items-center text-xs text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[color:var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Compra segura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 