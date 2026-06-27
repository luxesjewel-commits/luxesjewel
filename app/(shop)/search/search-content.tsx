"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export function SearchContent() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Search
        </h1>

        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for rings, earrings, pendants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-secondary/50"
            autoFocus
          />
        </div>

        {query.trim() && (
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
            &ldquo;{query}&rdquo;
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : query.trim() ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found. Try a different search term.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Start typing to search our collection of lab-grown diamond
              jewellery.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
