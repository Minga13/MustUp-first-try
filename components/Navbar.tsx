import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Продукты', path: '/#products' },
    { name: 'Как это работает', path: '/#how-it-works' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/80' : 'bg-black/40'}`}>
          <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            Focus<span className="text-neutral-400">System</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path.startsWith('/#') ? link.path : `#${link.path}`} 
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link to="/partnership" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Партнёрство
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 p-6 md:hidden">
          <div className="glass rounded-2xl p-6 flex flex-col space-y-4 bg-black/90">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path.startsWith('/#') ? link.path : `#${link.path}`}
                className="text-lg font-medium text-neutral-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <Link to="/partnership" className="text-lg font-medium text-blue-400">
              Партнёрство
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;