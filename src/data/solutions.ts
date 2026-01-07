import { Users, TrendingUp, Layout, Briefcase, Heart, Stethoscope, Rocket } from "lucide-react";

export interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: typeof Users;
  color: "purple" | "green" | "orange" | "blue";
  benefits: string[];
  useCases: string[];
}

export const solutions: Solution[] = [
  {
    id: "customer-research",
    title: "Customer Research",
    slug: "customer-research",
    description:
      "Understand your customers at a deeper level with AI-moderated interviews and dynamic surveys. Uncover needs, pain points, and opportunities for innovation.",
    shortDescription: "Deep customer understanding through AI-powered interviews",
    icon: Users,
    color: "purple",
    benefits: [
      "Scale qualitative research without scaling costs",
      "Get 10x more insights in the same time",
      "Reduce bias with consistent AI moderation",
      "Instant thematic analysis of responses",
    ],
    useCases: [
      "Customer discovery interviews",
      "Product feedback sessions",
      "Churn analysis",
      "Customer journey mapping",
    ],
  },
  {
    id: "market-research",
    title: "Market Research",
    slug: "market-research",
    description:
      "Conduct comprehensive market analysis with AI-powered qualitative research. Understand trends, competitors, and market opportunities at scale.",
    shortDescription: "Comprehensive market analysis at scale",
    icon: TrendingUp,
    color: "green",
    benefits: [
      "Rapid market landscape analysis",
      "Competitive intelligence gathering",
      "Trend identification and tracking",
      "Consumer sentiment analysis",
    ],
    useCases: [
      "Market entry research",
      "Competitive analysis",
      "Brand perception studies",
      "Trend forecasting",
    ],
  },
  {
    id: "ux-research",
    title: "UX Research",
    slug: "ux-research",
    description:
      "Elevate your user experience research with AI-assisted interviews and analysis. Get actionable insights to improve your product design.",
    shortDescription: "User experience insights for better product design",
    icon: Layout,
    color: "orange",
    benefits: [
      "Conduct usability interviews at scale",
      "Identify UX patterns and friction points",
      "Generate persona insights automatically",
      "Create empathy maps from interview data",
    ],
    useCases: [
      "Usability testing",
      "User journey research",
      "Feature validation",
      "Design sprint research",
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    slug: "consulting",
    description:
      "Supercharge your consulting practice with AI-powered research capabilities. Deliver deeper insights to clients faster.",
    shortDescription: "AI-powered research for consulting firms",
    icon: Briefcase,
    color: "blue",
    benefits: [
      "10x your research capacity",
      "Deliver insights faster to clients",
      "Standardize research methodology",
      "White-label research capabilities",
    ],
    useCases: [
      "Strategy consulting research",
      "Due diligence interviews",
      "Organizational research",
      "Expert network interviews",
    ],
  },
  {
    id: "nonprofits",
    title: "Non-Profits",
    slug: "nonprofits",
    description:
      "Measure impact and understand beneficiaries with accessible, scalable research tools designed for mission-driven organizations.",
    shortDescription: "Impact measurement for mission-driven organizations",
    icon: Heart,
    color: "purple",
    benefits: [
      "Affordable research at scale",
      "Impact measurement made easy",
      "Beneficiary voice capture",
      "Grant reporting support",
    ],
    useCases: [
      "Program evaluation",
      "Needs assessment",
      "Stakeholder research",
      "Impact reporting",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Conduct patient and provider research with AI assistance while maintaining compliance and sensitivity to healthcare contexts.",
    shortDescription: "Patient and provider research with AI assistance",
    icon: Stethoscope,
    color: "green",
    benefits: [
      "HIPAA-aware research workflows",
      "Patient experience insights",
      "Provider perspective research",
      "Healthcare journey mapping",
    ],
    useCases: [
      "Patient experience research",
      "Clinical workflow studies",
      "Healthcare product research",
      "Provider needs assessment",
    ],
  },
  {
    id: "startups",
    title: "Startups",
    slug: "startups",
    description:
      "Move fast with lean research methods. Validate ideas, understand users, and iterate quickly with AI-powered research tools.",
    shortDescription: "Lean research for fast-moving startups",
    icon: Rocket,
    color: "orange",
    benefits: [
      "Rapid customer discovery",
      "Cost-effective validation research",
      "Quick iteration cycles",
      "Founder-friendly workflows",
    ],
    useCases: [
      "Problem validation",
      "Solution testing",
      "Early customer interviews",
      "Product-market fit research",
    ],
  },
];

export const featuredSolutions = solutions.slice(0, 4);
