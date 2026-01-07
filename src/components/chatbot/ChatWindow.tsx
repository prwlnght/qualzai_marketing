"use client";

import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right",
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )}
    >
      {/* Header */}
      <div className="bg-brand-purple text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Image
              src="/images/logos/logo_white_rgb@4x.png"
              alt="Qualz"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <div>
            <h3 className="font-semibold">Qualz Assistant</h3>
            <p className="text-xs text-white/70">AI-powered help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="h-80 p-4 overflow-y-auto bg-gray-50">
        {/* Welcome Message */}
        <div className="flex gap-3 mb-4">
          <div className="w-8 h-8 bg-brand-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/logos/logo_fullcolor_rgb@4x.png"
              alt="Qualz"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
            <p className="text-text-dark text-sm">
              Hi! 👋 I&apos;m the Qualz.ai assistant. I can help you learn about
              our platform and answer your questions.
            </p>
            <p className="text-brand-purple text-xs mt-2 font-medium">
              (Coming soon!)
            </p>
          </div>
        </div>

        {/* Feature Suggestions */}
        <div className="space-y-2 mt-4">
          <p className="text-text-light text-xs text-center mb-3">
            Quick questions
          </p>
          {[
            "How does AI interviewing work?",
            "What are research lenses?",
            "Can I try it for free?",
          ].map((question) => (
            <button
              key={question}
              disabled
              className="w-full text-left px-3 py-2 bg-white rounded-lg text-sm text-text-medium hover:bg-gray-100 transition-colors border border-gray-100 opacity-50 cursor-not-allowed"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Chat feature coming soon..."
            disabled
            className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm text-text-medium placeholder:text-text-light focus:outline-none cursor-not-allowed"
          />
          <button
            disabled
            className="p-2 bg-gray-200 text-text-light rounded-lg cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
