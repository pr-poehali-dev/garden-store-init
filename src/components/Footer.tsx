import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Sprout" size={16} className="text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-background">ЗелёныйДом</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Всё для создания и ухода за вашим идеальным садом с 2014 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Растения</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Инструменты</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Удобрения</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Семена</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#about" className="hover:text-background transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Доставка</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Блог</a></li>
              <li><a href="#contacts" className="hover:text-background transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>+7 (495) 123-45-67</li>
              <li>hello@zeleniydom.ru</li>
              <li>Пн–Сб: 9:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">© 2026 ЗелёныйДом. Все права защищены.</p>
          <div className="flex gap-4 text-sm text-background/40">
            <a href="#" className="hover:text-background/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-background/70 transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
