import { Star } from "lucide-react";

const reviews = [
  {
    name: "Arin G.",
    date: "15 March 2026",
    text: "Very nice experience. Wide variety of product available.",
    rating: 5,
  },
  {
    name: "Deepak K.",
    date: "21 February 2026",
    text: "Had a great experience! Smooth coordination throughout the process and truly value for money.",
    rating: 5,
  },
  {
    name: "Anindita S.",
    date: "8 February 2026",
    text: "Amazing collection. Very polite staff. Really nice experience being a returning customer.",
    rating: 5,
  },
  {
    name: "SK Arif",
    date: "1 February 2026",
    text: "It's a great experience having our engagement ring from LuxesJewel. Staff was very polite and promising.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Real Stories. Real Sparkle.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-4">
            From dream proposals to treasured gifts, our customers share how
            LuxesJewel diamonds became part of their unforgettable journeys.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-sm transition-shadow min-w-65 sm:min-w-70 md:min-w-0 snap-start shrink-0 md:shrink"
            >
              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-xs sm:text-sm font-medium">{review.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
