"use client";

import { Sparkles, CheckCircle, Leaf, Diamond } from "lucide-react";

export function LabDiamondsContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              About Lab Grown Diamonds
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            The future of diamonds is here. Lab-grown diamonds offer the same
            beauty and durability with greater value and sustainability.
          </p>
        </div>

        <div className="space-y-8">
          <section className="border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">What Are Lab-Grown Diamonds?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lab-grown diamonds are real diamonds created in controlled
              laboratory environments using advanced technological processes that
              replicate the conditions under which diamonds naturally form. They
              have the same chemical composition (pure carbon), crystal
              structure, and optical properties as mined diamonds.
            </p>
          </section>

          <section className="border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Identical Quality</h3>
                  <p className="text-xs text-muted-foreground">
                    Same physical, chemical & optical properties as mined diamonds
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Eco-Friendly</h3>
                  <p className="text-xs text-muted-foreground">
                    Significantly less environmental impact than mining
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Diamond className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Better Value</h3>
                  <p className="text-xs text-muted-foreground">
                    Up to 70% more affordable than equivalent mined diamonds
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Certified</h3>
                  <p className="text-xs text-muted-foreground">
                    Graded by the same labs (IGI, GIA) as mined diamonds
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">How Are They Made?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                There are two primary methods for creating lab-grown diamonds:
              </p>
              <div className="pl-4 border-l-2 border-primary/30 space-y-3">
                <div>
                  <h3 className="font-medium text-foreground">HPHT (High Pressure High Temperature)</h3>
                  <p className="text-sm">
                    Mimics the natural diamond formation process using extreme
                    pressure and temperature.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">CVD (Chemical Vapor Deposition)</h3>
                  <p className="text-sm">
                    Uses a carbon-rich gas mixture to deposit diamond layers atom
                    by atom onto a seed crystal.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
