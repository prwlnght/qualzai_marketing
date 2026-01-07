"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { features } from "@/data/features";
import CTA from "@/components/sections/CTA";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6"
            >
              Features
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Powerful Tools for Modern Research
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Everything you need to conduct, analyze, and share qualitative
              research—powered by AI.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card accentColor={feature.color} hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        feature.color === "purple"
                          ? "bg-brand-purple/10 text-brand-purple"
                          : feature.color === "green"
                          ? "bg-brand-green/10 text-brand-green"
                          : feature.color === "orange"
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <feature.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-medium">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research Lenses Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
            >
              14 Research Lenses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-medium"
            >
              Analyze your data through multiple theoretical frameworks to
              uncover different perspectives and insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Jobs to be Done",
              "Empathy Map",
              "User Journey",
              "Pain Points",
              "Persona Insights",
              "Competitive Analysis",
              "Feature Prioritization",
              "Sentiment Analysis",
              "Theme Extraction",
              "Quote Mining",
              "Behavior Patterns",
              "Decision Drivers",
              "Unmet Needs",
              "Value Proposition",
            ].map((lens, index) => (
              <motion.div
                key={lens}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-text-dark font-medium">{lens}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
