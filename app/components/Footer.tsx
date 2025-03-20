"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);

  // Carregar emails salvos ao iniciar
  useEffect(() => {
    try {
      const savedEmails = localStorage.getItem('subscribedEmails');
      if (savedEmails) {
        setSubscribedEmails(JSON.parse(savedEmails));
      }
    } catch (err) {
      console.error('Erro ao carregar emails:', err);
    }
  }, []);

  // Função para compartilhar o site
  const shareWebsite = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'copy') => {
    const siteUrl = window.location.origin;
    const siteTitle = 'Desconto Dobrado - Recomendações de produtos tecnológicos';
    const siteDescription = 'Confira as melhores recomendações de produtos tecnológicos com preços especiais e avaliações imparciais!';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(siteDescription)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(siteDescription)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(siteTitle + ' - ' + siteDescription + ' ' + siteUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(siteUrl)
          .then(() => {
            alert('Link copiado para a área de transferência!');
          })
          .catch(err => {
            console.error('Erro ao copiar link:', err);
          });
        break;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }
    
    // Verificar se o email já está registrado
    if (subscribedEmails.includes(email)) {
      setSubscriptionStatus('error');
      setErrorMessage('Este e-mail já está inscrito em nossa newsletter.');
      return;
    }
    
    setIsSubmitting(true);
    setSubscriptionStatus('idle');
    
    try {
      // Simulando um delay para demonstração
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Salvar o email localmente
      const updatedEmails = [...subscribedEmails, email];
      setSubscribedEmails(updatedEmails);
      localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails));
      
      // Simulando sucesso
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
      setErrorMessage('Ocorreu um erro ao tentar inscrever. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
            <svg 
              className="h-8 w-8 mr-2" 
              viewBox="0 0 80 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="footerLogoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--accent)" />
                </linearGradient>
                <linearGradient id="footerLogoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--secondary)" />
                  <stop offset="100%" stopColor="var(--urgent)" />
                </linearGradient>
                <filter id="footerShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00000033"/>
                </filter>
              </defs>
              
              {/* Círculo de fundo */}
              <circle cx="40" cy="40" r="38" fill="white" filter="url(#footerShadow)" />
              
              {/* Etiqueta de preço estilizada */}
              <path 
                d="M57 25C57 22.2386 54.7614 20 52 20H28C25.2386 20 23 22.2386 23 25V36.5L30 40L23 43.5V55C23 57.7614 25.2386 60 28 60H52C54.7614 60 57 57.7614 57 55V25Z" 
                fill="white" 
                stroke="url(#footerLogoGradient1)" 
                strokeWidth="2.5" 
              />
              
              {/* Símbolo de porcentagem - círculo superior */}
              <circle cx="32" cy="32" r="6" fill="url(#footerLogoGradient1)" />
              
              {/* Símbolo de porcentagem - círculo inferior */}
              <circle cx="48" cy="48" r="6" fill="url(#footerLogoGradient2)" />
              
              {/* Símbolo de porcentagem - linha diagonal */}
              <line x1="28" y1="52" x2="52" y2="28" stroke="url(#footerLogoGradient1)" strokeWidth="3" strokeLinecap="round" />
              
              {/* Detalhe da etiqueta */}
              <path d="M23 36.5V43.5L30 40L23 36.5Z" fill="url(#footerLogoGradient1)" />
            </svg>
            Desconto Dobrado
          </h3>
          <p className="text-gray-600 mb-4">
            As melhores recomendações de produtos de tecnologia com preços especiais e avaliações imparciais.
          </p>
          <p className="text-gray-600 mb-4">
            <a href="mailto:codeguardgroup@gmail.com" className="hover:text-[color:var(--primary)]">
              codeguardgroup@gmail.com
            </a>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-[color:var(--primary)]" onClick={(e) => { e.preventDefault(); shareWebsite('facebook'); }}>
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-[color:var(--primary)]" onClick={(e) => { e.preventDefault(); shareWebsite('twitter'); }}>
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-[color:var(--primary)]" onClick={(e) => { e.preventDefault(); shareWebsite('whatsapp'); }}>
              <span className="sr-only">WhatsApp</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M20.11 3.89C17.94 1.71 15.01 0.5 12 0.5C5.61 0.5 0.5 5.61 0.5 12C0.5 14.08 1.01 16.09 2 17.89L0.5 23.5L6.27 22.03C8.02 22.95 9.97 23.5 12 23.5C18.39 23.5 23.5 18.39 23.5 12C23.5 8.99 22.25 6.06 20.11 3.89ZM12 21.5C10.21 21.5 8.45 21 6.92 20.07L6.58 19.87L3.12 20.74L4 17.36L3.78 17C2.77 15.42 2.23 13.74 2.23 12C2.23 6.57 6.57 2.23 12 2.23C14.61 2.23 17.09 3.25 18.97 5.13C20.85 7.01 21.83 9.49 21.83 12.1C21.77 17.53 17.43 21.5 12 21.5ZM16.59 14.33C16.33 14.22 15.09 13.61 14.89 13.5C14.69 13.43 14.5 13.39 14.33 13.61C14.16 13.83 13.67 14.39 13.53 14.56C13.39 14.72 13.25 14.76 12.99 14.66C11.78 14.05 10.97 13.57 10.16 12.22C9.92 11.82 10.42 11.86 10.89 10.92C10.97 10.75 10.93 10.58 10.89 10.44C10.85 10.31 10.36 9.07 10.13 8.58C9.9 8.06 9.68 8.14 9.54 8.14C9.18 8.1 8.94 8.1 8.7 8.1C8.46 8.1 8.07 8.18 7.86 8.4C7.65 8.63 7 9.24 7 10.48C7 11.72 7.89 12.91 8.01 13.08C8.13 13.26 10.25 16.44 13.4 17.53C15.15 18.17 15.84 18.22 16.72 18.08C17.23 18.01 18.22 17.47 18.46 16.9C18.7 16.32 18.7 15.84 18.62 15.76C18.54 15.68 18.38 15.64 18.14 15.53C17.9 15.42 16.85 14.44 16.59 14.33Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-[color:var(--primary)]" onClick={(e) => { e.preventDefault(); shareWebsite('copy'); }}>
              <span className="sr-only">Copiar Link</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z" clipRule="evenodd" />
                <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/categorias" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/mais-vendidos" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Mais Vendidos
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Categorias</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categorias/eletronicos" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Eletrônicos
              </Link>
            </li>
            <li>
              <Link href="/categorias/computadores" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Computadores
              </Link>
            </li>
            <li>
              <Link href="/categorias/smartphones" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Smartphones
              </Link>
            </li>
            <li>
              <Link href="/categorias/acessorios" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Periféricos
              </Link>
            </li>
            <li>
              <Link href="/categorias/cupons" className="text-gray-600 hover:text-[color:var(--primary)] transition-colors">
                Cupons
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Receba Recomendações Exclusivas</h3>
          <p className="text-gray-600 mb-4">
            Inscreva-se para receber as melhores dicas e recomendações de produtos tecnológicos.
          </p>
          <form className="space-y-2" onSubmit={handleSubscribe}>
            <div>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className={`w-full px-4 py-2 rounded-md border ${subscriptionStatus === 'error' ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)]`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {subscriptionStatus === 'error' && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[color:var(--primary)]'} text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex justify-center items-center`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Receber Recomendações'
              )}
            </button>
            
            {subscriptionStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mt-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Obrigado! Você foi inscrito com sucesso.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Desconto Dobrado. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Compartilhe este site com seus amigos!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 