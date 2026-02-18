import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const posts = [
  {
    title: "Как подготовить сад к весне: 10 важных шагов",
    excerpt: "Пошаговый план работ, чтобы ваш сад встретил весну во всеоружии.",
    category: "Советы",
    date: "15 фев 2026",
    readTime: "5 мин",
  },
  {
    title: "Топ-7 неприхотливых растений для начинающих",
    excerpt: "Подборка растений, которые простят вам забытый полив и тень.",
    category: "Подборки",
    date: "10 фев 2026",
    readTime: "4 мин",
  },
  {
    title: "Органические удобрения: полный гид",
    excerpt: "Разбираемся, чем кормить растения без вреда для природы.",
    category: "Гид",
    date: "5 фев 2026",
    readTime: "7 мин",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Садовый блог</h2>
            <p className="text-muted-foreground">Полезные статьи от наших экспертов</p>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary/30 hover:bg-primary/5">
            Все статьи
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-background rounded-xl overflow-hidden border hover-lift cursor-pointer"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Icon name="BookOpen" size={40} className="text-primary/30" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs text-muted-foreground">· {post.readTime}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
            Все статьи
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
