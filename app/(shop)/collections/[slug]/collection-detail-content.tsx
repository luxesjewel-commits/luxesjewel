"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { CollectionInfo, Product } from "@/lib/data";

export function CollectionDetailContent({
  collection,
  products,
}: {
  collection: CollectionInfo;
  products: Product[];
}) {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <Link
          href="/collections"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          All Collections
        </Link>

        <div
          className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-10 bg-linear-to-br ${collection.gradient}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            {collection.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            {collection.longDescription}
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
            <p className="text-lg text-muted-foreground">
              Products coming soon to this collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
