"use client";

import Link from "next/link";
import type { CollectionInfo } from "@/lib/data";
import { Diamond } from "lucide-react";

export function CollectionsContent({
  collections,
}: {
  collections: CollectionInfo[];
}) {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Diamond className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Collections
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Explore our curated collections of lab-grown diamond jewellery, each
            designed with a unique story and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${collection.gradient} group-hover:scale-105 transition-transform duration-300`}
              />
              <div className="relative z-10">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  {collection.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {collection.description}
                </p>
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
