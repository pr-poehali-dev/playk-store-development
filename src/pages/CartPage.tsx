import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

interface CartPageProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onQtyChange: (id: number, qty: number) => void;
  setCurrentPage: (page: string) => void;
}

export default function CartPage({ items, onRemove, onQtyChange, setCurrentPage }: CartPageProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20 container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto py-20">
          <span className="text-8xl block mb-6">🛒</span>
          <h1 className="font-display text-3xl font-bold text-white mb-3">КОРЗИНА ПУСТА</h1>
          <p className="font-body text-muted-foreground mb-8">Добавь товары из каталога, чтобы продолжить</p>
          <button
            onClick={() => setCurrentPage('catalog')}
            className="gradient-purple-cyan text-white font-display font-semibold px-8 py-3 rounded-lg tracking-wide hover:opacity-90 transition-opacity"
          >
            В КАТАЛОГ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="mb-10">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Твои выборы</p>
        <h1 className="font-display text-5xl font-bold text-white">КОРЗИНА</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="glass-card rounded-2xl p-4 flex items-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.2), rgba(0,245,255,0.2))' }}>
                <span className="text-3xl">{item.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-white text-base truncate">{item.name}</h3>
                <p className="font-display text-lg font-bold gradient-text">{item.price.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => onQtyChange(item.id, item.qty - 1)}
                  className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-white transition-colors border border-white/10"
                >
                  <Icon name="Minus" size={14} />
                </button>
                <span className="font-display text-white font-bold w-6 text-center">{item.qty}</span>
                <button
                  onClick={() => onQtyChange(item.id, item.qty + 1)}
                  className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-white transition-colors border border-white/10"
                >
                  <Icon name="Plus" size={14} />
                </button>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="p-2 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
              >
                <Icon name="Trash2" size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 h-fit neon-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-xl font-bold text-white mb-6">ИТОГО</h2>
          <div className="space-y-3 mb-6">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground truncate mr-2">{item.name} × {item.qty}</span>
                <span className="text-white flex-shrink-0">{(item.price * item.qty).toLocaleString('ru-RU')} ₽</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-display font-bold text-white">ИТОГО</span>
              <span className="font-display text-2xl font-bold gradient-text">{total.toLocaleString('ru-RU')} ₽</span>
            </div>
          </div>
          <button className="w-full gradient-purple-cyan text-white font-display font-bold py-3.5 rounded-xl tracking-wide hover:opacity-90 transition-opacity animate-glow-pulse">
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button
            onClick={() => setCurrentPage('catalog')}
            className="w-full mt-3 text-sm font-body text-muted-foreground hover:text-white transition-colors py-2"
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
}
