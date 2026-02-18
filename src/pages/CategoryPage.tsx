import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <span className="text-6xl mb-6 block">🔍</span>
          <h1 className="font-heading text-3xl font-bold mb-4">Категория не найдена</h1>
          <p className="text-muted-foreground mb-8">Попробуйте вернуться в каталог</p>
          <Link to="/#catalog">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться в каталог
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-24 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/#catalog" className="hover:text-foreground transition-colors">Каталог</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">{category.name}</span>
          </div>

          <div className={`rounded-2xl p-8 md:p-10 border ${category.color}`}>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{category.emoji}</span>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold">{category.name}</h1>
                <p className="opacity-70 mt-1">{category.count} сортов в наличии · {category.group}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden border hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center">
                  <span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {category.emoji}
                  </span>
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
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
