import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { categories, catalogGroups } from "@/data/catalog";

const CatalogSection = () => {
  const [activeGroup, setActiveGroup] = useState("Все");

  const filtered = activeGroup === "Все"
    ? categories
    : categories.filter((c) => c.group === activeGroup);

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Более 600 сортов растений для вашего сада и огорода
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {catalogGroups.map((group) => (
            <Button
              key={group.name}
              variant={activeGroup === group.name ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveGroup(group.name)}
              className={activeGroup === group.name
                ? "bg-primary text-primary-foreground"
                : "border-border hover:bg-secondary"
              }
            >
              <Icon name={group.icon} size={16} className="mr-1.5" />
              {group.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((cat) => (
            <Link
              key={cat.slug}
              to={`/catalog/${cat.slug}`}
              className={`group relative rounded-xl border p-5 cursor-pointer hover-lift transition-all ${cat.color}`}
            >
              <span className="text-4xl mb-3 block">{cat.emoji}</span>
              <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
              <p className="text-xs opacity-70">{cat.products.length} товаров</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRight" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
