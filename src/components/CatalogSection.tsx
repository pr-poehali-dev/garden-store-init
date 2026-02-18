import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const catalogGroups = [
  {
    name: "Все",
    icon: "LayoutGrid",
  },
  {
    name: "Цветы",
    icon: "Flower2",
  },
  {
    name: "Плодовые",
    icon: "TreeDeciduous",
  },
  {
    name: "Ягодные",
    icon: "Cherry",
  },
  {
    name: "Семена",
    icon: "Sprout",
  },
];

const categories = [
  { name: "Розы", group: "Цветы", emoji: "🌹", count: 48, color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "Лилии", group: "Цветы", emoji: "🌷", count: 32, color: "bg-pink-50 text-pink-700 border-pink-200" },
  { name: "Бегонии", group: "Цветы", emoji: "🌺", count: 24, color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
  { name: "Глоксинии", group: "Цветы", emoji: "💐", count: 18, color: "bg-purple-50 text-purple-700 border-purple-200" },
  { name: "Мелколуковичные", group: "Цветы", emoji: "🌸", count: 56, color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Пионы", group: "Цветы", emoji: "🪻", count: 36, color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Хосты", group: "Цветы", emoji: "🌿", count: 22, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "Семена", group: "Семена", emoji: "🌱", count: 120, color: "bg-lime-50 text-lime-700 border-lime-200" },
  { name: "Яблони", group: "Плодовые", emoji: "🍎", count: 42, color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Груши", group: "Плодовые", emoji: "🍐", count: 28, color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { name: "Виноград", group: "Плодовые", emoji: "🍇", count: 34, color: "bg-purple-50 text-purple-700 border-purple-200" },
  { name: "Вишня", group: "Плодовые", emoji: "🍒", count: 26, color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "Черешня", group: "Плодовые", emoji: "🍒", count: 20, color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Слива", group: "Плодовые", emoji: "🫐", count: 18, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "Клубника", group: "Ягодные", emoji: "🍓", count: 38, color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Смородина", group: "Ягодные", emoji: "🫐", count: 24, color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Жимолость", group: "Ягодные", emoji: "🫒", count: 16, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Малина", group: "Ягодные", emoji: "🍇", count: 30, color: "bg-pink-50 text-pink-700 border-pink-200" },
  { name: "Калина", group: "Ягодные", emoji: "🔴", count: 12, color: "bg-orange-50 text-orange-700 border-orange-200" },
];

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
            <div
              key={cat.name}
              className={`group relative rounded-xl border p-5 cursor-pointer hover-lift transition-all ${cat.color}`}
            >
              <span className="text-4xl mb-3 block">{cat.emoji}</span>
              <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
              <p className="text-xs opacity-70">{cat.count} сортов</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
            Перейти в полный каталог
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
