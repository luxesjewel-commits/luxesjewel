"use client";

const faqs = [
  {
    question: "Are lab-grown diamonds real diamonds?",
    answer:
      "Yes! Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They are real diamonds, just created in a laboratory instead of being mined from the earth.",
  },
  {
    question: "Do lab-grown diamonds come with certification?",
    answer:
      "Absolutely. All our diamonds above 0.30 carats come with IGI (International Gemological Institute) certification. This ensures quality, authenticity, and grading transparency.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 15-day easy return policy. If you're not satisfied with your purchase, you can return it within 15 days of delivery for a full refund. The item must be in its original condition.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Ready-to-ship items are delivered within 2-3 business days. Made-to-order pieces take 7-10 business days. All orders include free shipping with full insurance coverage.",
  },
  {
    question: "Do you offer customization?",
    answer:
      "Yes, we offer customization on select designs. You can choose the metal type, diamond size, and engraving options. Contact our team for custom orders.",
  },
  {
    question: "What is the buyback policy?",
    answer:
      "We offer 80% buyback value on all purchases and 100% exchange value. This means you can upgrade your jewellery anytime by exchanging your old piece for a new one at full value.",
  },
  {
    question: "How do I care for my diamond jewellery?",
    answer:
      "Clean your jewellery regularly with mild soap and warm water. Avoid harsh chemicals and remove jewellery before swimming or exercising. Store pieces separately to prevent scratching.",
  },
  {
    question: "Do you have physical stores?",
    answer:
      "Yes, we have experience centers in select cities. Visit our Store Locator page to find the nearest LuxesJewel store. You can also book a virtual consultation.",
  },
];

export function FaqsContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Everything you need to know about LuxesJewel and lab-grown diamonds.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="border border-border rounded-lg group"
            >
              <summary className="px-5 py-4 cursor-pointer text-sm sm:text-base font-medium hover:text-primary transition-colors list-none flex items-center justify-between">
                {faq.question}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
