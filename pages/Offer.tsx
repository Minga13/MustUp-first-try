import React, { useEffect } from 'react';
import { LINKS } from '../constants';

const Offer: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505] text-neutral-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">Публичная оферта</h1>
        
        <div className="space-y-6 text-sm leading-relaxed glass p-8 rounded-3xl border border-white/5">
          <p>Настоящая оферта является официальным предложением (публичной офертой) Продавца заключить договор купли-продажи цифрового товара.</p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Предмет договора</h2>
            <p>Продавец обязуется передать в собственность Покупателя цифровой товар (шаблон Google Таблицы), а Покупатель обязуется принять и оплатить Товар.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Порядок оплаты и предоставления доступа</h2>
            <p>Доступ к Товару предоставляется путем отправки ссылки на электронную почту Покупателя сразу после 100% оплаты.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Возврат товара</h2>
            <p>Товары являются цифровыми воспроизводимыми объектами. Согласно законодательству, цифровые товары надлежащего качества возврату и обмену не подлежат после предоставления доступа к ним.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Права и ответственность</h2>
            <p>Запрещено распространение, перепродажа или публикация Товара в открытом доступе. Лицензия предоставляется для индивидуального использования.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Реквизиты</h2>
            <p>Email: {LINKS.CONTACT_EMAIL}</p>
          </section>
          
          <div className="pt-8 text-xs text-neutral-500 border-t border-white/10 mt-8">
            Текст является шаблоном, при необходимости уточните у юриста.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;