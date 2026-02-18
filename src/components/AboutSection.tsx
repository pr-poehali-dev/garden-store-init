import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Truck",
    title: "Бережная доставка",
    desc: "Доставляем растения в специальной упаковке по всей России за 2–5 дней",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия качества",
    desc: "30 дней гарантии на все растения. Заменим, если что-то пойдёт не так",
  },
  {
    icon: "Users",
    title: "Экспертная команда",
    desc: "Агрономы и ландшафтные дизайнеры помогут с выбором и уходом",
  },
  {
    icon: "Leaf",
    title: "Эко-подход",
    desc: "Используем только органические удобрения и биоразлагаемую упаковку",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">О нас</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
              Выращиваем красоту
              <br />с 2014 года
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ЗелёныйДом — это команда увлечённых садоводов и профессиональных агрономов.
              Мы тщательно отбираем каждое растение и проверяем качество всех товаров,
              чтобы ваш сад радовал вас каждый день.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наш питомник расположен в Подмосковье, где мы выращиваем более 500 сортов
              растений, адаптированных к российскому климату.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 border hover-lift"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
