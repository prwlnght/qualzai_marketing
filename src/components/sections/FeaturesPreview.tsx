"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { featuredFeatures } from "@/data/features";
import { ArrowRight } from "lucide-react";

export default function FeaturesPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
          >
            Everything You Need for Qualitative Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-medium max-w-2xl mx-auto"
          >
            From AI-powered interviews to automated analysis, Qualz.ai gives you
            the tools to conduct better research faster.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card accentColor={feature.color} accentPosition="top" hover className="h-full">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    feature.color === "purple"
                      ? "bg-brand-purple/10 text-brand-purple"
                      : feature.color === "green"
                      ? "bg-brand-green/10 text-brand-green"
                      : feature.color === "orange"
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "bg-brand-blue/10 text-brand-blue"
                  }`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-medium text-sm">{feature.description}</p>
              </Card>
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
            href="/features"
            className="inline-flex items-center text-brand-purple font-medium hover:underline"
          >
            View all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
