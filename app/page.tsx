import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { CategoryGrid } from "@/components/category-grid";
import { ShopByCategory } from "@/components/shop-by-category";
import { Bestsellers } from "@/components/bestsellers";
import { OurPromise } from "@/components/our-promise";
import { Collections } from "@/components/collections";
import { ShopByOccasion } from "@/components/shop-by-occasion";
import { ShopByStyle } from "@/components/shop-by-style";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <ShopByCategory />
        <Bestsellers />
        <OurPromise />
        <Collections />
        <ShopByOccasion />
        <ShopByStyle />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
