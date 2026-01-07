export interface FAQ {
  question: string;
  answer: string;
}

export const homeFAQs: FAQ[] = [
  {
    question: "What is Qualz.ai?",
    answer:
      "Qualz.ai is an AI-powered qualitative research platform that helps researchers conduct interviews, surveys, and analysis at scale. Our AI moderator conducts natural conversations with participants, while our analysis engine automatically identifies themes and insights across your data.",
  },
  {
    question: "How is Qualz.ai different from traditional research tools?",
    answer:
      "Unlike traditional tools that require manual moderation and coding, Qualz.ai automates the entire research workflow. Our AI conducts interviews 24/7, transcribes responses in real-time, and uses proprietary Grounded Emergence methodology for rigorous thematic analysis—reducing weeks of work to hours.",
  },
  {
    question: "Do I need research experience to use Qualz.ai?",
    answer:
      "No! Qualz.ai is designed for both experienced researchers and beginners. Our intuitive interface guides you through study setup, and our AI handles the complex tasks of moderation and analysis. We also provide templates and best practices to help you get started.",
  },
  {
    question: "What types of research can I conduct with Qualz.ai?",
    answer:
      "Qualz.ai supports customer discovery interviews, user experience research, market research, product feedback sessions, employee engagement studies, academic research, and more. You can use AI voice interviews for in-depth conversations or dynamic surveys for structured feedback.",
  },
  {
    question: "How does the AI interviewer work?",
    answer:
      "Our AI interviewer uses advanced natural language processing to conduct conversational interviews. You provide an interview guide with topics and objectives, and the AI adapts its questions based on participant responses, asking intelligent follow-ups just like a human moderator would.",
  },
  {
    question: "Is my research data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption for data at rest and in transit. Your data is stored securely in SOC 2 compliant infrastructure, and we never use your research data to train our AI models. You maintain full ownership and control of your data.",
  },
  {
    question: "Can I try Qualz.ai before committing?",
    answer:
      "Yes! We offer a 14-day free trial with no credit card required. You can conduct AI interviews, create surveys, and experience our analysis capabilities before deciding on a plan.",
  },
  {
    question: "What languages does Qualz.ai support?",
    answer:
      "Qualz.ai supports over 50 languages for interviews and analysis. Our AI can conduct interviews in participants' native languages and provide translated transcripts and insights, making global research accessible and efficient.",
  },
];

export const featuresFAQs: FAQ[] = [
  {
    question: "What are AI Voice Interviews?",
    answer:
      "AI Voice Interviews are conversational research sessions conducted by our AI moderator. Participants speak naturally with the AI, which asks dynamic follow-up questions based on responses. This enables you to conduct hundreds of in-depth interviews simultaneously without scheduling constraints.",
  },
  {
    question: "How does the Grounded Emergence thematic analysis work?",
    answer:
      "Grounded Emergence is our proprietary methodology that combines grounded theory principles with AI capabilities. The AI reads through all responses, identifies emergent codes and patterns, and builds a thematic structure from the data itself—rather than forcing data into predetermined categories.",
  },
  {
    question: "What are the 14 Research Lenses?",
    answer:
      "Research Lenses are different analytical frameworks you can apply to your data. They include Jobs-to-be-Done, Empathy Maps, User Journey Analysis, Pain Points, Persona Insights, Competitive Analysis, Feature Prioritization, Sentiment Analysis, Theme Extraction, Quote Mining, Behavior Patterns, Decision Drivers, Unmet Needs, and Value Proposition analysis.",
  },
  {
    question: "What are AI Participants?",
    answer:
      "AI Participants are synthetic respondents generated from persona profiles you define. They're useful for rapid prototyping interview guides, testing survey logic, generating hypothesis-driven insights, or supplementing real participant data when sample sizes are limited.",
  },
  {
    question: "How accurate is the real-time transcription?",
    answer:
      "Our transcription achieves 95%+ accuracy across most languages and accents. We use speaker diarization to identify different speakers, add timestamps, and handle technical terminology. You can also edit transcripts for perfect accuracy when needed.",
  },
  {
    question: "Can I upload existing transcripts for analysis?",
    answer:
      "Yes! You can upload transcripts from interviews conducted elsewhere, and our AI will apply the same powerful analysis—thematic coding, sentiment analysis, and all 14 research lenses. We support common formats like TXT, DOCX, and VTT.",
  },
  {
    question: "How do Dynamic Surveys differ from regular surveys?",
    answer:
      "Dynamic Surveys use conditional logic and AI to adapt questions based on previous answers. If a participant mentions a specific pain point, follow-up questions can probe deeper. This creates a more conversational survey experience and yields richer data.",
  },
  {
    question: "Can I customize the AI interviewer's style?",
    answer:
      "Yes! You can adjust the AI's tone (professional, casual, empathetic), set specific probing behaviors, define topics to explore or avoid, and even give the AI a persona. This ensures the interview style matches your research context and participant audience.",
  },
];

