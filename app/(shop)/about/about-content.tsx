"use client";

import { Diamond, Sparkles, Heart, Globe } from "lucide-react";

export function AboutContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            About LuxesJewel
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Redefining luxury with sustainable, lab-grown diamond jewellery that
            doesn&apos;t compromise on brilliance or ethics.
          </p>
        </div>

        <div className="prose prose-sm sm:prose-base max-w-none space-y-8">
          <section className="border border-border rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Diamond className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Our Story</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to make luxury accessible and sustainable,
              LuxesJewel brings you the finest lab-grown diamond jewellery. Every
              piece is crafted with the same precision and passion as mined
              diamonds, but with a fraction of the environmental impact.
            </p>
          </section>

          <section className="border border-border rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Why Lab-Grown?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Lab-grown diamonds are chemically, physically, and optically
              identical to mined diamonds. They are created using advanced
              technology that replicates the natural diamond growing process,
              resulting in gems of exceptional quality at better value.
            </p>
          </section>

          <section className="border border-border rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Our Values</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Transparency in sourcing and pricing</li>
              <li>Sustainability at the core of every decision</li>
              <li>Craftsmanship that honors traditional jewellery making</li>
              <li>Customer-first approach with lifetime support</li>
            </ul>
          </section>

          <section className="border border-border rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Our Impact</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-xs text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5000+</p>
                <p className="text-xs text-muted-foreground">Designs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.8★</p>
                <p className="text-xs text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
