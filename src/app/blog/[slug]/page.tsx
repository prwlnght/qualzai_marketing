import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts, categories, recentPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import CTA from "@/components/sections/CTA";
import BlogContent from "@/components/blog/BlogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Qualz.ai Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords.join(", "),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = recentPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const category = categories.find((c) => c.id === post.category);

  return (
    <>
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-purple hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span
              className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                post.category === "guides"
                  ? "bg-brand-purple/10 text-brand-purple"
                  : post.category === "research"
                  ? "bg-brand-green/10 text-brand-green"
                  : post.category === "product"
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "bg-brand-blue/10 text-brand-blue"
              }`}
            >
              {category?.name}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-text-medium mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-medium">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <BlogContent content={post.content} />

            {/* Tags/Keywords */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-text-dark mb-4">
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.seoKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-100 text-text-medium text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-text-dark mb-8">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full group">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                      relatedPost.category === "guides"
                        ? "bg-brand-purple/10 text-brand-purple"
                        : relatedPost.category === "research"
                        ? "bg-brand-green/10 text-brand-green"
                        : relatedPost.category === "product"
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "bg-brand-blue/10 text-brand-blue"
                    }`}
                  >
                    {categories.find((c) => c.id === relatedPost.category)?.name}
                  </span>
                  <h3 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-text-medium text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
