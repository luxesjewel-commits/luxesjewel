"use client";

export function TermsContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              1. General
            </h2>
            <p>
              By accessing and using the LuxesJewel website and services, you
              agree to be bound by these terms and conditions. These terms apply
              to all visitors, users, and customers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              2. Products
            </h2>
            <p>
              All products displayed on our website are subject to availability.
              We reserve the right to limit quantities and discontinue products
              without notice. Product images are for illustration purposes and
              may vary slightly from actual items.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              3. Pricing
            </h2>
            <p>
              All prices are in Indian Rupees (INR) and inclusive of GST unless
              otherwise stated. Prices are subject to change without notice.
              Making charges and taxes are included in the displayed price.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              4. Orders
            </h2>
            <p>
              An order is confirmed only after successful payment. We reserve the
              right to cancel orders in case of pricing errors, payment issues,
              or suspected fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website including designs, logos, text, and
              images are the intellectual property of LuxesJewel and may not be
              reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              6. Contact
            </h2>
            <p>
              For any queries regarding these terms, please contact us at
              hello@luxesjewel.com or call +91-91632 94444.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
