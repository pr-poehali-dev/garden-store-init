import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Растения", "Инструменты", "Удобрения", "Декор", "Семена"];

const products = [
  {
    id: 1,
    name: "Роза кустовая «Эдем»",
    category: "Растения",
    price: 1290,
    oldPrice: 1590,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    badge: "Хит",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Секатор профессиональный",
    category: "Инструменты",
    price: 2450,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Биогумус универсальный 5л",
    category: "Удобрения",
    price: 690,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    badge: "Новинка",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Кашпо керамическое «Терра»",
    category: "Декор",
    price: 1890,
    oldPrice: 2300,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Лаванда горная саженец",
    category: "Растения",
    price: 590,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    badge: "Скоро закончится",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Набор семян «Пряные травы»",
    category: "Семена",
    price: 450,
    image: "https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/9ddbd3d4-89bd-4c87-b58c-9592edf5f7ed.jpg",
    rating: 4.5,
  },
];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Всё необходимое для создания и ухода за вашим садом
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border-border hover:bg-secondary"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden border hover-lift cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                >
                  <Icon name="Heart" size={16} />
                </Button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Icon name="Star" size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">{product.category}</span>
                </div>
                <h3 className="font-medium mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">{product.price} ₽</span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice} ₽
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="ShoppingCart" size={14} className="mr-1" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
            Показать весь каталог
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
