import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Icon name="TreePine" size={200} className="text-primary-foreground" />
          </div>
          <div className="relative z-10 max-w-lg mx-auto">
            <Icon name="Mail" size={32} className="text-primary-foreground/80 mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Садовые секреты
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Подпишитесь на рассылку и получайте советы по уходу за садом,
              новинки и эксклюзивные скидки.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-primary-foreground animate-fade-in">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">Спасибо! Вы подписаны на рассылку.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap h-12"
                >
                  Подписаться
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
