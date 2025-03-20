"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function AboutPage() {
  // Funções para compartilhamento
  const siteUrl = "https://descontodobrado.com.br"; // URL base do site
  const siteTitle = "Desconto Dobrado - Recomendações de produtos tecnológicos com preços especiais!";
  
  // URLs de compartilhamento
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(siteTitle)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(siteTitle + ' ' + siteUrl)}`;
  
  return (
    <main>
      <Header />
      
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre o Desconto Dobrado</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--primary)]">Nossa Missão</h2>
            <p className="text-gray-700 mb-8 text-lg">
              O Desconto Dobrado nasceu com uma missão clara: ajudar brasileiros a encontrarem os melhores produtos 
              tecnológicos com preços especiais. Acreditamos que todos merecem acesso a produtos de qualidade, 
              cuidadosamente selecionados e avaliados. Trabalhamos diariamente para testar e recomendar apenas 
              o que realmente vale a pena.
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--primary)]">O Que Fazemos</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Nossa equipe está constantemente pesquisando e avaliando para trazer:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2 text-lg">
              <li>Recomendações imparciais dos melhores produtos de tecnologia</li>
              <li>Análises detalhadas sobre qualidade, desempenho e custo-benefício</li>
              <li>Produtos verificados que entregam o que prometem</li>
              <li>Dicas para fazer escolhas inteligentes em suas compras</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--primary)]">Nosso Compromisso</h2>
            <p className="text-gray-700 mb-8 text-lg">
              No Desconto Dobrado, comprometemo-nos a:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[color:var(--primary)] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Recomendar com honestidade</h3>
                </div>
                <p className="text-gray-600">
                  Testamos cada produto antes de recomendar para garantir sua qualidade.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[color:var(--primary)] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Atualizar constantemente</h3>
                </div>
                <p className="text-gray-600">
                  Nosso site é atualizado regularmente com novos produtos e tecnologias.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[color:var(--primary)] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Focar em qualidade</h3>
                </div>
                <p className="text-gray-600">
                  Priorizamos produtos premium de marcas confiáveis e com bom custo-benefício.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[color:var(--primary)] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Ouvir nossos usuários</h3>
                </div>
                <p className="text-gray-600">
                  Valorizamos seu feedback para melhorar continuamente nossas recomendações.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--primary)]">Como Funcionamos</h2>
            <p className="text-gray-700 mb-8 text-lg">
              O Desconto Dobrado trabalha com programas de afiliados para recomendar produtos de qualidade. 
              Quando você compra um produto através dos nossos links, podemos receber uma pequena comissão da loja parceira – 
              sem nenhum custo adicional para você. Isso nos permite manter o site gratuito e continuar 
              avaliando e recomendando os melhores produtos.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Fale Conosco</h3>
              <p className="text-gray-700 text-center mb-4">
                Tem sugestões de produtos para avaliarmos ou dúvidas sobre nossas recomendações?
              </p>
              <div className="text-center mb-4">
                <a 
                  href="mailto:codeguardgroup@gmail.com" 
                  className="inline-block bg-[color:var(--primary)] text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Entre em Contato
                </a>
              </div>
              <p className="text-gray-700 text-center text-sm mt-4">
                Email: codeguardgroup@gmail.com
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Compartilhe o Desconto Dobrado</h3>
              <p className="text-gray-700 text-center mb-4">
                Gostou das nossas recomendações? Compartilhe com seus amigos!
              </p>
              <div className="flex justify-center space-x-6">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="Compartilhar no Facebook">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600" aria-label="Compartilhar no Twitter">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700" aria-label="Compartilhar no WhatsApp">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M20.11 3.89C17.94 1.71 15.01 0.5 12 0.5C5.61 0.5 0.5 5.61 0.5 12C0.5 14.08 1.01 16.09 2 17.89L0.5 23.5L6.27 22.03C8.02 22.95 9.97 23.5 12 23.5C18.39 23.5 23.5 18.39 23.5 12C23.5 8.99 22.25 6.06 20.11 3.89ZM12 21.5C10.21 21.5 8.45 21 6.92 20.07L6.58 19.87L3.12 20.74L4 17.36L3.78 17C2.77 15.42 2.23 13.74 2.23 12C2.23 6.57 6.57 2.23 12 2.23C14.61 2.23 17.09 3.25 18.97 5.13C20.85 7.01 21.83 9.49 21.83 12.1C21.77 17.53 17.43 21.5 12 21.5Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a id="copyLink" href="#" className="text-gray-600 hover:text-gray-800" aria-label="Copiar link" onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(window.location.origin).then(() => {
                    alert('Link copiado para a área de transferência!');
                  });
                }}>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z" clipRule="evenodd" />
                    <path d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <CTABanner
          title="Descubra produtos de qualidade!"
          subtitle="Confira nossas recomendações de produtos tecnológicos premium com os melhores preços."
          buttonText="Ver recomendações"
          buttonLink="/categorias"
        />
      </div>
      
      <Footer />
      
      {/* Script para o botão "Copiar Link" */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const copyButton = document.getElementById('copyLink');
            if (copyButton) {
              copyButton.addEventListener('click', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText(window.location.origin).then(function() {
                  alert('Link copiado para a área de transferência!');
                });
              });
            }
          });
        `
      }} />
    </main>
  );
} 