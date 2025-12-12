import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { LINKS } from '../constants';
import { Coins, Users, TrendingUp } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] flex items-center justify-center">
       <div className="container mx-auto max-w-4xl text-center">
           <Section>
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Зарабатывайте <br/> вместе с нами</h1>
               <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
                   Рекомендуйте наши трекеры своей аудитории и получайте высокий процент с каждой продажи. Прозрачная система, быстрые выплаты.
               </p>

               <div className="grid md:grid-cols-3 gap-6 mb-16 text-left">
                   {[
                       { icon: Coins, title: "Высокая комиссия", text: "До 40% с каждой продажи по вашей ссылке." },
                       { icon: Users, title: "Лояльная аудитория", text: "Продукт, который реально помогает людям." },
                       { icon: TrendingUp, title: "Растущий рынок", text: "Спрос на планирование растет каждый год." }
                   ].map((item, i) => (
                       <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                           <item.icon className="text-blue-400 mb-4" size={32} />
                           <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                           <p className="text-neutral-400 text-sm">{item.text}</p>
                       </div>
                   ))}
               </div>

               <div className="glass p-8 rounded-3xl border border-indigo-500/20 bg-indigo-900/10 max-w-xl mx-auto">
                   <h3 className="text-2xl font-bold text-white mb-4">Готовы начать?</h3>
                   <a href={LINKS.PARTNER} target="_blank" rel="noreferrer">
                       <Button size="lg" fullWidth>Перейти к партнёрской программе</Button>
                   </a>
                   <p className="mt-4 text-xs text-neutral-500">Регистрация займет менее 2 минут</p>
               </div>
           </Section>
       </div>
    </div>
  );
};

export default Partnership;