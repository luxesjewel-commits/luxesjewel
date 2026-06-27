"use client";

import { RotateCcw } from "lucide-react";

export function ReturnPolicyContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <RotateCcw className="h-6 w-6 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Return Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              15-Day Easy Returns
            </h2>
            <p>
              Not satisfied with your purchase? Return it within 15 days of
              delivery for a full refund. No questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Eligibility
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Item must be returned within 15 days of delivery</li>
              <li>Product must be in original, unworn condition</li>
              <li>All tags, certificates, and packaging must be intact</li>
              <li>Custom/engraved items are not eligible for return</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              How to Return
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Contact our team via email or phone</li>
              <li>Receive a return authorization and shipping label</li>
              <li>Pack the item securely in original packaging</li>
              <li>Schedule a pickup or drop off at a partner location</li>
              <li>Refund processed within 5-7 business days after receipt</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Refund Method
            </h2>
            <p>
              Refunds are processed to the original payment method. Bank
              transfers may take 5-7 business days to reflect in your account.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
