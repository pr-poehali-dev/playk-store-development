import Icon from '@/components/ui/icon';

const posts = [
  {
    id: 1,
    title: 'Топ-10 гаджетов 2026 года',
    excerpt: 'Отбираем лучшие новинки технологий, которые перевернут твой мир. От умных домов до нейроинтерфейсов.',
    date: '5 апр 2026',
    emoji: '🚀',
    tag: 'Тренды',
    readTime: '5 мин',
  },
  {
    id: 2,
    title: 'Как выбрать наушники для работы',
    excerpt: 'Разбираем ключевые параметры: шумоподавление, время работы, микрофон и комфорт при длительном использовании.',
    date: '2 апр 2026',
    emoji: '🎵',
    tag: 'Советы',
    readTime: '7 мин',
  },
  {
    id: 3,
    title: 'VR: будущее уже здесь',
    excerpt: 'Обзор актуальных VR-гарнитур: сравниваем разрешение, вес, контроллеры и совместимость с играми.',
    date: '28 мар 2026',
    emoji: '🥽',
    tag: 'Технологии',
    readTime: '10 мин',
  },
  {
    id: 4,
    title: 'Механические клавиатуры: гайд для новичков',
    excerpt: 'Switcher, пинг, хотсвап и кастомизация — всё, что нужно знать перед первой покупкой механки.',
    date: '20 мар 2026',
    emoji: '⌨️',
    tag: 'Советы',
    readTime: '8 мин',
  },
  {
    id: 5,
    title: 'Умные часы vs фитнес-браслеты',
    excerpt: 'Нужны ли тебе смарт-часы или достаточно браслета? Сравниваем функциональность и цену.',
    date: '15 мар 2026',
    emoji: '⌚',
    tag: 'Сравнение',
    readTime: '6 мин',
  },
  {
    id: 6,
    title: 'Собери игровой ПК мечты',
    excerpt: 'Актуальные комплектующие для бюджетной и топовой сборки: что взять в 2026 году.',
    date: '8 мар 2026',
    emoji: '🖥️',
    tag: 'Гайд',
    readTime: '12 мин',
  },
];

const tagColors: Record<string, string> = {
  'Тренды': 'text-neon-purple',
  'Советы': 'text-neon-cyan',
  'Технологии': 'text-emerald-400',
  'Сравнение': 'text-yellow-400',
  'Гайд': 'text-orange-400',
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="mb-10">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Читай и узнавай</p>
        <h1 className="font-display text-5xl font-bold text-white">БЛОГ</h1>
      </div>

      {/* Featured */}
      <div className="glass-card neon-border rounded-3xl overflow-hidden mb-8 animate-fade-in group cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 h-48 md:h-auto flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.2), rgba(0,245,255,0.15))' }}>
            <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{featured.emoji}</span>
          </div>
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-body font-semibold ${tagColors[featured.tag] || 'text-muted-foreground'}`}>
                {featured.tag}
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-xs text-muted-foreground font-body">{featured.readTime} чтения</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
              {featured.title}
            </h2>
            <p className="font-body text-muted-foreground mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-body">{featured.date}</span>
              <button className="flex items-center gap-2 text-sm font-body font-medium text-white group-hover:neon-text-cyan transition-all">
                Читать
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((post, i) => (
          <div
            key={post.id}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:neon-border-cyan transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="h-36 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(179,71,255,0.1), rgba(0,245,255,0.1))' }}>
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-body font-semibold ${tagColors[post.tag] || 'text-muted-foreground'}`}>
                  {post.tag}
                </span>
                <span className="text-muted-foreground/30">·</span>
                <span className="text-xs text-muted-foreground font-body">{post.readTime} чтения</span>
              </div>
              <h3 className="font-display font-semibold text-white text-lg leading-snug mb-3">{post.title}</h3>
              <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
