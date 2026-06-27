"use client";

import Link from "next/link";

const posts = [
  {
    title: "Lab-Grown vs Mined Diamonds: The Complete Guide",
    excerpt:
      "Everything you need to know about the differences, similarities, and advantages of lab-grown diamonds.",
    date: "June 20, 2026",
    category: "Diamond Education",
    slug: "lab-grown-vs-mined-diamonds",
  },
  {
    title: "How to Choose the Perfect Engagement Ring",
    excerpt:
      "A step-by-step guide to finding the ring that matches your partner's style and your budget.",
    date: "June 15, 2026",
    category: "Buying Guide",
    slug: "choose-perfect-engagement-ring",
  },
  {
    title: "5 Jewellery Trends Dominating 2026",
    excerpt:
      "From stackable rings to convertible necklaces, discover the trends defining modern jewellery.",
    date: "June 8, 2026",
    category: "Trends",
    slug: "jewellery-trends-2026",
  },
  {
    title: "Caring for Your Lab-Grown Diamond Jewellery",
    excerpt:
      "Simple tips to keep your diamonds sparkling and your settings secure for years to come.",
    date: "May 28, 2026",
    category: "Care Guide",
    slug: "caring-for-diamond-jewellery",
  },
  {
    title: "The Science Behind Lab-Grown Diamonds",
    excerpt:
      "Explore the fascinating technology that creates real diamonds in a matter of weeks.",
    date: "May 20, 2026",
    category: "Diamond Education",
    slug: "science-behind-lab-diamonds",
  },
  {
    title: "Gift Ideas for Every Budget",
    excerpt:
      "From under ₹10K to premium splurges, find the perfect diamond gift for any occasion.",
    date: "May 12, 2026",
    category: "Gifting",
    slug: "gift-ideas-every-budget",
  },
];

export function BlogContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            The LuxesJewel Blog
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Diamond education, style guides, and jewellery insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <span className="text-xs text-primary font-medium">
                {post.category}
              </span>
              <h2 className="text-base sm:text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
