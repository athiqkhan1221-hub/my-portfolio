"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { contactDetails } from "@/data/socials";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowUpRight,
  ExternalLink,
  Phone,
  Mail,
  Minimize2,
  Maximize2
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

// Comprehensive knowledge base for Athiq Khan
const knowledgeBase = [
  {
    triggers: ["who are you", "who is athiq", "about", "bio", "background", "introduce", "intro", "college", "education", "degree"],
    reply: `I'm **M. Athiq Khan**, an Artificial Intelligence and Machine Learning (AIML) engineering student at **Dhaanish Ahmed Chennai College of Engineering** in Chennai, India.\n\nI focus on **full-stack web development** (React.js, Next.js, JavaScript, Python) while also exploring **prompt engineering, AI video generation, and video editing**.`
  },
  {
    triggers: ["internship", "hire", "job", "freelance", "opportunity", "available", "work with", "collaborate"],
    reply: `Yes, absolutely! I am actively looking for **internship opportunities** (in Web Development & AI/ML) and available for select **freelance projects** and developer collaborations.\n\nYou can reach me directly on WhatsApp at [**+91 90433 95299**](https://wa.me/919043395299) or email me at [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com).`
  },
  {
    triggers: ["skills", "toolkit", "technologies", "tech stack", "languages", "what do you use", "tools"],
    reply: `Here is a summary of my verified technical toolkit:\n\n• **Frontend:** HTML5, CSS3, JavaScript (ES6+), React.js, Next.js App Router\n• **Programming:** Python (data structures, algorithms, AI scripting)\n• **AI Exploration:** Prompt Engineering, Machine Learning concepts\n• **Creative Media:** AI Video Generation & Video Editing\n• **Full-Stack:** REST APIs, Backend foundations, Database integration concepts`
  },
  {
    triggers: ["projects", "what have you built", "work", "portfolio projects", "course explorer", "prompt lab"],
    reply: `I'm currently building and sharing these key projects:\n\n1. **Personal Developer Portfolio:** Bespoke editorial dark web experience built with Next.js & React.\n2. **Course Explorer Web App:** React application for searching and filtering technical courses.\n3. **AI Video Creative Showcase:** Visual experiments in text-to-video diffusion & editing.\n4. **Screen-Time Awareness Dashboard:** Conceptual metrics dashboard for digital wellbeing.\n5. **AI Prompt Lab:** Comparative test matrix for zero-shot vs few-shot system prompts.\n\nYou can inspect them in the [Selected Work](#work) section!`
  },
  {
    triggers: ["contact", "reach", "email", "phone", "whatsapp", "number", "call", "message", "instagram", "linkedin"],
    reply: `Here are the best ways to get in touch with me:\n\n• **WhatsApp:** [**+91 90433 95299**](https://wa.me/919043395299) *(Fastest response)*\n• **Email:** [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com)\n• **LinkedIn:** [**linkedin.com/in/athiq-khan-2aa177433**](https://www.linkedin.com/in/athiq-khan-2aa177433)\n• **Instagram:** [**instagram.com/athiqqqq**](https://www.instagram.com/athiqqqq)\n• **Location:** Chennai, India (IST / UTC+5:30)`
  },
  {
    triggers: ["ai video", "video editing", "video", "playground", "creative", "reels"],
    reply: `Outside pure code, I explore the creative side of technology! In my [Creative Playground](#playground), I experiment with **AI video diffusion**, 9:16 vertical product commercials, 16:9 cinematic camera movement prompts, and timeline beat-sync video editing.`
  },
  {
    triggers: ["location", "city", "where do you live", "where are you from", "india", "chennai"],
    reply: `I am based in **Chennai, Tamil Nadu, India**, studying at Dhaanish Ahmed Chennai College of Engineering. I work effectively in Indian Standard Time (IST / UTC+5:30) and collaborate remotely across timezones.`
  },
  {
    triggers: ["python", "machine learning", "aiml", "ai"],
    reply: `I study Python and AIML as my engineering major at Dhaanish Ahmed College. I practice algorithmic problem solving, machine learning pipeline concepts, and applying prompt engineering techniques to real-world software workflows.`
  },
  {
    triggers: ["react", "nextjs", "next.js", "frontend", "web dev"],
    reply: `Frontend engineering is my primary professional focus! I build with modern **React.js** and **Next.js App Router**, focusing on semantic HTML, clean CSS architecture, reusable modular components, and smooth responsive UX.`
  }
];

