import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop',
    description: 'TVs, áudio, câmeras e gadgets'
  },
  {
    id: 'computadores',
    name: 'Computadores',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    description: 'Notebooks, PCs, componentes e monitores'
  },
  {
    id: 'smartphones',
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2070&auto=format&fit=crop',
    description: 'Celulares, tablets e acessórios'
  },
  {
    id: 'acessorios',
    name: 'Periféricos',
    image: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=2070&auto=format&fit=crop',
    description: 'Teclados, mouses, headsets e mais'
  },
  {
    id: 'cupons',
    name: 'Cupons',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop',
    description: 'Produtos com desconto exclusivo'
  }
];

export default function CategorySection() {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Navegue por Categoria</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/categorias/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{category.description}</p>
                  <p className="mt-2 text-[color:var(--primary)] font-medium group-hover:underline">
                    {category.id === 'cupons' ? 'Ver ofertas com cupom' : 'Ver produtos recomendados'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 