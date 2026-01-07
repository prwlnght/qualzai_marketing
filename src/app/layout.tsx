import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qualz.ai - AI-Powered Qualitative Research Platform",
  description:
    "Transform your research with AI-moderated interviews, dynamic surveys, and automated thematic analysis. Get deeper insights faster with Qualz.ai.",
  keywords: [
    "qualitative research",
    "AI interviews",
    "research platform",
    "thematic analysis",
    "user research",
    "market research",
  ],
  authors: [{ name: "Qualz.ai" }],
  openGraph: {
    title: "Qualz.ai - AI-Powered Qualitative Research Platform",
    description:
      "Transform your research with AI-moderated interviews, dynamic surveys, and automated thematic analysis.",
    url: "https://qualz.ai",
    siteName: "Qualz.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualz.ai - AI-Powered Qualitative Research Platform",
    description:
      "Transform your research with AI-moderated interviews and automated analysis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