export const solutionsFAQs: FAQ[] = [
  {
    question: "Which industries does Qualz.ai work best for?",
    answer:
      "Qualz.ai is versatile and works across industries including technology, healthcare, financial services, retail, education, non-profits, and consulting. Our platform adapts to different research contexts, compliance requirements, and participant populations.",
  },
  {
    question: "Can consulting firms white-label Qualz.ai?",
    answer:
      "Yes! Our Enterprise plan includes white-labeling options where you can customize the interface with your branding, use custom domains for participant links, and present insights reports under your firm's identity.",
  },
  {
    question: "Is Qualz.ai HIPAA-compliant for healthcare research?",
    answer:
      "We offer HIPAA-compliant configurations for healthcare research on our Enterprise plan. This includes BAA agreements, enhanced data handling procedures, and audit logging to meet healthcare regulatory requirements.",
  },
  {
    question: "How does Qualz.ai help non-profits with limited budgets?",
    answer:
      "We offer 50% discounts for verified non-profit organizations. Additionally, our platform helps non-profits do more with less by automating time-consuming research tasks, enabling small teams to conduct research that would otherwise require expensive agencies.",
  },
  {
    question: "Can startups use AI Participants for early-stage validation?",
    answer:
      "Absolutely! AI Participants are perfect for early-stage startups. You can generate synthetic responses based on target customer profiles to test hypotheses, refine interview guides, and develop initial insights before investing in recruiting real participants.",
  },
  {
    question: "How does Qualz.ai integrate with existing research workflows?",
    answer:
      "Qualz.ai offers API access on Professional and Enterprise plans, allowing integration with CRMs, research repositories, and analysis tools. You can export data in multiple formats and connect with tools like Notion, Airtable, and Dovetail.",
  },
  {
    question: "Can I conduct research in multiple countries simultaneously?",
    answer:
      "Yes! With support for 50+ languages, you can launch studies globally without translation delays. The AI conducts interviews in local languages and provides translated transcripts, making international research as easy as domestic studies.",
  },
  {
    question: "What kind of support do Enterprise customers receive?",
    answer:
      "Enterprise customers get a dedicated account manager, custom onboarding and training, priority support with guaranteed response times, quarterly business reviews, and access to our research methodology experts for study design consultation.",
  },
];

export const enhancedPricingFAQs: FAQ[] = [
  {
    question: "What counts as an AI voice interview?",
    answer:
      "An AI voice interview is a single conversation session with one participant, moderated by our AI. Each session can last up to 60 minutes and includes unlimited follow-up questions within that session.",
  },
  {
    question: "Are dynamic surveys unlimited on all plans?",
    answer:
      "Yes! All plans include unlimited dynamic surveys with unlimited responses. You only pay for AI voice interviews, making surveys a cost-effective way to gather structured feedback at scale.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you get immediate access to new features and additional interviews are prorated. When downgrading, unused interviews don't roll over, but the change takes effect at your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial that includes 3 AI voice interviews and full access to all features in your chosen tier. No credit card required to start.",
  },
  {
    question: "What happens if I exceed my monthly interview limit?",
    answer:
      "You can purchase additional interview credits at $15 per interview on Starter and $12 per interview on Professional. Or you can upgrade your plan for a better per-interview rate. Enterprise plans have unlimited interviews.",
  },
  {
    question: "Do you offer annual billing discounts?",
    answer:
      "Yes! Annual billing saves you 20% compared to monthly billing. That's $470 in savings on Starter and $478 on Professional per year.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express). Enterprise customers can also pay via invoice with NET 30 terms, purchase orders, and ACH bank transfers.",
  },
  {
    question: "Do you offer discounts for non-profits or education?",
    answer:
      "Yes! We offer 50% off for verified non-profit organizations and educational institutions. Academic researchers conducting published research also qualify for our education discount. Contact us with verification to apply.",
  },
  {
    question: "What's included in the Enterprise plan?",
    answer:
      "Enterprise includes unlimited AI voice interviews, custom research lenses, SSO and advanced security, dedicated account management, custom integrations, white-labeling options, SLA guarantees, and priority support.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your current billing period. We also offer data export so you never lose your research.",
  },
];
