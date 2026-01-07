"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { FileText, Mic, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Study",
    description:
      "Set up your research project with customizable interview guides or survey templates.",
    icon: FileText,
    color: "purple",
  },
  {
    number: "02",
    title: "Collect Responses",
    description:
      "Share your study link and let our AI conduct natural, conversational interviews.",
    icon: Mic,
    color: "green",
  },
  {
    number: "03",
    title: "AI Analysis",
    description:
      "Our AI automatically transcribes, codes, and identifies themes across all responses.",
    icon: Brain,
    color: "orange",
  },
  {
    number: "04",
    title: "Get Insights",
    description:
      "Access actionable insights through 14 research lenses and exportable reports.",
    icon: BarChart3,
    color: "blue",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
          >
            Research Made Simple
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-medium max-w-2xl mx-auto"
          >
            Go from research question to actionable insights in four simple steps.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto ${
                      step.color === "purple"
                        ? "bg-brand-purple text-white"
                        : step.color === "green"
                        ? "bg-brand-green text-white"
                        : step.color === "orange"
                        ? "bg-brand-orange text-white"
                        : "bg-brand-blue text-white"
                    }`}
                  >
                    <step.icon size={24} />
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-bold text-text-light">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-text-dark mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-medium text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
