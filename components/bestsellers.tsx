import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { products, formatPrice } from "@/lib/data";

const bestsellers = products.slice(0, 8);
const tabs = ["All", "Rings", "Earrings", "Pendants", "Bracelets"];

export function Bestsellers() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Our Bestsellers
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-4">
            Explore best-selling lab-grown diamond jewellery, loved for quality,
            craftsmanship, and timeless elegance.
          </p>
        </div>

        <div className="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide px-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-foreground hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.name}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-lg sm:rounded-xl overflow-hidden border border-border/50 hover:shadow-md transition-all"
            >
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.badge && (
                  <Badge
                    className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs"
                    variant="secondary"
                  >
                    {product.badge}
                  </Badge>
                )}
                <button className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-2.5 sm:p-3 md:p-4">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1 capitalize">
                  {product.category}
                </p>
                <h3 className="text-xs sm:text-sm font-medium line-clamp-2 mb-1.5 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm">
                    {formatPrice(product.price)}
                  </span>
                  <button className="p-1 sm:p-1.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/bestsellers"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:underline"
          >
            View All Bestsellers →
          </Link>
        </div>
      </div>
    </section>
  );
}
