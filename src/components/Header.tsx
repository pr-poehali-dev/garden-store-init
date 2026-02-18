import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Каталог", href: "#catalog" },
  { label: "О нас", href: "#about" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Icon name="Sprout" size={20} className="text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight">Изумрудный уголок</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
          </Button>
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={16} className="mr-2" />
            Консультация
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;