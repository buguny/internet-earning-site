export default function VideoPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-4">
          ▶️ Просмотры видео
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Заработок на просмотрах видео</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Платформы, которые платят за просмотр коротких рекламных роликов. Смотрите видео в фоновом режиме и копите баланс для вывода.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 mb-10">
        <h3 className="font-bold text-blue-800 mb-3">📌 Как это работает?</h3>
        <p className="text-blue-900 text-sm leading-relaxed">
          Рекламодатели платят за каждый просмотр их видео. Вы — зритель, который получает часть этой оплаты. Не нужно ничего покупать или оценивать — просто смотреть. Некоторые сервисы идут ещё дальше и дают задания по видео.
        </p>
      </div>

      {/* LuckyWatch card */}
      <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mb-8">
        <div className="p-6 sm:p-8 border-b border-border">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🍀</div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black text-foreground">LuckyWatch</h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                    Оплата за видео
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">Смотри рекламу — получай деньги</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Сложность</div>
                <div className="text-sm font-semibold text-green-600">Очень легко</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Формат</div>
                <div className="text-sm font-semibold text-foreground">Видеореклама</div>
              </div>
            </div>
          </div>
          <p className="text-foreground mt-4 leading-relaxed">
            LuckyWatch — сервис для заработка на просмотре рекламных видеороликов. После регистрации вам открывается доступ к каталогу видео, за каждый просмотр начисляется оплата. Деньги накапливаются и выводятся по достижении минимальной суммы.
          </p>
        </div>

        <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-foreground mb-4">📋 Как начать:</h4>
            <div className="space-y-3">
              {[
                "Зарегистрируйтесь на сайте по ссылке ниже",
                "Подтвердите почту и войдите в аккаунт",
                "Откройте раздел с доступными видео",
                "Смотрите ролики — баланс пополняется автоматически",
                "Добавьте задания и рефералов для дополнительного дохода",
                "Выводите деньги при достижении минимального порога",
              ].map((text, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">✅ Что доступно:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Просмотр рекламных видео", "Накопительная система", "Реферальная программа", "Задания за активность", "Ежедневные бонусы"].map((task) => (
                <span key={task} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                  {task}
                </span>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800 font-medium">💡 Совет</p>
              <p className="text-xs text-blue-700 mt-1">Запускайте видео в отдельной вкладке, пока занимаетесь другими делами — доход идёт пассивно.</p>
            </div>

            <a
              href="https://luckywatch.pro/u/ozzta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full justify-center sm:w-auto"
            >
              Перейти на LuckyWatch →
            </a>
          </div>
        </div>
      </div>

      {/* Extra tips */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { emoji: "⏱️", title: "Сколько можно заработать?", text: "В среднем 50–300 рублей в месяц при ежедневном просмотре видео по 15–30 минут." },
          { emoji: "📅", title: "Как часто платят?", text: "Вывод доступен после накопления минимальной суммы. Обычно это от 50–100 рублей." },
          { emoji: "🔗", title: "Реферальная программа", text: "Приглашайте друзей — получайте процент от их заработка. Это лучший способ масштабировать доход." },
        ].map((tip) => (
          <div key={tip.title} className="bg-white rounded-2xl border border-border p-5 shadow-sm">
            <div className="text-3xl mb-3">{tip.emoji}</div>
            <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
