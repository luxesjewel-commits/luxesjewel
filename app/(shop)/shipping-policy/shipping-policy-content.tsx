"use client";

import { Truck } from "lucide-react";

export function ShippingPolicyContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Truck className="h-6 w-6 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Shipping Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Free Shipping
            </h2>
            <p>
              We offer free shipping on all orders across India. Every shipment
              is fully insured for the complete value of the jewellery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Delivery Timeline
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ready-to-ship items: 2-3 business days</li>
              <li>Made-to-order items: 7-10 business days</li>
              <li>Custom orders: 14-21 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Packaging
            </h2>
            <p>
              Every piece is carefully packaged in our signature LuxesJewel box
              with certification, care instructions, and a polishing cloth. The
              outer packaging is discreet with no indication of contents.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Tracking
            </h2>
            <p>
              Once your order is dispatched, you&apos;ll receive a tracking link
              via email and SMS. You can track your shipment in real-time until
              delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              International Shipping
            </h2>
            <p>
              We currently ship to select international destinations. Contact our
              team for international delivery options, timelines, and applicable
              duties.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
