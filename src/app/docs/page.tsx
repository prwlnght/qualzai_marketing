"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import {
  Book,
  Rocket,
  Mic,
  FileText,
  Brain,
  Users,
  Settings,
  HelpCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const quickStartSteps = [
  {
    step: "1",
    title: "Create Your Account",
    description: "Sign up for a free trial - no credit card required.",
  },
  {
    step: "2",
    title: "Create a Study",
    description: "Set up your research project with our guided workflow.",
  },
  {
    step: "3",
    title: "Invite Participants",
    description: "Share your study link or use our AI participants.",
  },
  {
    step: "4",
    title: "Analyze Results",
    description: "Get AI-powered insights through 14 research lenses.",
  },
];

const docCategories = [
  {
    title: "Getting Started",
    icon: Rocket,
    description: "Quick start guides and platform overview",
    links: [
      { name: "Platform Overview", href: "#overview" },
      { name: "Creating Your First Study", href: "#first-study" },
      { name: "Account Setup", href: "#account" },
    ],
    color: "purple",
  },
  {
    title: "AI Voice Interviews",
    icon: Mic,
    description: "Learn about AI-moderated conversations",
    links: [
      { name: "How AI Interviews Work", href: "#ai-interviews" },
      { name: "Interview Guide Setup", href: "#interview-guide" },
      { name: "Best Practices", href: "#interview-best-practices" },
    ],
    color: "green",
  },
  {
    title: "Dynamic Surveys",
    icon: FileText,
    description: "Create intelligent, adaptive surveys",
    links: [
      { name: "Survey Builder", href: "#survey-builder" },
      { name: "Conditional Logic", href: "#conditional-logic" },
      { name: "Question Types", href: "#question-types" },
    ],
    color: "orange",
  },
  {
    title: "Analysis Tools",
    icon: Brain,
    description: "Understand thematic analysis and lenses",
    links: [
      { name: "Thematic Analysis", href: "#thematic-analysis" },
      { name: "14 Research Lenses", href: "#research-lenses" },
      { name: "Exporting Results", href: "#export" },
    ],
    color: "blue",
  },
  {
    title: "AI Participants",
    icon: Users,
    description: "Use synthetic participants for research",
    links: [
      { name: "What are AI Participants?", href: "#ai-participants" },
      { name: "Creating Personas", href: "#personas" },
      { name: "Use Cases", href: "#ai-use-cases" },
    ],
    color: "purple",
  },
  {
    title: "Account & Settings",
    icon: Settings,
    description: "Manage your account and team",
    links: [
      { name: "Team Management", href: "#team" },
      { name: "Billing & Plans", href: "#billing" },
      { name: "Security", href: "#security" },
    ],
    color: "green",
  },
];

const DEMO_URL = "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting";

export default function DocsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-6"
            >
              <Book size={16} />
              Documentation
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Learn How to Use Qualz.ai
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Everything you need to conduct powerful qualitative research with
              AI assistance.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-dark mb-8 text-center">
              Quick Start Guide
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {quickStartSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-medium">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-text-dark mb-8 text-center">
            Documentation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card accentColor={category.color as "purple" | "green" | "orange" | "blue"} accentPosition="top" className="h-full">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      category.color === "purple"
                        ? "bg-brand-purple/10 text-brand-purple"
                        : category.color === "green"
                        ? "bg-brand-green/10 text-brand-green"
                        : category.color === "orange"
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "bg-brand-blue/10 text-brand-blue"
                    }`}
                  >
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-medium text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-brand-purple hover:underline flex items-center gap-1"
                        >
                          {link.name}
                          <ArrowRight size={12} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <HelpCircle
              size={48}
              className="text-brand-purple mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              Need More Help?
            </h2>
            <p className="text-text-medium mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help
              you get the most out of Qualz.ai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple-dark transition-colors"
              >
                Schedule a Demo
                <ExternalLink size={16} className="ml-2" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-purple text-brand-purple font-medium rounded-lg hover:bg-brand-purple hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
