import { products } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import CategorySection from './components/CategorySection';
import CTABanner from './components/CTABanner';

export default function Home() {
  // Filtrar os produtos em destaque
  const featuredProducts = products.filter(product => product.featured);
  
  // Filtrar produtos que expiram hoje ou amanhã para a seção de urgência
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const urgentProducts = products.filter(product => {
    if (!product.expirationDate) return false;
    const expDate = new Date(product.expirationDate);
    return expDate <= tomorrow;
  });

  // Filtrar produtos com cupons exclusivos
  const productsWithCoupons = products.filter(product => product.couponCode);

  return (
    <main>
      <Header />
      
      <HeroSection />
      
      <FeaturedSection 
        title="Produtos Recomendados" 
        items={featuredProducts.slice(0, 3)}
      />
      
      <div className="bg-gray-50 py-12">
        <CategorySection />
      </div>
      
      <FeaturedSection 
        title="Últimas Unidades! Aproveite Agora" 
        items={urgentProducts.slice(0, 3)}
      />
      
      {productsWithCoupons.length > 0 && (
        <FeaturedSection 
          title="Com Cupons Exclusivos" 
          items={productsWithCoupons.slice(0, 3)}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CTABanner
          title="Não perca tempo, economize agora!"
          subtitle="Produtos de alta qualidade com preços imperdíveis. Clique e economize antes que acabem."
          buttonText="Ver todos os produtos"
          buttonLink="/categorias"
        />
      </div>
      
      <Footer />
    </main>
  );
}
