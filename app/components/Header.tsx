"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Detecta o scroll para mudar a aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/95 shadow-md backdrop-blur-md'
          : 'py-4 bg-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative group">
                {/* Efeito de brilho atrás do logo */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--accent)] to-[color:var(--secondary)] opacity-40 blur-md group-hover:opacity-70 transition duration-500"></div>
                
                <span className={`${isScrolled ? 'text-gray-700' : 'text-white'} relative text-3xl font-bold tracking-tight flex items-center`}>
                  {/* Logo SVG personalizado - versão melhorada */}
                  <svg 
                    className="h-10 w-10 mr-2" 
                    viewBox="0 0 80 80" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                      <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--secondary)" />
                        <stop offset="100%" stopColor="var(--urgent)" />
                      </linearGradient>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00000033"/>
                      </filter>
                    </defs>
                    
                    {/* Círculo de fundo */}
                    <circle cx="40" cy="40" r="38" fill="white" filter="url(#shadow)" />
                    
                    {/* Etiqueta de preço estilizada */}
                    <path 
                      d="M57 25C57 22.2386 54.7614 20 52 20H28C25.2386 20 23 22.2386 23 25V36.5L30 40L23 43.5V55C23 57.7614 25.2386 60 28 60H52C54.7614 60 57 57.7614 57 55V25Z" 
                      fill="white" 
                      stroke="url(#logoGradient1)" 
                      strokeWidth="2.5" 
                    />
                    
                    {/* Símbolo de porcentagem - círculo superior */}
                    <circle cx="32" cy="32" r="6" fill="url(#logoGradient1)" />
                    
                    {/* Símbolo de porcentagem - círculo inferior */}
                    <circle cx="48" cy="48" r="6" fill="url(#logoGradient2)" />
                    
                    {/* Símbolo de porcentagem - linha diagonal */}
                    <line x1="28" y1="52" x2="52" y2="28" stroke="url(#logoGradient1)" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Detalhe da etiqueta */}
                    <path d="M23 36.5V43.5L30 40L23 36.5Z" fill="url(#logoGradient1)" />
                  </svg>
                  
                  <span className={`${isScrolled ? 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent' : 'text-white'}`}>Desconto</span>
                  <span className={`${isScrolled ? 'bg-gradient-to-r from-[color:var(--secondary)] to-[color:var(--urgent)] bg-clip-text text-transparent' : 'text-white'}`}>Dobrado</span>
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link group ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Início</span>
              <span className="nav-link-underline"></span>
            </Link>
            <Link href="/categorias" className={`nav-link group ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Categorias</span>
              <span className="nav-link-underline"></span>
            </Link>
            <Link href="/mais-vendidos" className={`nav-link group ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Mais Vendidos</span>
              <span className="nav-link-underline"></span>
            </Link>
            <Link href="/sobre" className={`nav-link group ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Sobre</span>
              <span className="nav-link-underline"></span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[color:var(--primary)] focus:outline-none`}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link 
            href="/" 
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            href="/categorias" 
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Categorias
          </Link>
          <Link 
            href="/mais-vendidos" 
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mais Vendidos
          </Link>
          <Link 
            href="/sobre" 
            className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>
        </div>
      </div>
      
      {/* Adiciona estilos CSS inline para os efeitos de underline nos links */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .nav-link-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }
        
        .group:hover .nav-link-underline {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
} 