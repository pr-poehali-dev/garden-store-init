import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/f9dd9e0c-26ed-478a-83f4-534e230ce23a/files/aead4760-e8f2-436c-85d5-de050d8bd76c.jpg"
          alt="Садовый магазин"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Icon name="Leaf" size={14} />
            Весенняя коллекция 2026
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Создайте сад
            <br />
            <span className="text-primary">вашей мечты</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Более 5 000 растений, профессиональные инструменты и экспертные
            консультации для вашего идеального сада.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Icon name="ShoppingBag" size={18} className="mr-2" />
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">5 000+</p>
              <p className="text-sm text-muted-foreground">видов растений</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">12 лет</p>
              <p className="text-sm text-muted-foreground">на рынке</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">50 000+</p>
              <p className="text-sm text-muted-foreground">довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
