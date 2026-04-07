import { useState } from 'react';
import Icon from '@/components/ui/icon';

const orders = [
  { id: '#PL-2891', date: '3 апр 2026', status: 'Доставлен', total: 17980, items: ['🎧', '⌚'] },
  { id: '#PL-2756', date: '25 мар 2026', status: 'В пути', total: 8490, items: ['⌨️'] },
  { id: '#PL-2621', date: '10 мар 2026', status: 'Доставлен', total: 44980, items: ['🥽', '🖱️'] },
  { id: '#PL-2500', date: '28 фев 2026', status: 'Доставлен', total: 6790, items: ['🔊'] },
];

const favorites = [
  { id: 1, name: 'Монитор 4K 144Hz', price: 54990, emoji: '🖥️' },
  { id: 2, name: 'VR Гарнитура', price: 39990, emoji: '🥽' },
  { id: 3, name: 'Умные часы Series X', price: 24990, emoji: '⌚' },
];

const statusColor: Record<string, string> = {
  'Доставлен': 'text-emerald-400 bg-emerald-400/10',
  'В пути': 'text-neon-cyan bg-cyan-400/10',
  'Обрабатывается': 'text-yellow-400 bg-yellow-400/10',
};

interface ProfilePageProps {
  onAddToCart: (product: { id: number; name: string; price: number; emoji: string }) => void;
}

export default function ProfilePage({ onAddToCart }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'orders' | 'favorites'>('orders');

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="glass-card neon-border rounded-3xl p-6 md:p-8 mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl gradient-purple-cyan flex items-center justify-center text-3xl animate-glow-pulse">
                👤
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-bold text-white mb-1">АЛЕКСЕЙ К.</h1>
              <p className="font-body text-muted-foreground text-sm mb-3">alex@example.com</p>
              <div className="flex flex-wrap gap-3">
                {[['4', 'Заказа'], ['3', 'В избранном'], ['Gold', 'Статус']].map(([val, label]) => (
                  <div key={label} className="glass-card rounded-xl px-4 py-2 border border-white/10">
                    <div className="font-display font-bold text-white text-sm">{val}</div>
                    <div className="font-body text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="glass-card border border-white/10 rounded-xl px-4 py-2 text-sm font-body text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
              <Icon name="Settings" size={14} />
              Настройки
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'orders' as const, label: 'История заказов', icon: 'Package' },
            { id: 'favorites' as const, label: 'Избранное', icon: 'Heart' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'gradient-purple-cyan text-white'
                  : 'glass-card text-muted-foreground hover:text-white border border-white/10'
              }`}
            >
              <Icon name={tab.icon} size={15} fallback="CircleAlert" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-4 animate-fade-in">
            {orders.map(order => (
              <div key={order.id} className="glass-card rounded-2xl p-5 border border-white/5 hover:neon-border transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {order.items.map((emoji, i) => (
                        <span key={i} className="text-2xl -ml-1 first:ml-0">{emoji}</span>
                      ))}
                    </div>
                    <div>
                      <div className="font-display font-bold text-white">{order.id}</div>
                      <div className="font-body text-xs text-muted-foreground">{order.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-body px-3 py-1 rounded-full ${statusColor[order.status] || 'text-muted-foreground bg-white/5'}`}>
                      {order.status}
                    </span>
                    <span className="font-display font-bold text-white">{order.total.toLocaleString('ru-RU')} ₽</span>
                    <button className="text-xs text-muted-foreground hover:text-white transition-colors font-body flex items-center gap-1">
                      Подробнее
                      <Icon name="ChevronRight" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Favorites */}
        {activeTab === 'favorites' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
            {favorites.map(item => (
              <div key={item.id} className="glass-card rounded-2xl p-5 border border-white/5 hover:neon-border-cyan transition-all duration-300 group">
                <div className="h-24 flex items-center justify-center rounded-xl mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.1), rgba(0,245,255,0.1))' }}>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-1">{item.name}</h3>
                <div className="font-display font-bold gradient-text text-lg mb-3">{item.price.toLocaleString('ru-RU')} ₽</div>
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full gradient-purple-cyan text-white text-sm font-display font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  В КОРЗИНУ
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
