import { Mic, FileText, Brain, Sparkles, Users, Globe, Zap, BarChart3 } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: typeof Mic;
  color: "purple" | "green" | "orange" | "blue";
}

export const features: Feature[] = [
  {
    id: "voice-interviews",
    title: "AI Voice Interviews",
    description:
      "Conduct natural, conversational interviews at scale with our AI moderator. Get deeper insights through dynamic follow-up questions.",
    icon: Mic,
    color: "purple",
  },
  {
    id: "dynamic-surveys",
    title: "Dynamic Surveys",
    description:
      "Create intelligent surveys with conditional logic that adapt to participant responses in real-time.",
    icon: FileText,
    color: "green",
  },
  {
    id: "thematic-analysis",
    title: "Thematic Analysis",
    description:
      "Automatically identify themes and patterns using our Grounded Emergence methodology for rigorous qualitative analysis.",
    icon: Brain,
    color: "orange",
  },
  {
    id: "research-lenses",
    title: "14 Research Lenses",
    description:
      "Analyze your data through multiple theoretical frameworks including Jobs-to-be-Done, Empathy Maps, and more.",
    icon: Sparkles,
    color: "blue",
  },
  {
    id: "ai-participants",
    title: "AI Participants",
    description:
      "Generate synthetic research participants for rapid prototyping and hypothesis testing before real fieldwork.",
    icon: Users,
    color: "purple",
  },
  {
    id: "multi-language",
    title: "Multi-Language Support",
    description:
      "Conduct research in 50+ languages with automatic transcription and translation capabilities.",
    icon: Globe,
    color: "green",
  },
  {
    id: "real-time-transcription",
    title: "Real-Time Transcription",
    description:
      "Get instant, accurate transcriptions of voice interviews with speaker identification and timestamps.",
    icon: Zap,
    color: "orange",
  },
  {
    id: "transcript-analysis",
    title: "Transcript Upload & Analysis",
    description:
      "Import existing interview transcripts and apply AI-powered analysis to extract insights.",
    icon: BarChart3,
    color: "blue",
  },
];

export const featuredFeatures = features.slice(0, 4);
