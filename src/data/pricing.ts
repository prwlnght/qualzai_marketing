export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individual researchers and small projects",
    price: "$49",
    period: "per month",
    features: [
      "5 AI voice interviews/month",
      "Unlimited dynamic surveys",
      "Basic thematic analysis",
      "3 research lenses",
      "Email support",
      "1 team member",
    ],
    cta: "Start Free Trial",
    ctaLink: "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams and frequent research needs",
    price: "$199",
    period: "per month",
    highlighted: true,
    features: [
      "25 AI voice interviews/month",
      "Unlimited dynamic surveys",
      "Advanced thematic analysis",
      "All 14 research lenses",
      "AI participants",
      "Priority support",
      "5 team members",
      "API access",
    ],
    cta: "Start Free Trial",
    ctaLink: "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited AI voice interviews",
      "Unlimited everything",
      "Custom research lenses",
      "Dedicated account manager",
      "SSO & advanced security",
      "Unlimited team members",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaLink: "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting",
  },
];

export const pricingFAQs = [
  {
    question: "What counts as an AI voice interview?",
    answer:
      "An AI voice interview is a single conversation session with one participant, moderated by our AI. Each session can last up to 60 minutes.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, and for Enterprise customers, we also support invoicing and purchase orders.",
  },
  {
    question: "Do you offer discounts for non-profits or education?",
    answer:
      "Yes, we offer 50% off for verified non-profit organizations and educational institutions. Contact us to learn more.",
  },
];
