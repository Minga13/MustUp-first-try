import React, { useRef, useState } from 'react';
import { Product } from '../types';
import Button from './Button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (limit to +/- 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="perspective-1000 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className={`
          relative w-full h-full glass rounded-3xl p-6 md:p-8 flex flex-col
          transition-all duration-200 ease-out preserve-3d
          ${product.isBundle ? 'border-indigo-500/30 bg-indigo-950/10' : 'border-white/5'}
        `}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
        }}
      >
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${50 - rotate.y * 5}% ${50 - rotate.x * 5}%, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />

        {product.isBundle && (
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20">
             <Sparkles size={12} />
             ХИТ ПРОДАЖ
           </div>
        )}

        <div className="mb-6 relative z-10 transform translate-z-10">
          <div className="h-40 w-full rounded-xl bg-neutral-800/50 mb-6 overflow-hidden relative group">
             {/* Image Placeholder */}
             <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-600">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed min-h-[40px]">
            {product.shortDescription}
          </p>
        </div>

        <ul className="space-y-3 mb-8 flex-grow relative z-10">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-neutral-300">
              <Check className={`w-4 h-4 mr-2 mt-0.5 ${product.isBundle ? 'text-indigo-400' : 'text-green-400'}`} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto relative z-10 transform translate-z-10">
          <div className="flex items-end gap-3 mb-4">
            <span className="text-3xl font-bold text-white">{product.price} ₽</span>
            {product.oldPrice && (
              <span className="text-lg text-neutral-500 line-through mb-1.5">{product.oldPrice} ₽</span>
            )}
            {product.oldPrice && (
              <span className="text-xs text-green-400 font-medium mb-2 bg-green-400/10 px-2 py-0.5 rounded">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </span>
            )}
          </div>
          
          <Button 
            variant={product.isBundle ? 'primary' : 'outline'} 
            fullWidth 
            onClick={() => onOpen(product)}
            className="group"
          >
            Подробнее
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;