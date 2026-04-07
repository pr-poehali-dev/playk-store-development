import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  cartCount: number;
}

export default function Navbar({ currentPage, setCurrentPage, cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'blog', label: 'Блог' },
    { id: 'about', label: 'О нас' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage('home')}
          className="font-display text-2xl font-bold gradient-text tracking-wider"
        >
          PLAYK
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`font-body text-sm font-medium transition-all duration-200 relative group ${
                currentPage === item.id
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 gradient-purple-cyan transition-all duration-300 ${
                currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage('cart')}
            className="relative p-2 text-muted-foreground hover:text-white transition-colors"
          >
            <Icon name="ShoppingCart" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 gradient-purple-cyan rounded-full text-xs text-white font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className="p-2 text-muted-foreground hover:text-white transition-colors"
          >
            <Icon name="User" size={20} />
          </button>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card border-t border-white/5 px-4 py-4 animate-fade-in">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setMenuOpen(false); }}
              className={`block w-full text-left py-3 font-body text-sm font-medium transition-colors ${
                currentPage === item.id ? 'text-white' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
