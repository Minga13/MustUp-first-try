import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505] text-neutral-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">Политика конфиденциальности</h1>
        
        <div className="space-y-6 text-sm leading-relaxed glass p-8 rounded-3xl border border-white/5">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Общие положения</h2>
            <p>Мы серьезно относимся к конфиденциальности ваших данных. В этом документе описано, какую информацию мы собираем и как ее используем.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Сбор данных</h2>
            <p>Мы собираем минимально необходимый объем данных для обработки вашего заказа:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Адрес электронной почты (для отправки товара).</li>
                <li>Имя (если вы указываете его при обращении).</li>
                <li>Данные о транзакции (через платежного оператора, мы не храним данные карт).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Использование данных</h2>
            <p>Ваши данные используются исключительно для:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Доставки цифрового продукта.</li>
                <li>Технической поддержки.</li>
                <li>Информирования об обновлениях (если вы дали согласие).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
            <p>Сайт может использовать файлы cookie для улучшения пользовательского опыта и аналитики посещаемости.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Контакты</h2>
            <p>По всем вопросам касательно данных пишите на: elomsyoutub@gmail.com</p>
          </section>
          
          <div className="pt-8 text-xs text-neutral-500 border-t border-white/10 mt-8">
            Текст является шаблоном, при необходимости уточните у юриста.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;