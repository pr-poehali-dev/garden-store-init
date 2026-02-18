import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Садовая, 42" },
  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
  { icon: "Mail", label: "Email", value: "hello@zeleniydom.ru" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00 – 20:00" },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">
              Ответим на ваши вопросы и поможем подобрать идеальные растения для вашего сада
            </p>

            <div className="space-y-5">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              {["Instagram", "Send", "MessageCircle"].map((iconName) => (
                <Button
                  key={iconName}
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-primary/5 hover:border-primary/30"
                >
                  <Icon name={iconName} size={18} />
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 md:p-8 border">
            <h3 className="font-heading text-2xl font-bold mb-2">Запросить консультацию</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Оставьте заявку — перезвоним в течение 30 минут
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input placeholder="Телефон" type="tel" className="h-12" />
              </div>
              <Input placeholder="Email" type="email" className="h-12" />
              <Textarea placeholder="Опишите ваш запрос..." className="min-h-[120px] resize-none" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
