import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (800) 555-35-35', sub: 'Бесплатно по России' },
  { icon: 'Mail', label: 'Email', value: 'hello@playk.ru', sub: 'Ответим за 1 час' },
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Технологий, 1', sub: 'Пн–Вс, 10:00–20:00' },
  { icon: 'MessageCircle', label: 'Telegram', value: '@playk_support', sub: 'Быстрые ответы' },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="mb-10 animate-fade-in">
        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Мы всегда на связи</p>
        <h1 className="font-display text-5xl font-bold text-white">КОНТАКТЫ</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
        {/* Info */}
        <div className="space-y-4 animate-fade-in">
          {contacts.map((c, i) => (
            <div
              key={c.label}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:neon-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 gradient-purple-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={c.icon} size={20} fallback="CircleAlert" className="text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground mb-0.5">{c.label}</p>
                <p className="font-display font-semibold text-white">{c.value}</p>
                <p className="font-body text-xs text-muted-foreground">{c.sub}</p>
              </div>
            </div>
          ))}

          <div className="glass-card rounded-2xl p-5 neon-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-display font-bold text-white mb-1">Часы работы</h3>
            <p className="font-body text-muted-foreground text-sm mb-3">Поддержка работает без выходных</p>
            {[
              ['Пн – Пт', '10:00 – 20:00'],
              ['Сб – Вс', '11:00 – 18:00'],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between text-sm font-body py-2 border-b border-white/5 last:border-0">
                <span className="text-muted-foreground">{day}</span>
                <span className="text-white">{hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="glass-card neon-border rounded-3xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {sent ? (
            <div className="text-center py-10">
              <span className="text-7xl block mb-6">✅</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">СООБЩЕНИЕ ОТПРАВЛЕНО</h3>
              <p className="font-body text-muted-foreground mb-6">Мы свяжемся с тобой в ближайшее время</p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-body text-muted-foreground hover:text-white transition-colors"
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold text-white mb-6">НАПИСАТЬ НАМ</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Алексей"
                    className="w-full glass-card border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-muted-foreground focus:outline-none focus:neon-border bg-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full glass-card border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-muted-foreground focus:outline-none focus:neon-border bg-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide block mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Ваш вопрос или сообщение..."
                    className="w-full glass-card border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-muted-foreground focus:outline-none focus:neon-border bg-transparent resize-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-purple-cyan text-white font-display font-bold py-3.5 rounded-xl tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  ОТПРАВИТЬ
                  <Icon name="Send" size={16} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
