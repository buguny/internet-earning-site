const sites = [
  {
    id: "profitcentr",
    name: "ProfitCentr",
    emoji: "🏆",
    url: "https://profitcentr.com/?r=buguny",
    badge: "Топ-1 буксов",
    badgeColor: "bg-amber-100 text-amber-700",
    tagline: "Крупнейший русскоязычный букс",
    description:
      "ProfitCentr — один из самых популярных и надёжных буксов в Рунете. Работает с 2013 года, имеет сотни тысяч активных пользователей.",
    howTo: [
      { step: "1", text: "Зарегистрируйтесь по ссылке ниже (займёт 2 минуты)" },
      { step: "2", text: "Подтвердите email и войдите в личный кабинет" },
      { step: "3", text: "Перейдите в раздел «Задания» — там кликовые, регистрационные и другие задачи" },
      { step: "4", text: "Выполняйте задания и накапливайте рубли на счету" },
      { step: "5", text: "При достижении минимума — выводите на QIWI, WebMoney, Яндекс.Деньги" },
    ],
    tasks: ["Клики по ссылкам", "Просмотр сайтов", "Регистрации", "Просмотр видео", "Рефералы"],
    minPayout: "от 10 руб.",
    difficulty: "Очень легко",
  },
  {
    id: "ipweb",
    name: "IPweb",
    emoji: "🌐",
    url: "http://www.ipweb.ru/?Buguny",
    badge: "Авторитетный",
    badgeColor: "bg-blue-100 text-blue-700",
    tagline: "Заработок на сёрфинге и заданиях",
    description:
      "IPweb — стабильный букс, специализирующийся на сёрфинге сайтов, кликах и выполнении рекламных заданий. Отличается простым интерфейсом.",
    howTo: [
      { step: "1", text: "Зарегистрируйтесь на сайте по ссылке" },
      { step: "2", text: "Выберите раздел: сёрфинг сайтов, клики или задания" },
      { step: "3", text: "Сёрфинг: сайты открываются автоматически, вы получаете баллы за просмотры" },
      { step: "4", text: "Задания: регистрации и активности на сторонних сайтах — платят больше" },
      { step: "5", text: "Конвертируйте баллы в рубли и выводите на свой кошелёк" },
    ],
    tasks: ["Авто-сёрфинг сайтов", "Ручные клики", "Задания рекламодателей", "Реферальная программа"],
    minPayout: "от 15 руб.",
    difficulty: "Легко",
  },
  {
    id: "wmrfast",
    name: "WMRfast",
    emoji: "⚡",
    url: "https://wmrfast.com/?r=2104895",
    badge: "Быстрые выплаты",
    badgeColor: "bg-green-100 text-green-700",
    tagline: "Быстрый заработок и мгновенный вывод",
    description:
      "WMRfast — букс с акцентом на скорость: быстрые задания, мгновенные выплаты на WebMoney. Подходит тем, кто хочет видеть результат уже сегодня.",
    howTo: [
      { step: "1", text: "Создайте аккаунт — регистрация занимает 1 минуту" },
      { step: "2", text: "Выберите задание из каталога: клики, просмотры, регистрации" },
      { step: "3", text: "Выполните задание строго по инструкции (иначе не засчитают)" },
      { step: "4", text: "Получите оплату сразу после проверки задания" },
      { step: "5", text: "Выводите на WebMoney WMR — минимальная сумма небольшая" },
    ],
    tasks: ["Клики и просмотры", "Задания за регистрацию", "Активность в соцсетях", "Мини-игры"],
    minPayout: "от 1 WMR",
    difficulty: "Легко",
  },
];

export default function BuksyPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-sm text-amber-700 font-medium mb-4">
          🖱️ Буксы
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Заработок на буксах</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Буксы — это сервисы, где рекламодатели платят пользователям за выполнение простых задний: клики, просмотры, регистрации. Идеальный старт без вложений и специальных знаний.
        </p>
      </div>

      {/* What is bux */}
      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mb-10">
        <h3 className="font-bold text-amber-800 mb-3">📌 Как это работает?</h3>
        <p className="text-amber-900 text-sm leading-relaxed">
          Рекламодатели платят буксу деньги, чтобы люди посмотрели их сайт, зарегистрировались или нажали на ссылку. Букс распределяет часть этих денег между вами. Выполняете задание → получаете оплату. Всё честно.
        </p>
      </div>

      {/* Sites */}
      <div className="space-y-8">
        {sites.map((site) => (
          <div key={site.id} className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            {/* Site header */}
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
                <div className="flex gap-3 flex-wrap">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Вывод</div>
                    <div className="text-sm font-semibold text-foreground">{site.minPayout}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Сложность</div>
                    <div className="text-sm font-semibold text-green-600">{site.difficulty}</div>
                  </div>
                </div>
              </div>
              <p className="text-foreground mt-4 leading-relaxed">{site.description}</p>
            </div>

            <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
              {/* How to */}
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

              {/* Tasks */}
              <div>
                <h4 className="font-bold text-foreground mb-4">✅ Виды заданий:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {site.tasks.map((task) => (
                    <span key={task} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                      {task}
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

      {/* Bottom tip */}
      <div className="mt-10 bg-green-50 rounded-2xl border border-green-200 p-6">
        <h3 className="font-bold text-green-800 mb-2">💡 Совет для новичков</h3>
        <p className="text-green-900 text-sm leading-relaxed">
          Зарегистрируйтесь сразу на всех трёх сервисах — это займёт 10 минут. Потом выполняйте задания на каждом по 15–20 минут в день. Суммарный доход будет в 3 раза больше, чем с одного сайта.
        </p>
      </div>
    </div>
  );
}
