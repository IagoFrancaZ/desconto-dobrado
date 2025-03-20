import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CTABanner from '../components/CTABanner';

export default function BestSellersPage() {
  // Filtrar produtos com badge "popular"
  const popularProducts = products.filter(product => product.badges.includes('popular'));
  
  // Verificar se existem produtos com cupons entre os populares
  const popularWithCoupons = popularProducts.filter(product => product.couponCode);
  
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-r from-[color:var(--primary)] to-[#ff8a80] py-12 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Produtos Mais Vendidos</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Os produtos que mais fazem sucesso, recomendados por sua qualidade e preços especiais.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                originalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                image={product.image}
                couponCode={product.couponCode}
                expirationDate={product.expirationDate}
                remainingItems={product.remainingItems}
                affiliateLink={product.affiliateLink}
                badges={product.badges}
              />
            ))}
          </div>
          
          {popularProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Nenhum produto encontrado</h3>
              <p className="text-gray-600">
                No momento não encontramos produtos nesta categoria. Tente novamente mais tarde ou navegue por outras categorias.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {popularWithCoupons.length > 0 && (
        <section className="py-4 px-6 md:px-12 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mais Vendidos com Cupons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularWithCoupons.slice(0, 3).map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  originalPrice={product.originalPrice}
                  discountPrice={product.discountPrice}
                  image={product.image}
                  couponCode={product.couponCode}
                  expirationDate={product.expirationDate}
                  remainingItems={product.remainingItems}
                  affiliateLink={product.affiliateLink}
                  badges={product.badges}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CTABanner
          title="Descubra mais produtos de qualidade!"
          subtitle="Explore diferentes categorias e encontre o produto perfeito pelo melhor preço."
          buttonText="Ver todas as categorias"
          buttonLink="/categorias"
        />
      </div>
      
      <Footer />
    </main>
  );
} 