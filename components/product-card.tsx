import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
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
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-xs sm:text-sm">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button className="p-1 sm:p-1.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
            <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
          </button>
        </div>
      </div>
    </Link>
  );
}
