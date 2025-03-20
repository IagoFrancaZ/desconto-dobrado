"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

type BadgeType = 'urgent' | 'savings' | 'popular' | 'verified';

interface ProductCardProps {
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
  badges: BadgeType[];
}

export default function ProductCard({
  title,
  description,
  originalPrice,
  discountPrice,
  image,
  couponCode,
  expirationDate,
  remainingItems,
  affiliateLink,
  badges
}: ProductCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const copyToClipboard = () => {
    if (couponCode) {
      navigator.clipboard.writeText(couponCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  
  // Calcula a porcentagem de desconto
  const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  
  // Formata os preços para o formato BR
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  // Valor economizado
  const savedAmount = originalPrice - discountPrice;
  
  // Calcula e atualiza o tempo restante
  useEffect(() => {
    if (!expirationDate) return;
    
    const updateTimeLeft = () => {
      const now = new Date();
      const expDate = new Date(expirationDate);
      const diffTime = expDate.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        setTimeLeft('Expirado');
        return;
      }
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      
      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h restantes`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m restantes`);
      } else {
        setTimeLeft(`${minutes}m restantes`);
      }
    };
    
    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 60000); // Atualiza a cada minuto
    
    return () => clearInterval(interval);
  }, [expirationDate]);

  // Animação de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`card card-premium card-hover-effect ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: '0.1s' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="h-52 w-full relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
            style={{ opacity: isHovered ? 0.8 : 0.3, transition: 'opacity 0.5s ease' }}
          ></div>
          <Image 
            src={image} 
            alt={title}
            fill
            priority
            style={{ 
              objectFit: 'cover', 
              transform: isHovered ? 'scale(1.1)' : 'scale(1)', 
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-all duration-700"
          />
        </div>
        
        {/* Desconto em destaque */}
        <div className="absolute top-4 right-4 z-20">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-white blur-md opacity-20"></div>
            <div className="bg-gradient-primary text-white font-bold rounded-full h-16 w-16 flex flex-col items-center justify-center text-xl transform rotate-3 shadow-lg relative">
              <span className="text-2xl -mb-1">{discountPercentage}%</span>
              <span className="text-xs uppercase tracking-wide">OFF</span>
            </div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {badges.includes('popular') && (
            <div className="badge badge-popular">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Mais vendido
            </div>
          )}
          {badges.includes('verified') && (
            <div className="badge badge-verified">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Alta qualidade
            </div>
          )}
          {badges.includes('urgent') && (
            <div className="badge badge-urgent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Oferta limitada
            </div>
          )}
        </div>
        
        {/* Título absoluto na imagem */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white line-clamp-1 drop-shadow-md">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">{description}</p>
        
        <div className="flex items-center justify-between mb-4 bg-gray-50 p-3 rounded-lg">
          <div className="flex flex-col">
            <span className="text-gray-500 line-through text-sm">{formatPrice(originalPrice)}</span>
            <span className="text-2xl font-bold text-[color:var(--primary)]">{formatPrice(discountPrice)}</span>
          </div>
          
          <div className="flex flex-col items-end">
            {badges.includes('savings') && (
              <span className="badge badge-savings mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Economize {formatPrice(savedAmount)}
              </span>
            )}
            <span className="text-xs text-gray-500">Frete grátis</span>
          </div>
        </div>
        
        {/* Elementos de urgência e escassez com timer */}
        {(timeLeft || remainingItems) && (
          <div className="flex flex-col gap-1 mb-4">
            {timeLeft && timeLeft !== 'Expirado' && (
              <div className="flex items-center text-sm text-[color:var(--primary)] font-semibold bg-red-50 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {timeLeft}
              </div>
            )}
            
            {remainingItems && remainingItems < 10 && (
              <div className="flex items-center text-sm text-[color:var(--primary)] font-semibold bg-red-50 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                {remainingItems === 1 
                  ? 'Última unidade! 🔥' 
                  : `Apenas ${remainingItems} unidades restantes!`}
              </div>
            )}
          </div>
        )}
        
        {/* CTA principal e cupom secundário */}
        <div className="mt-6 space-y-3">
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta btn-primary w-full flex items-center justify-center group"
            onClick={() => {
              // Tracking de cliques para fins estatísticos
              console.log(`Clique no produto: ${title}`);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            COMPRAR COM DESCONTO
          </a>
          
          {/* Cupom como benefício adicional, mostrado apenas se existir */}
          {couponCode && (
            <div 
              className="group flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors border border-dashed border-gray-300 relative overflow-hidden mt-3"
              onClick={copyToClipboard}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-green-50 to-green-100 pointer-events-none" style={{ clipPath: 'inset(0)', transition: 'opacity 0.3s ease' }}></div>
              
              <div className="flex items-center">
                <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">CUPOM EXTRA:</span>
                  <span className="font-mono font-bold tracking-wider text-gray-800">{couponCode}</span>
                </div>
              </div>
              
              <span className={`text-sm font-medium z-10 flex items-center ${isCopied ? 'text-[color:var(--success)]' : 'text-[color:var(--primary)]'}`}>
                {isCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Copiado!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                    Copiar
                  </>
                )}
              </span>
            </div>
          )}
          
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div className="flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[color:var(--secondary)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Frete grátis
            </div>
            <div className="h-3 w-0.5 bg-gray-300 rounded-full"></div>
            <div className="flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[color:var(--secondary)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Produto recomendado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 