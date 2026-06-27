import { ShieldCheck, Truck, RotateCcw, ArrowLeftRight } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "Certified & Hallmarked",
    description: "Every piece comes with authenticity certification",
  },
  {
    icon: Truck,
    title: "Free Shipping & Insurance",
    description: "Complimentary delivery with full insurance coverage",
  },
  {
    icon: RotateCcw,
    title: "15 Day Easy Returns",
    description: "Hassle-free returns within 15 days of delivery",
  },
  {
    icon: ArrowLeftRight,
    title: "80% Buyback & 100% Exchange",
    description: "Lifetime exchange and guaranteed buyback value",
  },
];

export function OurPromise() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Our Promise</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            At LuxesJewel, we&apos;re committed to sustainable luxury and
            transparent craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {promises.map((promise) => {
            const Icon = promise.icon;
            return (
              <div key={promise.title} className="text-center">
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/10 mb-3 sm:mb-4">
                  <Icon className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{promise.title}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
