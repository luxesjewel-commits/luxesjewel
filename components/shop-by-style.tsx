import Link from "next/link";
import { Gem } from "lucide-react";

const styles = [
  { name: "Padma Cut Diamond", href: "/styles/padma-cut" },
  { name: "Gifts Under ₹30K", href: "/styles/gifts-under-30k" },
  { name: "Stackable Rings", href: "/styles/stackable" },
  { name: "Men's Jewellery", href: "/styles/mens" },
  { name: "Engagement Rings", href: "/styles/engagement" },
  { name: "9 Karat Gold", href: "/styles/9kt-gold" },
  { name: "The Solitaire Selection", href: "/styles/solitaire" },
  { name: "Vanki Rings", href: "/styles/vanki" },
];

export function ShopByStyle() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Gem className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Shop by Style
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            Explore styles that celebrate every occasion, mood, and expression.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {styles.map((style) => (
            <Link
              key={style.name}
              href={style.href}
              className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {style.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
