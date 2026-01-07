"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { blogPosts, categories, featuredPosts } from "@/data/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import CTA from "@/components/sections/CTA";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-6"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Insights for Modern Researchers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Guides, best practices, and industry insights on AI-powered
              qualitative research.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-dark mb-8"
          >
            Featured Articles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card hover className="h-full group">
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          post.category === "guides"
                            ? "bg-brand-purple/10 text-brand-purple"
                            : post.category === "research"
                            ? "bg-brand-green/10 text-brand-green"
                            : post.category === "product"
                            ? "bg-brand-orange/10 text-brand-orange"
                            : "bg-brand-blue/10 text-brand-blue"
                        }`}
                      >
                        {categories.find((c) => c.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-brand-purple transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-text-medium text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-text-light">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-dark mb-8"
              >
                All Articles
              </motion.h2>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span
                                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                                  post.category === "guides"
                                    ? "bg-brand-purple/10 text-brand-purple"
                                    : post.category === "research"
                                    ? "bg-brand-green/10 text-brand-green"
                                    : post.category === "product"
                                    ? "bg-brand-orange/10 text-brand-orange"
                                    : "bg-brand-blue/10 text-brand-blue"
                                }`}
                              >
                                {
                                  categories.find((c) => c.id === post.category)
                                    ?.name
                                }
                              </span>
                              <span className="text-xs text-text-light">
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-brand-purple transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-text-medium text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-text-light flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                              <span className="text-brand-purple font-medium flex items-center gap-1 group-hover:underline">
                                Read more
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-text-dark mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <span className="flex items-center justify-between text-text-medium hover:text-brand-purple transition-colors cursor-pointer">
                          <span>{category.name}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-purple rounded-xl p-6 text-white"
                >
                  <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Get the latest research insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-white text-brand-purple font-medium rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </motion.div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
