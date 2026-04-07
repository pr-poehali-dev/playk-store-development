import { useState } from 'react';
import Icon from '@/components/ui/icon';

const allProducts = [
  { id: 1, name: 'Беспроводные наушники Pro', price: 12990, oldPrice: 17990, badge: 'ХИТ', emoji: '🎧', category: 'Аудио' },
  { id: 2, name: 'Умные часы Series X', price: 24990, oldPrice: null, badge: 'НОВИНКА', emoji: '⌚', category: 'Гаджеты' },
  { id: 3, name: 'Механическая клавиатура', price: 8490, oldPrice: 11000, badge: '-23%', emoji: '⌨️', category: 'Периферия' },
  { id: 4, name: 'Игровая мышь Ultra', price: 4990, oldPrice: null, badge: null, emoji: '🖱️', category: 'Периферия' },
  { id: 5, name: 'Портативная колонка', price: 6790, oldPrice: 8990, badge: 'СКИДКА', emoji: '🔊', category: 'Аудио' },
  { id: 6, name: 'VR Гарнитура', price: 39990, oldPrice: null, badge: 'НОВИНКА', emoji: '🥽', category: 'VR' },
  { id: 7, name: 'Игровой контроллер', price: 5490, oldPrice: null, badge: null, emoji: '🎮', category: 'Гаджеты' },
  { id: 8, name: 'Монитор 4K 144Hz', price: 54990, oldPrice: 64990, badge: '-15%', emoji: '🖥️', category: 'Периферия' },
  { id: 9, name: 'Bluetooth колонка Mini', price: 3290, oldPrice: null, badge: null, emoji: '📻', category: 'Аудио' },
  { id: 10, name: 'Фитнес-браслет', price: 7990, oldPrice: 9990, badge: 'ХИТ', emoji: '⌚', category: 'Гаджеты' },
  { id: 11, name: 'Веб-камера 4K', price: 11490, oldPrice: null, badge: 'НОВИНКА', emoji: '📷', category: 'Периферия' },
  { id: 12, name: 'Наушники-вкладыши TWS', price: 4490, oldPrice: 6000, badge: '-25%', emoji: '🎵', category: 'Аудио' },
];

const categories = ['Все', 'Аудио', 'Гаджеты', 'Периферия', 'VR'];

interface CatalogPageProps {
  onAddToCart: (product: { id: number; name: string; price: number; emoji: string }) => void;
}

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('default');
  const [search, setSearch] = useState('');

  const filtered = allProducts
    .filter(p => selectedCategory === 'Все' || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="mb-10">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Все товары</p>
        <h1 className="font-display text-5xl font-bold text-white">КАТАЛОГ</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full glass-card border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm font-body text-white placeholder-muted-foreground focus:outline-none focus:neon-border bg-transparent"
          />
        </div>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="glass-card border border-white/10 rounded-xl px-4 py-2.5 text-sm font-body text-white bg-transparent focus:outline-none cursor-pointer"
        >
          <option value="default" className="bg-card text-white">По умолчанию</option>
          <option value="price-asc" className="bg-card text-white">Цена: по возрастанию</option>
          <option value="price-desc" className="bg-card text-white">Цена: по убыванию</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'gradient-purple-cyan text-white'
                : 'glass-card text-muted-foreground hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground font-body mb-6">{filtered.length} товаров</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            className="glass-card rounded-2xl overflow-hidden group hover:neon-border transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="h-40 flex items-center justify-center relative"
              style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.1), rgba(0,245,255,0.1))' }}>
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
              {product.badge && (
                <span className="absolute top-2 left-2 gradient-purple-cyan text-white text-xs font-display font-bold px-2 py-0.5 rounded-md">
                  {product.badge}
                </span>
              )}
              <button className="absolute top-2 right-2 p-1.5 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-neon-pink">
                <Icon name="Heart" size={14} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground font-body mb-1">{product.category}</p>
              <h3 className="font-display font-semibold text-white text-base leading-tight mb-3">{product.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-white">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                  {product.oldPrice && (
                    <div className="text-xs text-muted-foreground line-through">
                      {product.oldPrice.toLocaleString('ru-RU')} ₽
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="gradient-purple-cyan text-white p-2 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <span className="text-6xl block mb-4">🔍</span>
          <p className="font-display text-xl text-white mb-2">Ничего не найдено</p>
          <p className="font-body text-muted-foreground text-sm">Попробуй изменить параметры поиска</p>
        </div>
      )}
    </div>
  );
}