export default function AthiqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hi there! I'm **Athiq's AI Assistant**. How can I help you today? Ask me about Athiq's projects, technical skills, academic background, or how to collaborate with him.",
      time: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  const quickPrompts = [
    "What are your core skills?",
    "Tell me about your projects",
    "Are you open for internships?",
    "How can I chat on WhatsApp?"
  ];

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // Check knowledgeBase triggers
    for (const item of knowledgeBase) {
      if (item.triggers.some((trigger) => q.includes(trigger))) {
        return item.reply;
      }
    }

    // Default intelligent response with direct WhatsApp CTA
    return (
      `Thanks for your question! I'm Athiq Khan, an AIML engineering student and full-stack web developer based in Chennai.\n\n` +
      `For specialized questions or project inquiries, feel free to message me directly on WhatsApp at [**+91 90433 95299**](https://wa.me/919043395299) or email me at [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com). I typically reply within 24 hours!`
    );
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Realistic responsive typing speed (450ms)
    setTimeout(() => {
      const answer = generateAnswer(text);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: answer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to render simple markdown bold and links
  const renderFormattedText = (rawText) => {
    // Split by newlines
    const paragraphs = rawText.split("\n\n");

    return paragraphs.map((para, pIdx) => {
      const lines = para.split("\n");
      return (
        <p key={pIdx} className="mb-2 last:mb-0 leading-relaxed">
          {lines.map((line, lIdx) => {
            // Parse [text](url) and **bold**
            const parts = [];
            const regex = /\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(line)) !== null) {
              if (match.index > lastIndex) {
                parts.push(line.substring(lastIndex, match.index));
              }

              if (match[1] && match[2]) {
                // Link
                parts.push(
                  <a
                    key={`link-${lIdx}-${match.index}`}
                    href={match[2]}
                    target={match[2].startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-[#C2F970] underline hover:text-[#D5FFA0] font-medium"
                    onClick={() => {
                      if (match[2].startsWith("#")) setIsOpen(false);
                    }}
                  >
                    {match[1]}
                  </a>
                );
              } else if (match[3]) {
                // Bold
                parts.push(
                  <strong key={`bold-${lIdx}-${match.index}`} className="text-[#F4F3ED] font-semibold">
                    {match[3]}
                  </strong>
                );
              }

              lastIndex = regex.lastIndex;
            }

            if (lastIndex < line.length) {
              parts.push(line.substring(lastIndex));
            }

            return (
              <span key={lIdx} className="block">
                {parts.length > 0 ? parts : line}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <aside aria-label="Athiq AI Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded Chat Window */}
      {isOpen ? (
        <div className="w-[92vw] sm:w-[410px] h-[550px] max-h-[82vh] bg-[#161916] border border-[#303530] rounded-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-scaleUp">
          {/* Header */}
          <div className="bg-[#1B1E1B] px-4 py-3.5 border-b border-[#303530] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#111311] border border-[#C2F970] flex items-center justify-center font-heading font-extrabold text-xs text-[#F4F3ED]">
                  AK<span className="text-[#C2F970]">.</span>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1B1E1B]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm text-[#F4F3ED]">
                    Athiq Khan AI
                  </h3>
                  <span className="bg-[#C2F970]/15 text-[#C2F970] text-[9px] font-mono px-1.5 py-0.2 rounded border border-[#C2F970]/30 font-semibold">
                    ASSISTANT
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#A5ACA5]">
                  Instant responses · AIML &amp; Web Dev
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://wa.me/919043395299"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp (+91 9043395299)"
                className="p-1.5 rounded-lg text-[#A5ACA5] hover:text-[#25D366] hover:bg-[#202420] transition-colors"
                aria-label="Direct WhatsApp Chat"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#A5ACA5] hover:text-[#F4F3ED] hover:bg-[#202420] transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#111311]/70 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-[#202420] border border-[#303530] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C2F970]" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-xs sm:text-[13px] ${
                    msg.sender === "user"
                      ? "bg-[#C2F970] text-[#111311] font-medium rounded-tr-none shadow-md"
                      : "bg-[#202420] text-[#A5ACA5] border border-[#303530] rounded-tl-none"
                  }`}
                >
                  <div className="text-left break-words">
                    {msg.sender === "bot" ? renderFormattedText(msg.text) : msg.text}
                  </div>
                  <div
                    className={`text-[9px] font-mono mt-1 text-right ${
                      msg.sender === "user" ? "text-[#111311]/70" : "text-[#6E756E]"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#A5ACA5] pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2F970] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2F970] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2F970] animate-bounce [animation-delay:0.4s]" />
                <span className="font-mono text-[11px] text-[#6E756E] ml-1">Athiq AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-3 py-2 bg-[#1B1E1B] border-t border-[#303530]/80 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#111311] border border-[#303530] text-[#A5ACA5] hover:text-[#C2F970] hover:border-[#C2F970]/50 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#161916] border-t border-[#303530]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my projects, skills, or hiring..."
                className="flex-1 bg-[#111311] border border-[#303530] focus:border-[#C2F970] rounded-xl px-3.5 py-2 text-xs text-[#F4F3ED] placeholder-[#6E756E] focus:outline-none transition-colors"
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`p-2 rounded-xl transition-all ${
                  inputValue.trim()
                    ? "bg-[#C2F970] text-[#111311] hover:bg-[#D5FFA0] cursor-pointer shadow-sm"
                    : "bg-[#202420] text-[#6E756E] cursor-not-allowed border border-[#303530]"
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Floating Launcher Button */
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 bg-[#1B1E1B] hover:bg-[#202420] border border-[#303530] hover:border-[#C2F970] pl-3.5 pr-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F970]"
          aria-label="Open Athiq Khan AI Assistant"
        >
          {/* Avatar / Monogram */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#111311] border border-[#C2F970] flex items-center justify-center font-heading font-black text-xs text-[#F4F3ED]">
              AK<span className="text-[#C2F970]">.</span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1B1E1B]" />
          </div>

          <div className="text-left hidden xs:block">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-xs text-[#F4F3ED] group-hover:text-[#C2F970] transition-colors">
                Chat with Athiq AI
              </span>
              <Sparkles className="w-3 h-3 text-[#C2F970]" />
            </div>
            <span className="font-mono text-[10px] text-[#A5ACA5] block">
              Instant Answers
            </span>
          </div>

          {/* Unread dot */}
          {unreadCount > 0 && (
            <span className="w-2 h-2 rounded-full bg-[#C2F970] animate-pulse" />
          )}
        </button>
      )}
    </aside>
  );
}
