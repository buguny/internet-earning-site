const methods = [
  {
    emoji: "🚰",
    title: "Криптовалютные краны (faucets)",
    desc: "Сайты, которые раздают маленькие суммы крипты за выполнение простых задач: решение капчи, просмотр рекламы, ежедневный вход.",
    pros: ["Без вложений", "Доступно с телефона", "Множество вариантов"],
    cons: ["Маленькие суммы", "Частые капчи"],
  },
  {
    emoji: "💼",
    title: "Крипто-буксы и задания",
    desc: "Аналог обычных буксов, но вместо рублей платят Bitcoin, Ethereum, USDT и другими монетами.",
    pros: ["Оплата в крипте", "Широкий выбор монет", "Вывод на кошелёк"],
    cons: ["Нужен крипто-кошелёк", "Волатильность курса"],
  },
  {
    emoji: "🎮",
    title: "Play-to-Earn игры",
    desc: "Блокчейн-игры, в которых за активность начисляются токены. Некоторые можно продать на бирже.",
    pros: ["Интересно", "Активное сообщество", "Потенциально высокий доход"],
    cons: ["Часто нужны вложения", "Зависит от популярности"],
  },
  {
    emoji: "📈",
    title: "Обучение и аирдропы",
    desc: "Многие платформы платят в крипте за прохождение обучающих курсов (Learn-to-Earn). Coinbase, Binance Academy, Layer3.",
    pros: ["Бесплатно", "Полезные знания", "Реальные монеты"],
    cons: ["Ограниченные предложения", "Нужен верифицированный аккаунт"],
  },
];

const wallets = [
  { name: "Trust Wallet", desc: "Мобильный, поддерживает тысячи монет", emoji: "📱" },
  { name: "MetaMask", desc: "Лучший для Web3 и DeFi", emoji: "🦊" },
  { name: "Bybit / Binance", desc: "Биржи — удобно для вывода в рубли", emoji: "🏦" },
];

export default function CryptoPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-sm text-amber-700 font-medium mb-4">
          💎 Крипта
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Заработок на криптовалюте</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Криптовалюта — это не только инвестиции. Существует множество способов зарабатывать крипту без вложений, выполняя простые задания онлайн.
        </p>
      </div>

      {/* Warning */}
      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mb-10">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ Важно для новичков</h3>
        <p className="text-amber-900 text-sm leading-relaxed">
          Крипта имеет курсовую волатильность — заработанные монеты могут вырасти или упасть в цене. Для вывода нужен кошелёк (Trust Wallet, MetaMask) или аккаунт на бирже. Начните с бесплатных методов, чтобы понять механику без рисков.
        </p>
      </div>

      {/* Methods */}
      <h2 className="text-2xl font-bold mb-6">Способы заработка</h2>
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {methods.map((m) => (
          <div key={m.title} className="card-hover bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="text-4xl mb-4">{m.emoji}</div>
            <h3 className="font-bold text-lg text-foreground mb-2">{m.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {m.pros.map((p) => (
                  <span key={p} className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
                    ✓ {p}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {m.cons.map((c) => (
                  <span key={c} className="bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full border border-red-200">
                    − {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wallets */}
      <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-2">🔐 Где хранить заработанную крипту?</h2>
        <p className="text-muted-foreground text-sm mb-6">Перед тем как начать зарабатывать, заведите кошелёк для хранения монет:</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {wallets.map((w) => (
            <div key={w.name} className="bg-secondary rounded-xl p-4">
              <div className="text-3xl mb-2">{w.emoji}</div>
              <div className="font-semibold text-foreground">{w.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{w.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
        <h3 className="font-bold text-amber-800 mb-2">🚀 С чего начать?</h3>
        <ol className="space-y-2 text-sm text-amber-900">
          <li>1. Установите Trust Wallet или Metamask на телефон</li>
          <li>2. Создайте аккаунт на бирже (Bybit или Binance) — пройдите верификацию</li>
          <li>3. Зарегистрируйтесь на крипто-кранах: Cointiply, Freebitco.in</li>
          <li>4. Попробуйте Learn-to-Earn на Coinbase — там платят за знания</li>
          <li>5. Следите за аирдропами в Telegram-каналах</li>
        </ol>
      </div>
    </div>
  );
}
