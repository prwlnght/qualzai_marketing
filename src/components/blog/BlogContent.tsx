"use client";

import React from "react";

interface BlogContentProps {
  content: string;
}

interface ParsedBlock {
  type: "h1" | "h2" | "h3" | "p" | "ul" | "ol" | "strong-line";
  content: string;
  items?: string[];
}

function parseMarkdown(content: string): ParsedBlock[] {
  const lines = content.trim().split("\n");
  const blocks: ParsedBlock[] = [];
  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines but flush current list
    if (!line) {
      if (currentList) {
        blocks.push({
          type: currentList.type,
          content: "",
          items: currentList.items,
        });
        currentList = null;
      }
      continue;
    }

    // H1
    if (line.startsWith("# ")) {
      if (currentList) {
        blocks.push({
          type: currentList.type,
          content: "",
          items: currentList.items,
        });
        currentList = null;
      }
      blocks.push({ type: "h1", content: line.slice(2) });
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      if (currentList) {
        blocks.push({
          type: currentList.type,
          content: "",
          items: currentList.items,
        });
        currentList = null;
      }
      blocks.push({ type: "h2", content: line.slice(3) });
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      if (currentList) {
        blocks.push({
          type: currentList.type,
          content: "",
          items: currentList.items,
        });
        currentList = null;
      }
      blocks.push({ type: "h3", content: line.slice(4) });
      continue;
    }

    // Unordered list item
    if (line.startsWith("- ")) {
      if (!currentList || currentList.type !== "ul") {
        if (currentList) {
          blocks.push({
            type: currentList.type,
            content: "",
            items: currentList.items,
          });
        }
        currentList = { type: "ul", items: [] };
      }
      currentList.items.push(line.slice(2));
      continue;
    }

    // Ordered list item
    if (/^\d+\.\s/.test(line)) {
      if (!currentList || currentList.type !== "ol") {
        if (currentList) {
          blocks.push({
            type: currentList.type,
            content: "",
            items: currentList.items,
          });
        }
        currentList = { type: "ol", items: [] };
      }
      currentList.items.push(line.replace(/^\d+\.\s/, ""));
      continue;
    }

    // Bold line (standalone **text**)
    if (line.startsWith("**") && line.endsWith("**")) {
      if (currentList) {
        blocks.push({
          type: currentList.type,
          content: "",
          items: currentList.items,
        });
        currentList = null;
      }
      blocks.push({ type: "strong-line", content: line.slice(2, -2) });
      continue;
    }

    // Regular paragraph
    if (currentList) {
      blocks.push({
        type: currentList.type,
        content: "",
        items: currentList.items,
      });
      currentList = null;
    }
    blocks.push({ type: "p", content: line });
  }

  // Flush any remaining list
  if (currentList) {
    blocks.push({
      type: currentList.type,
      content: "",
      items: currentList.items,
    });
  }

  return blocks;
}

function formatInlineText(text: string): React.ReactNode {
  // Handle bold text **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-text-dark font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = parseMarkdown(content);

  return (
    <article className="prose prose-lg max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h1":
            return (
              <h1
                key={index}
                className="text-3xl md:text-4xl font-bold text-text-dark mt-8 mb-4 first:mt-0"
              >
                {block.content}
              </h1>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="text-2xl md:text-3xl font-bold text-text-dark mt-10 mb-4"
              >
                {block.content}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="text-xl md:text-2xl font-semibold text-text-dark mt-8 mb-3"
              >
                {block.content}
              </h3>
            );
          case "strong-line":
            return (
              <p key={index} className="text-text-dark font-semibold mt-6 mb-2">
                {block.content}
              </p>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="list-disc list-inside space-y-2 my-4 text-text-medium"
              >
                {block.items?.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {formatInlineText(item)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={index}
                className="list-decimal list-inside space-y-2 my-4 text-text-medium"
              >
                {block.items?.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {formatInlineText(item)}
                  </li>
                ))}
              </ol>
            );
          case "p":
          default:
            return (
              <p
                key={index}
                className="text-text-medium leading-relaxed my-4"
              >
                {formatInlineText(block.content)}
              </p>
            );
        }
      })}
    </article>
  );
}
