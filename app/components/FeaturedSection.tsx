import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface FeaturedSectionProps {
  title: string;
  items: Product[];
}

export default function FeaturedSection({ title, items }: FeaturedSectionProps) {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
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
  );
} 