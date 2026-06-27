"use client";

import Link from "next/link";
import { CalendarHeart } from "lucide-react";
import type { OccasionInfo } from "@/lib/data";

export function OccasionsContent({
  occasions,
}: {
  occasions: OccasionInfo[];
}) {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <CalendarHeart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Shop by Occasion
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Find the perfect lab-grown diamond jewellery for every moment in
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block">{occasion.emoji}</span>
              <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {occasion.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {occasion.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
