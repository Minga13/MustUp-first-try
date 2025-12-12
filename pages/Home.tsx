import React, { useState } from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';
import { PRODUCTS, BENEFITS, FAQS, REVIEWS, LINKS } from '../constants';
import { Product } from '../types';
import { ArrowDown, Check, Star, Shield, Smartphone, Zap, MousePointer2 } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="glow-blob top-[-200px] left-[-200px] opacity-40"></div>
      <div className="glow-blob bottom-[-200px] right-[-200px] opacity-30 bg-purple-500"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Section className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-4 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Цифровой порядок за 3 минуты
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Возьмите жизнь <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">под контроль</span>
            </h1>
            
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Эстетичные и мощные шаблоны Google Таблиц для финансов, привычек и задач. Без подписок. Без сложных приложений.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" onClick={scrollToProducts}>Посмотреть трекеры</Button>
              <a href={LINKS.BUY_BUNDLE}>
                 <Button variant="outline" size="lg">Купить комбо ( -47%)</Button>
              </a>
            </div>

            {/* Mockup Preview Hero */}
            <div className="mt-16 relative">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10 h-full w-full pointer-events-none"></div>
                 <div className="relative mx-auto w-full max-w-5xl rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl transform perspective-1000 rotate-x-12">
                    <img 
                        src="https://picsum.photos/1200/600?random=10" 
                        alt="Interface Preview" 
                        className="rounded-lg w-full h-auto opacity-80"
                    />
                 </div>
            </div>
          </Section>
        </div>
      </section>

      {/* PRODUCTS */}
      <div id="products" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <Section className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Каталог решений</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Инструменты, которые заменят вам десятки разрозненных приложений.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <Section key={product.id} delay={idx * 100}>
                <ProductCard product={product} onOpen={setSelectedProduct} />
              </Section>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS (Infographic) */}
      <div className="py-24 border-y border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <Section>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Почему Google Таблицы,<br />а не приложения?
                </h2>
                <div className="space-y-8">
                    {BENEFITS.map((benefit, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/20">
                                <Check size={18} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">{benefit.title}</h4>
                                <p className="text-neutral-400">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </Section>
             <Section delay={200} className="relative">
                {/* Visual Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-48">
                        <Zap size={32} className="text-yellow-400 mb-4" />
                        <span className="text-3xl font-bold text-white mb-1">3 мин</span>
                        <span className="text-neutral-500 text-sm">На внедрение</span>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-48 translate-y-8">
                        <Smartphone size={32} className="text-purple-400 mb-4" />
                        <span className="text-3xl font-bold text-white mb-1">100%</span>
                        <span className="text-neutral-500 text-sm">Мобильно</span>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-48">
                         <Shield size={32} className="text-green-400 mb-4" />
                        <span className="text-3xl font-bold text-white mb-1">∞</span>
                        <span className="text-neutral-500 text-sm">Вечный доступ</span>
                    </div>
                     <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center h-48 translate-y-8">
                         <MousePointer2 size={32} className="text-blue-400 mb-4" />
                        <span className="text-3xl font-bold text-white mb-1">1 клик</span>
                        <span className="text-neutral-500 text-sm">Для старта</span>
                    </div>
                </div>
             </Section>
           </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how-it-works" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <Section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Как это работает</h2>
          </Section>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden md:block"></div>
            
            {[
                { title: "Выбираете", desc: "Находите нужный шаблон или берете комбо для максимальной выгоды." },
                { title: "Получаете", desc: "Ссылка приходит на email мгновенно после оплаты." },
                { title: "Пользуетесь", desc: "Копируете в свой Google Аккаунт и начинаете новую жизнь." }
            ].map((step, i) => (
                <Section key={i} delay={i * 150} className="relative z-10">
                    <div className="glass p-8 rounded-3xl text-center border border-white/5 h-full hover:border-blue-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg shadow-blue-500/10">
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-neutral-400">{step.desc}</p>
                    </div>
                </Section>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Что говорят люди</h2>
          </Section>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <Section key={review.id} className="glass p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-700"} />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs text-white font-bold">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <div className="text-white font-medium text-sm">{review.name}</div>
                        <div className="text-neutral-500 text-xs">{review.role}</div>
                    </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-3xl">
          <Section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Частые вопросы</h2>
          </Section>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
                <Section key={i}>
                    <details className="group glass rounded-2xl border border-white/5 open:bg-white/5 transition-colors duration-300">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-blue-400 transition-colors list-none">
                            <span>{faq.question}</span>
                            <span className="transition group-open:rotate-180">
                                <ArrowDown size={20} />
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-neutral-400 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                            <p>{faq.answer}</p>
                        </div>
                    </details>
                </Section>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <Section>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Выбери систему, <br />которая держит фокус
                </h2>
                <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                    Перестаньте держать всё в голове. Доверьте рутину таблицам.
                </p>
                <a href={LINKS.BUY_BUNDLE}>
                    <Button size="lg" className="px-12 py-5 text-lg shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        Забрать Комбо за 1990 ₽
                    </Button>
                </a>
                <p className="mt-4 text-sm text-neutral-500">Мгновенный доступ • Гарантия качества</p>
            </Section>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
};

export default Home;