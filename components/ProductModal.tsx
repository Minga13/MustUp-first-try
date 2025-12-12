import React, { useEffect } from 'react';
import { Product } from '../types';
import { X, CheckCircle, Target, Gift } from 'lucide-react';
import Button from './Button';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 w-full">
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">{product.title}</h2>
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-400">{product.price} ₽</span>
                    {product.oldPrice && <span className="text-lg text-neutral-400 line-through">{product.oldPrice} ₽</span>}
                </div>
            </div>
        </div>

        <div className="p-6 md:p-8 space-y-8 bg-[#121212]">
            {/* For Who */}
            <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                    <Target size={20} />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Для кого</h4>
                    <p className="text-neutral-400">{product.forWho}</p>
                </div>
            </div>

            {/* What's Inside */}
            <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Gift size={20} className="text-purple-400" />
                    Что внутри
                </h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {product.details.map((item, idx) => (
                        <li key={idx} className="flex items-center text-neutral-300 bg-neutral-900/50 p-3 rounded-xl border border-white/5">
                            <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Difference */}
            <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                <h4 className="text-sm uppercase tracking-wider text-neutral-500 font-bold mb-2">Почему это круто</h4>
                <p className="text-neutral-200">{product.difference}</p>
            </div>

            {/* CTA */}
            <div className="sticky bottom-0 bg-[#121212] pt-4 border-t border-white/10 flex gap-4">
                <Button variant="secondary" onClick={onClose} className="flex-1">Закрыть</Button>
                <a href={product.buyLink} className="flex-[2] block">
                    <Button variant="primary" fullWidth>Купить сейчас</Button>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;