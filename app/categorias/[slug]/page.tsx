import { products } from '../../data/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import CTABanner from '../../components/CTABanner';
import Link from 'next/link';

const categoryNames: Record<string, string> = {
  'eletronicos': 'Eletrônicos',
  'computadores': 'Computadores',
  'smartphones': 'Smartphones',
  'acessorios': 'Periféricos',
  'cupons': 'Cupons',
};

const categoryDescriptions: Record<string, string> = {
  'eletronicos': 'Os melhores produtos de tecnologia com preços imperdíveis. TVs, áudio, câmeras e gadgets de última geração.',
  'computadores': 'Notebooks, PCs, componentes e monitores das melhores marcas com desempenho excepcional.',
  'smartphones': 'Smartphones, tablets e acessórios com as tecnologias mais avançadas e melhores preços.',
  'acessorios': 'Teclados, mouses, headsets, controles e acessórios para elevar sua experiência tecnológica.',
  'cupons': 'Produtos selecionados com cupons de desconto exclusivos. Economize ainda mais nas suas compras.',
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoryName = categoryNames[slug] || 'Categoria';
  const categoryDescription = categoryDescriptions[slug] || 'Produtos de alta qualidade com os melhores preços.';
  
  // Filtrar produtos da categoria específica
  const categoryProducts = products.filter(product => product.categories.includes(slug));

  // Verificar produtos com cupons nesta categoria
  const productsWithCoupons = categoryProducts.filter(product => product.couponCode);
  
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-r from-[color:var(--primary)] to-[#ff8a80] py-12 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Link href="/categorias" className="text-white hover:underline flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para categorias
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {categoryDescription}
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
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
          
          {categoryProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Nenhum produto encontrado</h3>
              <p className="text-gray-600 mb-6">
                No momento não encontramos produtos nesta categoria. Tente novamente mais tarde ou navegue por outras categorias.
              </p>
              <Link 
                href="/categorias" 
                className="inline-block bg-[color:var(--primary)] text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Ver todas as categorias
              </Link>
            </div>
          )}
        </div>
      </section>

      {productsWithCoupons.length > 0 && slug !== 'cupons' && (
        <section className="py-4 px-6 md:px-12 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Com Cupons Exclusivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsWithCoupons.slice(0, 3).map((product) => (
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
      
      {categoryProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Outras categorias que podem te interessar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(categoryNames)
              .filter(([key]) => key !== slug)
              .map(([key, name]) => (
                <Link 
                  key={key}
                  href={`/categorias/${key}`}
                  className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors text-center font-medium"
                >
                  {name}
                </Link>
              ))
            }
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CTABanner
          title="Encontre mais produtos de qualidade!"
          subtitle="Confira nossos produtos mais vendidos e economize ainda mais."
          buttonText="Ver mais vendidos"
          buttonLink="/mais-vendidos"
        />
      </div>
      
      <Footer />
    </main>
  );
} 