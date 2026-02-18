import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна Михайлова",
    text: "Заказала розы и гортензии — всё пришло в идеальном состоянии! Упаковка продумана до мелочей. Уже второй сезон покупаю только здесь.",
    rating: 5,
    date: "12 февраля 2026",
  },
  {
    name: "Дмитрий Козлов",
    text: "Отличный магазин! Консультант помог подобрать растения для тенистого участка. Всё прижилось. Рекомендую!",
    rating: 5,
    date: "8 февраля 2026",
  },
  {
    name: "Елена Сорокина",
    text: "Покупала инструменты и удобрения. Качество на высоте, цены адекватные. Доставка по Москве на следующий день — супер!",
    rating: 4,
    date: "1 февраля 2026",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Отзывы покупателей</h2>
          <p className="text-muted-foreground">Нас рекомендуют более 50 000 садоводов по всей России</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border hover-lift"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < review.rating ? "text-amber-500 fill-amber-500" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
