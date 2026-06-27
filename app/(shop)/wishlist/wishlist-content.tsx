"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WishlistContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          My Wishlist
        </h1>

        <div className="text-center py-16 border border-dashed border-border rounded-xl">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-lg font-semibold mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Save items you love by clicking the heart icon on any product.
          </p>
          <Button asChild>
            <Link href="/collections">Explore Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
