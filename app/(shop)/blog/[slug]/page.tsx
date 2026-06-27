import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Published on June 2026 by LuxesJewel Team
          </p>
          <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground space-y-4">
            <p>
              This article is coming soon. Stay tuned for in-depth content about
              lab-grown diamond jewellery, styling tips, and buying guides from
              the LuxesJewel team.
            </p>
            <p>
              In the meantime, explore our collections and discover the perfect
              piece for you or your loved ones.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
