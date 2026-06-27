import Link from "next/link";
import { CalendarHeart } from "lucide-react";

const occasions = [
  {
    name: "Workwear Chic",
    description: "Polished, versatile jewellery to elevate your 9-to-5 look.",
    href: "/occasions/workwear",
    emoji: "💼",
  },
  {
    name: "Everyday Elegance",
    description: "Minimal designs that blend effortlessly with your daily style.",
    href: "/occasions/everyday",
    emoji: "✨",
  },
  {
    name: "Bridal Collections",
    description: "Ethereal lab-grown diamond jewellery for your big day.",
    href: "/occasions/bridal",
    emoji: "💍",
  },
  {
    name: "Festive Jewels",
    description: "Celebrate traditions with a modern diamond twist.",
    href: "/occasions/festive",
    emoji: "🪔",
  },
  {
    name: "Gifting with Love",
    description: "Meaningful lab-grown diamond gifts for every occasion.",
    href: "/occasions/gifting",
    emoji: "🎁",
  },
  {
    name: "Cocktail Glamour",
    description: "Statement diamond pieces to own every evening.",
    href: "/occasions/cocktail",
    emoji: "🥂",
  },
];

export function ShopByOccasion() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <CalendarHeart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Shop by Occasion
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            Explore lab-grown diamond jewellery for everyday and special moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.name}
              href={occasion.href}
              className="group border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">{occasion.emoji}</span>
              <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">
                {occasion.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                {occasion.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
