import Icon from '@/components/ui/icon';

const values = [
  { emoji: '⚡', title: 'Скорость', desc: 'Доставка за 1–3 дня по всей России' },
  { emoji: '🛡️', title: 'Гарантия', desc: '2 года официальной гарантии на все товары' },
  { emoji: '💎', title: 'Качество', desc: 'Только сертифицированные оригинальные бренды' },
  { emoji: '🎧', title: 'Поддержка', desc: 'Онлайн-помощь 24/7 по любым вопросам' },
];

const team = [
  { name: 'Максим Волков', role: 'Основатель', emoji: '👨‍💻' },
  { name: 'Алина Соколова', role: 'Директор по продукту', emoji: '👩‍🎨' },
  { name: 'Денис Чернов', role: 'Технический директор', emoji: '👨‍🔬' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 animate-fade-in">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Кто мы</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          О <span className="gradient-text">PLAYK</span>
        </h1>
        <p className="font-body text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Мы — команда технофанатов, которые убеждены: лучшие гаджеты должны быть доступны каждому.
          С 2020 года помогаем людям найти идеальные устройства и получить удовольствие от технологий.
        </p>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['2020', 'Год основания'],
            ['50K+', 'Довольных клиентов'],
            ['500+', 'Товаров в каталоге'],
            ['4.9★', 'Средний рейтинг'],
          ].map(([val, label], i) => (
            <div
              key={label}
              className="glass-card neon-border rounded-2xl p-6 text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-display text-4xl font-bold gradient-text mb-2">{val}</div>
              <div className="font-body text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 mb-20">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Принципы</p>
        <h2 className="font-display text-4xl font-bold text-white mb-8">НАШИ ЦЕННОСТИ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass-card rounded-2xl p-6 hover:neon-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl block mb-4">{v.emoji}</span>
              <h3 className="font-display font-bold text-white text-xl mb-2">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 mb-20">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Люди</p>
        <h2 className="font-display text-4xl font-bold text-white mb-8">НАША КОМАНДА</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="glass-card rounded-2xl p-6 text-center neon-border-cyan hover:neon-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-purple-cyan flex items-center justify-center text-3xl mx-auto mb-4">
                {member.emoji}
              </div>
              <h3 className="font-display font-bold text-white mb-1">{member.name}</h3>
              <p className="font-body text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 md:mx-8 glass-card neon-border rounded-3xl p-10 md:p-16 text-center animate-fade-in">
        <span className="text-6xl block mb-6">🚀</span>
        <h2 className="font-display text-4xl font-bold text-white mb-4">ГОТОВ К ПОКУПКАМ?</h2>
        <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
          Более 500 товаров, честные цены и быстрая доставка — всё в одном месте
        </p>
        <button className="gradient-purple-cyan text-white font-display font-bold px-10 py-4 rounded-xl tracking-wide hover:opacity-90 transition-opacity text-lg animate-glow-pulse">
          ПЕРЕЙТИ В КАТАЛОГ
        </button>
      </section>
    </div>
  );
}
