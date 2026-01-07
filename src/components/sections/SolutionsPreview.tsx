"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { featuredSolutions } from "@/data/solutions";
import { ArrowRight } from "lucide-react";

export default function SolutionsPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-4"
          >
            Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
          >
            Built for Every Research Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-medium max-w-2xl mx-auto"
          >
            Whether you&apos;re in customer research, UX, consulting, or non-profit
            work, Qualz.ai adapts to your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/solutions/${solution.slug}`}>
                <Card accentColor={solution.color} hover className="h-full group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        solution.color === "purple"
                          ? "bg-brand-purple/10 text-brand-purple"
                          : solution.color === "green"
                          ? "bg-brand-green/10 text-brand-green"
                          : solution.color === "orange"
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <solution.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-dark mb-2 group-hover:text-brand-purple transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-text-medium mb-4">
                        {solution.shortDescription}
                      </p>
                      <span className="inline-flex items-center text-brand-purple text-sm font-medium group-hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center text-brand-purple font-medium hover:underline"
          >
            View all solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
