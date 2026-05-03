type Page = "home" | "buksy" | "video" | "crypto" | "phone" | "extensions";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const categories = [
  {
    id: "buksy" as Page,
    emoji: "🖱️",
    title: "Заработок на буксах",
    desc: "Выполняйте простые задания: регистрации, клики, просмотры. Идеально для старта без вложений.",
    badge: "Без вложений",
    badgeColor: "bg-green-100 text-green-700",
    sites: 3,
  },
  {
    id: "video" as Page,
    emoji: "▶️",
    title: "Заработок на просмотрах",
    desc: "Смотрите короткие рекламные видео и получайте деньги. Можно совмещать с другими делами.",
    badge: "Легко",
    badgeColor: "bg-blue-100 text-blue-700",
    sites: 1,
  },
  {
    id: "crypto" as Page,
    emoji: "💎",
    title: "Заработок на крипте",
    desc: "Кранты, стейкинг, задания в мире криптовалют. Маленький вход, долгосрочный потенциал.",
    badge: "Перспективно",
    badgeColor: "bg-amber-100 text-amber-700",
    sites: 0,
  },
  {
    id: "phone" as Page,
    emoji: "📱",
    title: "Заработок на телефоне",
    desc: "Приложения, которые платят за активность, установку других приложений и простые задачи.",
    badge: "С телефона",
    badgeColor: "bg-purple-100 text-purple-700",
    sites: 1,
  },
  {
    id: "extensions" as Page,
    emoji: "🧩",
    title: "Заработок на расширениях",
    desc: "Установите расширение в браузер и зарабатывайте пассивно — просто пользуясь интернетом.",
    badge: "Пассивный",
    badgeColor: "bg-rose-100 text-rose-700",
    sites: 2,
  },
];

const tips = [
  { emoji: "⏱️", title: "Не ждите мгновенного результата", text: "Первые выплаты приходят через 1–2 недели после регистрации и набора минимальной суммы." },
  { emoji: "🔐", title: "Создайте отдельную почту", text: "Для регистраций на буксах лучше использовать новый email — меньше спама в основной почте." },
  { emoji: "📊", title: "Комбинируйте способы", text: "Используйте несколько платформ одновременно — это увеличивает общий доход." },
  { emoji: "💳", title: "Выводите вовремя", text: "Не копите большие суммы на сервисах — выводите по достижении минимальной суммы." },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-100 mb-12 px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full translate-x-16 -translate-y-16" />
        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-6 shadow-sm">
            <span>✅</span> Для новичков без опыта
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-4">
            Заработай первые деньги<br/>
            <span className="text-primary">в интернете</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Пошаговые инструкции по реальным способам заработка онлайн. Никакого обмана — только проверенные платформы с реальными выплатами.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("buksy")}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Начать с буксов →
            </button>
            <button
              onClick={() => onNavigate("extensions")}
              className="px-6 py-3 bg-white border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-all"
            >
              Пассивный заработок
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { num: "5+", label: "способов заработка" },
          { num: "6", label: "проверенных сервисов" },
          { num: "0₽", label: "стартовый капитал" },
          { num: "24/7", label: "доступность" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-border p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-primary">{stat.num}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Выберите способ заработка</h2>
        <p className="text-muted-foreground mb-6">Каждый раздел содержит подробное описание и ссылки на лучшие платформы</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className="card-hover bg-white rounded-2xl border border-border p-6 text-left shadow-sm group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{cat.emoji}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
              {cat.sites > 0 && (
                <div className="text-xs text-primary font-medium">
                  {cat.sites} сервис{cat.sites > 1 ? "а" : ""} →
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white rounded-3xl border border-border p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">💡 Советы новичку</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {tips.map((tip) => (
            <div key={tip.title} className="flex gap-4">
              <div className="text-2xl flex-shrink-0">{tip.emoji}</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
