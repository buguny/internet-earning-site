const sites = [
  {
    id: "serfearner",
    name: "SerfEarner",
    emoji: "🌍",
    url: "https://doxod24.net/22288",
    badge: "Пассивный заработок",
    badgeColor: "bg-rose-100 text-rose-700",
    tagline: "Зарабатывай, просто пользуясь интернетом",
    description:
      "SerfEarner — расширение для браузера, которое работает в фоновом режиме. Пока вы просматриваете сайты в обычном режиме, расширение показывает вам рекламу и начисляет баллы, которые конвертируются в деньги.",
    howTo: [
      { step: "1", text: "Зарегистрируйтесь на сайте по ссылке ниже" },
      { step: "2", text: "Скачайте расширение для Chrome или Firefox" },
      { step: "3", text: "Установите расширение — оно появится в браузере" },
      { step: "4", text: "Просто пользуйтесь интернетом как обычно" },
      { step: "5", text: "Баллы накапливаются автоматически за каждый час онлайн" },
      { step: "6", text: "Выводите деньги по достижении минимальной суммы" },
    ],
    features: ["Полностью пассивный", "Не замедляет браузер", "Ежедневные бонусы", "Реферальная программа"],
  },
  {
    id: "surfe",
    name: "Surfe.be",
    emoji: "🏄",
    url: "https://surfe.be/ext/246037",
    badge: "Топ расширений",
    badgeColor: "bg-teal-100 text-teal-700",
    tagline: "Зарабатывай на сёрфинге — не по волнам, по интернету",
    description:
      "Surfe.be — международная платформа с расширением для браузера. Показывает ненавязчивую рекламную полосу в нижней части экрана, пока вы работаете. За каждую показанную рекламу начисляется оплата.",
    howTo: [
      { step: "1", text: "Перейдите на сайт по ссылке и создайте аккаунт" },
      { step: "2", text: "Нажмите «Установить расширение» для Chrome/Firefox/Edge" },
      { step: "3", text: "После установки внизу браузера появится тонкая рекламная полоса" },
      { step: "4", text: "Работайте, смотрите видео, читайте — расширение работает само" },
      { step: "5", text: "В личном кабинете отслеживайте накопленный баланс" },
      { step: "6", text: "Приглашайте друзей — получайте % от их заработка" },
    ],
    features: ["Международный сервис", "Стабильные выплаты", "Мультибраузерность", "2-уровневые рефералы", "Вывод на PayPal/карту"],
  },
];

export default function ExtensionsPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 text-sm text-rose-700 font-medium mb-4">
          🧩 Расширения
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Заработок на расширениях браузера</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Самый пассивный способ заработка: установил расширение один раз — и оно приносит деньги, пока вы просто сидите в интернете.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6 mb-10">
        <h3 className="font-bold text-rose-800 mb-3">📌 Как это работает?</h3>
        <p className="text-rose-900 text-sm leading-relaxed">
          Расширение встраивается в браузер и показывает вам рекламу в фоновом режиме или в виде полосы внизу экрана. Рекламодатели платят за каждый показ, вы получаете часть этой суммы. Никаких дополнительных действий — просто пользуйтесь интернетом как обычно.
        </p>
      </div>

      {/* Sites */}
      <div className="space-y-8">
        {sites.map((site) => (
          <div key={site.id} className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-border">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{site.emoji}</div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl font-black text-foreground">{site.name}</h2>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${site.badgeColor}`}>
                        {site.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{site.tagline}</p>
                  </div>
                </div>
              </div>
              <p className="text-foreground mt-4 leading-relaxed">{site.description}</p>
            </div>

            <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-4">📋 Как начать:</h4>
                <div className="space-y-3">
                  {site.howTo.map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-4">✅ Особенности:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {site.features.map((f) => (
                    <span key={f} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full justify-center sm:w-auto"
                >
                  Перейти на {site.name} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-10 bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6">⚖️ Что лучше установить?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left pb-3 font-semibold text-muted-foreground">Параметр</th>
                <th className="text-left pb-3 font-semibold text-foreground">SerfEarner</th>
                <th className="text-left pb-3 font-semibold text-foreground">Surfe.be</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {[
                ["Тип", "Фоновая реклама", "Полоса внизу"],
                ["Реферальная программа", "Есть", "2 уровня"],
                ["Минимальный вывод", "Небольшой", "Небольшой"],
                ["Международность", "Рунет", "Весь мир"],
              ].map(([param, s1, s2]) => (
                <tr key={param} className="border-b border-border/50">
                  <td className="py-3 text-muted-foreground">{param}</td>
                  <td className="py-3 text-foreground font-medium">{s1}</td>
                  <td className="py-3 text-foreground font-medium">{s2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4 bg-green-50 rounded-xl p-3 border border-green-200 text-green-800">
          💡 Лучший вариант — установить оба расширения одновременно. Они не конфликтуют, а доход суммируется.
        </p>
      </div>
    </div>
  );
}
