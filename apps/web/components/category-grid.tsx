import Link from "next/link";
import {
  CircleDot,
  Gem,
  Hexagon,
  Crown,
  Heart,
  Star,
  Sparkles,
  Triangle,
} from "lucide-react";

const categories = [
  { name: "Rings", href: "/rings", icon: CircleDot },
  { name: "Earrings", href: "/earrings", icon: Sparkles },
  { name: "Pendants", href: "/pendants", icon: Gem },
  { name: "Bracelets", href: "/bracelets", icon: Hexagon },
  { name: "Solitaire", href: "/solitaire", icon: Crown },
  { name: "Bangles", href: "/bangles", icon: CircleDot },
  { name: "Mangalsutra", href: "/mangalsutras", icon: Heart },
  { name: "Necklaces", href: "/necklaces", icon: Star },
  { name: "Nosepins", href: "/nosepins", icon: Triangle },
  { name: "Men's", href: "/mens", icon: Hexagon },
];

export function CategoryGrid() {
  return (
    <section className="py-4 sm:py-6 md:py-8 border-b border-border/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Mobile: horizontal scroll | Tablet+: wrap grid */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center pb-2 md:pb-0 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-15 sm:min-w-18 md:min-w-0 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-center whitespace-nowrap">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
