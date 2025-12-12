import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              Focus<span className="text-neutral-500">System</span>
            </Link>
            <p className="text-neutral-400 max-w-sm">
              Премиальные цифровые инструменты для организации жизни, финансов и привычек.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Меню</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/#products" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-white transition-colors">Как это работает</Link></li>
              <li><Link to="/partnership" className="hover:text-white transition-colors">Партнерство</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Конфиденциальность</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} FocusSystem. Все права защищены.
          </p>
          <p className="text-neutral-600 text-xs">
            Текст документов является шаблоном, при необходимости уточните у юриста.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;