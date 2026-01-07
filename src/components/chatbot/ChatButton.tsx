"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-purple text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-brand-purple-dark hover:scale-110",
        isOpen && "scale-0 opacity-0"
      )}
      aria-label="Open chat"
    >
      <MessageCircle size={24} />
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-brand-purple animate-ping opacity-30" />
    </button>
  );
}
