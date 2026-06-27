"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="text-center py-16 border border-dashed border-border rounded-xl">
          <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-lg font-semibold mb-2">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/collections">Start Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
