"use client";

import { User, Package, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AccountContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          My Account
        </h1>

        <div className="border border-border rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-semibold mb-4">Sign In</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Sign in to access your orders, wishlist, and account settings.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button className="w-full">Sign In</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4 text-center">
            <Package className="h-6 w-6 mx-auto text-primary mb-2" />
            <span className="text-sm font-medium">My Orders</span>
          </div>
          <div className="border border-border rounded-lg p-4 text-center">
            <Heart className="h-6 w-6 mx-auto text-primary mb-2" />
            <span className="text-sm font-medium">Wishlist</span>
          </div>
          <div className="border border-border rounded-lg p-4 text-center">
            <MapPin className="h-6 w-6 mx-auto text-primary mb-2" />
            <span className="text-sm font-medium">Addresses</span>
          </div>
          <div className="border border-border rounded-lg p-4 text-center">
            <User className="h-6 w-6 mx-auto text-primary mb-2" />
            <span className="text-sm font-medium">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
