"use client";

import { Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";

export function ReadyToShipContent({ products }: { products: Product[] }) {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready To Ship
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            These pieces are in stock and ready for immediate dispatch. Get your
            lab-grown diamond jewellery delivered in 2-3 business days.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
