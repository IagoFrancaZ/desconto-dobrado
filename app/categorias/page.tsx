import Header from '../components/Header';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import CTABanner from '../components/CTABanner';

export default function CategoriesPage() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-r from-[color:var(--primary)] to-[#ff8a80] py-12 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Categorias</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore nossos produtos de alta qualidade por categoria e encontre as melhores recomendações com preços especiais.
          </p>
        </div>
      </section>
      
      <div className="py-16">
        <CategorySection />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CTABanner
          title="Não encontrou o que procurava?"
          subtitle="Confira nossos produtos mais vendidos ou entre em contato para sugerir novos produtos para avaliação."
          buttonText="Ver mais vendidos"
          buttonLink="/mais-vendidos"
        />
      </div>
      
      <Footer />
    </main>
  );
} 