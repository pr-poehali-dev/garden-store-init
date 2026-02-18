import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import SubscribeSection from "@/components/SubscribeSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CatalogSection />
      <AboutSection />
      <ReviewsSection />
      <BlogSection />
      <SubscribeSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
