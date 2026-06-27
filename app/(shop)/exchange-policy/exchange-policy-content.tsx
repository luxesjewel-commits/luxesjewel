"use client";

import { ArrowLeftRight } from "lucide-react";

export function ExchangePolicyContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeftRight className="h-6 w-6 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Exchange & Buyback Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              100% Exchange Value
            </h2>
            <p>
              We offer 100% exchange value on all LuxesJewel products. You can
              exchange your existing jewellery for any new piece of equal or
              higher value. Simply visit any of our stores or contact our team to
              initiate an exchange.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              80% Buyback Guarantee
            </h2>
            <p>
              If you wish to sell back your jewellery, we guarantee 80% of the
              current market value. This ensures your purchase retains
              significant value over time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Conditions
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Original invoice must be presented</li>
              <li>Jewellery must be in good condition</li>
              <li>Certification documents should be intact</li>
              <li>Applicable after 30 days from purchase</li>
              <li>Exchange value applies to the gold and diamond value</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Process
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Contact us or visit a store with your jewellery</li>
              <li>Our expert will evaluate and certify the piece</li>
              <li>Choose your exchange piece or opt for buyback</li>
              <li>Complete the transaction (differential payment for exchanges)</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
