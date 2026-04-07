import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/36483919-fbc7-4f0f-a70f-9a944afdb32e/files/d5420990-d41c-48c6-96c5-63d0455ceb52.jpg';

const products = [
  { id: 1, name: 'Беспроводные наушники Pro', price: 12990, oldPrice: 17990, badge: 'ХИТ', emoji: '🎧', category: 'Аудио' },
  { id: 2, name: 'Умные часы Series X', price: 24990, oldPrice: null, badge: 'НОВИНКА', emoji: '⌚', category: 'Гаджеты' },
  { id: 3, name: 'Механическая клавиатура', price: 8490, oldPrice: 11000, badge: '-23%', emoji: '⌨️', category: 'Периферия' },
  { id: 4, name: 'Игровая мышь Ultra', price: 4990, oldPrice: null, badge: null, emoji: '🖱️', category: 'Периферия' },
  { id: 5, name: 'Портативная колонка', price: 6790, oldPrice: 8990, badge: 'СКИДКА', emoji: '🔊', category: 'Аудио' },
  { id: 6, name: 'VR Гарнитура', price: 39990, oldPrice: null, badge: 'НОВИНКА', emoji: '🥽', category: 'VR' },
];

const blogPosts = [
  { id: 1, title: 'Топ-10 гаджетов 2026 года', date: '5 апр 2026', emoji: '🚀', tag: 'Тренды' },
  { id: 2, title: 'Как выбрать наушники для работы', date: '2 апр 2026', emoji: '🎵', tag: 'Советы' },
  { id: 3, title: 'VR: будущее уже здесь', date: '28 мар 2026', emoji: '🥽', tag: 'Технологии' },
];

interface HomePageProps {
  onAddToCart: (product: { id: number; name: string; price: number; emoji: string }) => void;
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ onAddToCart, setCurrentPage }: HomePageProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #b347ff, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #00f5ff, transparent)', animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">Новая коллекция 2026</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              TECH
              <br />
              <span className="gradient-text">БУДУЩЕГО</span>
              <br />
              СЕГОДНЯ
            </h1>

            <p className="font-body text-muted-foreground text-lg mb-8 max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Гаджеты, которые изменят твою жизнь. Только лучшие бренды, честные цены и быстрая доставка.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setCurrentPage('catalog')}
                className="gradient-purple-cyan text-white font-display font-semibold px-8 py-3.5 rounded-lg tracking-wide hover:opacity-90 transition-opacity animate-glow-pulse"
              >
                КАТАЛОГ
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="glass-card neon-border text-white font-display font-semibold px-8 py-3.5 rounded-lg tracking-wide hover:bg-white/10 transition-colors"
              >
                О НАС
              </button>
            </div>

            <div className="flex gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[['500+', 'Товаров'], ['50K+', 'Клиентов'], ['4.9★', 'Рейтинг']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold gradient-text">{val}</div>
                  <div className="font-body text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Подборка</p>
            <h2 className="font-display text-4xl font-bold text-white">ПОПУЛЯРНОЕ</h2>
          </div>
          <button
            onClick={() => setCurrentPage('catalog')}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-white transition-colors group"
          >
            Все товары
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden group hover:neon-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="h-44 flex items-center justify-center relative"
                style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.1), rgba(0,245,255,0.1))' }}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                {product.badge && (
                  <span className="absolute top-3 left-3 gradient-purple-cyan text-white text-xs font-display font-bold px-2.5 py-1 rounded-md">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 p-1.5 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-neon-pink">
                  <Icon name="Heart" size={16} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground font-body mb-1">{product.category}</p>
                <h3 className="font-display font-semibold text-white text-lg leading-tight mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-white">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="gradient-purple-cyan text-white p-2 rounded-lg hover:opacity-80 transition-opacity"
                  >
                    <Icon name="Plus" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mx-4 md:mx-8 rounded-3xl overflow-hidden mb-20 relative"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #0a1a2e 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20"
          style={{ background: 'radial-gradient(ellipse at right, #b347ff, transparent)' }} />
        <div className="relative z-10 p-10 md:p-16">
          <p className="font-body text-xs text-neon-cyan tracking-widest uppercase mb-3">Специальное предложение</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            СКИДКА 30%<br />
            <span className="gradient-text">НА ПЕРВЫЙ ЗАКАЗ</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-sm">
            Зарегистрируйтесь и получите персональный промокод на скидку для нового покупателя.
          </p>
          <button
            onClick={() => setCurrentPage('profile')}
            className="gradient-purple-cyan text-white font-display font-semibold px-8 py-3 rounded-lg tracking-wide hover:opacity-90 transition-opacity"
          >
            ПОЛУЧИТЬ СКИДКУ
          </button>
        </div>
      </section>

      {/* Blog */}
      <section className="py-10 container mx-auto px-4 mb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Читай</p>
            <h2 className="font-display text-4xl font-bold text-white">БЛОГ</h2>
          </div>
          <button
            onClick={() => setCurrentPage('blog')}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-white transition-colors group"
          >
            Все статьи
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <div
              key={post.id}
              className="glass-card rounded-2xl p-6 group hover:neon-border-cyan cursor-pointer transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl block mb-4">{post.emoji}</span>
              <span className="inline-block text-xs font-body neon-text-cyan mb-3">{post.tag}</span>
              <h3 className="font-display font-semibold text-white text-lg leading-snug mb-4 group-hover:gradient-text transition-all">
                {post.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-white/5 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="font-display text-2xl font-bold gradient-text mb-3">PLAYK</div>
          <p className="font-body text-muted-foreground text-sm mb-6">Технологии будущего — сегодня</p>
          <div className="flex justify-center gap-6">
            {['Главная', 'Каталог', 'Блог', 'О нас', 'Контакты'].map(item => (
              <button key={item} className="text-xs text-muted-foreground hover:text-white transition-colors font-body">
                {item}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 mt-6 font-body">© 2026 PLAYK. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
