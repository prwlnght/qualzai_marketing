"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { solutions } from "@/data/solutions";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-6"
            >
              Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Research Solutions for Every Industry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Whether you&apos;re a startup, enterprise, consultant, or
              non-profit, Qualz.ai adapts to your unique research needs.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/solutions/${solution.slug}`}>
                  <Card
                    accentColor={solution.color}
                    accentPosition="top"
                    hover
                    className="h-full group"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                        solution.color === "purple"
                          ? "bg-brand-purple/10 text-brand-purple"
                          : solution.color === "green"
                          ? "bg-brand-green/10 text-brand-green"
                          : solution.color === "orange"
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <solution.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark mb-2 group-hover:text-brand-purple transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-text-medium mb-4">
                      {solution.shortDescription}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {solution.benefits.slice(0, 3).map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-medium"
                        >
                          <span className="text-brand-green mt-1">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-brand-purple text-sm font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
