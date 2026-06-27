"use client";

import { ProductCard } from "@/components/product-card";
import type { CategoryInfo, Product } from "@/lib/data";

export function CategoryContent({
  category,
  products,
}: {
  category: CategoryInfo;
  products: Product[];
}) {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            {category.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            {category.description}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-2">
              No products available yet
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for our latest {category.name.toLowerCase()}{" "}
              collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
