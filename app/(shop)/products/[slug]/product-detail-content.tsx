"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { formatPrice, type Product } from "@/lib/data";

export function ProductDetailContent({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  return (
    <div className="py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <Link
          href={`/${product.category}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="relative aspect-square bg-secondary/30 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col">
            {product.badge && (
              <Badge variant="secondary" className="w-fit mb-3">
                {product.badge}
              </Badge>
            )}

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl sm:text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="border border-border rounded-lg p-4 mb-6 space-y-3">
              <h3 className="font-semibold text-sm">Product Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Metal:</span>
                  <p className="font-medium">{product.metal}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>
                  <p className="font-medium">{product.weight}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">Diamond:</span>
                  <p className="font-medium">{product.diamond}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-secondary/50">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-medium">Certified</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-secondary/50">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-secondary/50">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-medium">15 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
