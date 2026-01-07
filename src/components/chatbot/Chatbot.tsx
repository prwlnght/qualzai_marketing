"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
