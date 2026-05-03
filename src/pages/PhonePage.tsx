export default function PhonePage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-sm text-purple-700 font-medium mb-4">
          📱 На телефоне
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Заработок на телефоне</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Смартфон — это не только развлечения, но и инструмент для заработка. Используйте свободное время в транспорте, очереди или дома.
        </p>
      </div>

      {/* AppStart */}
      <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mb-8">
        <div className="p-6 sm:p-8 border-b border-border">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🚀</div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black text-foreground">AppStart</h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                    Заработок на приложениях
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">Устанавливай приложения — получай деньги</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Платформа</div>
                <div className="text-sm font-semibold text-foreground">Android / iOS</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Сложность</div>
                <div className="text-sm font-semibold text-green-600">Очень легко</div>
              </div>
            </div>
          </div>
          <p className="text-foreground mt-4 leading-relaxed">
            AppStart — мобильная платформа, которая платит пользователям за установку и использование приложений. Рекламодатели платят за реальных активных пользователей своих приложений. Вы устанавливаете, запускаете несколько раз и получаете деньги.
          </p>
        </div>

        <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-foreground mb-4">📋 Как начать:</h4>
            <div className="space-y-3">
              {[
                "Найдите приложение AppStart в Google Play или App Store",
                "Зарегистрируйтесь через номер телефона или email",
                "Откройте список заданий — там предложения по установке приложений",
                "Установите нужное приложение и выполните условие (запуск, регистрация, действие)",
                "Получите вознаграждение на баланс AppStart",
                "Копите баланс и выводите удобным способом",
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
            <h4 className="font-bold text-foreground mb-4">✅ Типы заданий:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Установка приложений",
                "Регистрация в сервисах",
                "Тест-драйв игр",
                "Просмотр рекламы",
                "Заполнение анкет",
                "Ежедневный вход",
              ].map((task) => (
                <span key={task} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                  {task}
                </span>
              ))}
            </div>

            <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
              <p className="text-sm text-purple-800 font-medium">💡 Важно знать</p>
              <p className="text-xs text-purple-700 mt-1">
                Некоторые задания требуют держать приложение установленным несколько дней. Не удаляйте сразу — дождитесь начисления оплаты.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-sm text-green-800 font-medium">📊 Сколько можно заработать?</p>
              <p className="text-xs text-green-700 mt-1">
                За одно задание — от 5 до 200 рублей. При активном использовании 1–3 часа в день можно выходить на 1000–3000 рублей в месяц.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other phone methods */}
      <h2 className="text-xl font-bold mb-5">Другие способы заработка со смартфона</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          {
            emoji: "📊",
            title: "Опросы и анкеты",
            desc: "Приложения Toloka, Anketolog, Viewpoint — платят за заполнение анкет и выполнение исследований.",
          },
          {
            emoji: "🎮",
            title: "Мобильные игры с выводом",
            desc: "Некоторые казуальные игры позволяют зарабатывать реальные деньги или подарочные карты за игровые достижения.",
          },
          {
            emoji: "📸",
            title: "Продажа фото",
            desc: "Снимайте повседневные сцены и продавайте на стоках: Shutterstock, Adobe Stock, Dreamstime.",
          },
          {
            emoji: "🛒",
            title: "Кэшбэк-сервисы",
            desc: "Cashback за обычные покупки через Megabonus, LetyShops, Kopikot. Технически это экономия = заработок.",
          },
        ].map((item) => (
          <div key={item.title} className="card-hover bg-white rounded-2xl border border-border p-5 shadow-sm">
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6">
        <h3 className="font-bold text-purple-800 mb-2">🔑 Главный секрет</h3>
        <p className="text-purple-900 text-sm leading-relaxed">
          Мобильный заработок лучше всего работает как дополнение к основным методам. Используйте телефон во время поездок в транспорте, ожидания в очередях, перерывов на работе. Небольшие суммы со временем накапливаются в реальные деньги.
        </p>
      </div>
    </div>
  );
}
