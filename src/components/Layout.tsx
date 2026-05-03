import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "buksy" | "video" | "crypto" | "phone" | "extensions";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { id: Page; label: string; icon: string; emoji: string }[] = [
  { id: "home", label: "Главная", icon: "House", emoji: "🏠" },
  { id: "buksy", label: "Буксы", icon: "MousePointerClick", emoji: "🖱️" },
  { id: "video", label: "Просмотр видео", icon: "Play", emoji: "▶️" },
  { id: "crypto", label: "Крипта", icon: "Bitcoin", emoji: "💎" },
  { id: "phone", label: "На телефоне", icon: "Smartphone", emoji: "📱" },
  { id: "extensions", label: "Расширения", icon: "Puzzle", emoji: "🧩" },
];

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors"
          >
            <span className="text-2xl">💰</span>
            <span className="hidden sm:block">ЗаработокОнлайн</span>
            <span className="sm:hidden">ЗО</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-in">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                    currentPage === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="text-xl">💰</span>
              <span>ЗаработокОнлайн — для новичков в интернет-заработке</span>
            </div>
            <div className="flex gap-4">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Все ссылки являются реферальными. Ваш заработок зависит от активности и вложенного времени.
          </p>
        </div>
      </footer>
    </div>
  );
}
