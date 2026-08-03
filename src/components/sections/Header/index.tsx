import { useState } from "react";
import { Container } from "@/components/globals/Container";
import { Menu, X, Sun, Moon } from "lucide-react";
import type { NavItem } from "@/interfaces/NavItem";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={isDark ? "/assets/images/logo.png" : "/assets/images/logo-black.png"}
              alt="Mercapeças Casa do Mercedes"
              className={cn("h-18 w-auto object-contain")}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('.svg')) {
                  target.src = '/assets/images/logo-mercapecas.svg';
                }
              }}
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              aria-label="Alternar modo escuro/claro"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              to="/#contato"
              className="rounded-sm bg-[#E51515] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#c41212]"
            >
              Fale Conosco
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-96 border-b border-border" : "max-h-0"
        )}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-[#E51515] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Fale Conosco
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
