import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Mail, MessageCircle } from "lucide-react";

const conversation = [
  {
    side: "left",
    text: "Olá! Gostaria de solicitar um orçamento para uma landing page.",
  },
  {
    side: "right",
    text: "Olá! Será um prazer ajudar 🚀 Criamos páginas modernas, rápidas e focadas em conversão.",
  },
  {
    side: "left",
    text: "Preciso de algo profissional e direcionado para WhatsApp.",
  },
  {
    side: "right",
    text: "Perfeito. Vou te enviar um briefing rápido para entender objetivo, público e referências.",
  },
];

function PhoneMockup() {
  const phoneRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const element = phoneRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const timeouts = [];

    const sendNextMessage = () => {
      if (currentIndex >= conversation.length) {
        setIsTyping(false);
        return;
      }

      const nextMessage = conversation[currentIndex];

      if (!nextMessage) {
        setIsTyping(false);
        return;
      }

      setIsTyping(true);

      const typingTimeout = setTimeout(
        () => {
          setMessages((currentMessages) => [...currentMessages, nextMessage]);

          currentIndex += 1;
          setIsTyping(false);

          if (currentIndex < conversation.length) {
            const nextMessageTimeout = setTimeout(sendNextMessage, 850);
            timeouts.push(nextMessageTimeout);
          }
        },
        currentIndex === 0 ? 500 : 900,
      );

      timeouts.push(typingTimeout);
    };

    sendNextMessage();

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [hasStarted]);

  return (
    <div ref={phoneRef} className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute -left-10 top-20 hidden h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl lg:block" />
      <div className="absolute -right-8 bottom-20 hidden h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl lg:block" />

      <div className="relative mx-auto w-[320px]">
        <div className="absolute -left-[3px] top-[100px] z-20 h-8 w-[3px] rounded-full bg-[#2a2a2e]" />
        <div className="absolute -left-[3px] top-[140px] z-20 h-14 w-[3px] rounded-full bg-[#2a2a2e]" />
        <div className="absolute -left-[3px] top-[200px] z-20 h-14 w-[3px] rounded-full bg-[#2a2a2e]" />
        <div className="absolute -right-[3px] top-[160px] z-20 h-20 w-[3px] rounded-full bg-[#2a2a2e]" />

        <div className="relative rounded-[55px] bg-[#1a1a1e] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_30px_60px_-30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <div className="absolute inset-[1px] rounded-[54px] bg-gradient-to-b from-[#3a3a3e] via-[#1a1a1e] to-[#0a0a0e] opacity-50" />

          <div className="relative overflow-hidden rounded-[43px] bg-[#0c1015]">
            <div className="relative flex h-[52px] items-end justify-between bg-[#0f171e] px-6 pb-2">
              <span className="text-[15px] font-semibold text-white">
                16:34
              </span>

              <div className="absolute left-1/2 top-[10px] -translate-x-1/2">
                <div className="flex h-[32px] w-[120px] items-center justify-center rounded-full bg-black">
                  <div className="absolute right-[22px] h-[12px] w-[12px] rounded-full bg-[#1a1a2e] shadow-[inset_0_0_3px_rgba(0,0,0,0.8)]">
                    <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0f0f1a]">
                      <div className="absolute left-[1px] top-[1px] h-[2px] w-[2px] rounded-full bg-[#2a2a4a]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex items-end gap-[2px]">
                  <div className="h-[4px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[6px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[8px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[10px] w-[3px] rounded-sm bg-white" />
                </div>

                <svg
                  className="h-[16px] w-[16px] text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4.9-2.3l1.4 1.4C9.4 16.4 10.6 16 12 16s2.6.4 3.5 1.1l1.4-1.4C15.6 14.6 13.9 14 12 14s-3.6.6-4.9 1.7zm-2.8-2.8l1.4 1.4C7.3 13 9.5 12 12 12s4.7 1 6.3 2.3l1.4-1.4C17.7 11.1 15 10 12 10s-5.7 1.1-7.7 2.9zm-2.8-2.8l1.4 1.4C5.1 10.1 8.3 9 12 9s6.9 1.1 9.1 2.5l1.4-1.4C19.9 8.1 16.2 7 12 7s-7.9 1.1-10.5 3.1z" />
                </svg>

                <div className="flex items-center gap-1">
                  <span className="text-[13px] font-medium text-white">82</span>
                  <div className="relative flex items-center">
                    <div className="h-[13px] w-[25px] rounded-[4px] border-[1.5px] border-white p-[2px]">
                      <div className="h-full w-[75%] rounded-[2px] bg-white" />
                    </div>
                    <div className="absolute -right-[3px] h-[6px] w-[2px] rounded-r-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center gap-2 border-b border-white/10 bg-[#0f171e] px-3 py-3">
              <ChevronLeft className="h-6 w-6 text-emerald-400" />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                N
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-semibold text-white">
                    NexooDev
                  </span>
                  <svg
                    className="h-4 w-4 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-[12px] text-emerald-400">online</span>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <MessageCircle className="h-5 w-5" />
                <Mail className="h-5 w-5" />
              </div>
            </div>

            <div className="relative min-h-[340px] space-y-3 bg-[#0a1118] px-3 py-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_50%)]" />
              {messages.filter(Boolean).map((message, index) => (
                <ChatBubble key={index} side={message.side}>
                  {message.text}
                </ChatBubble>
              ))}
              {isTyping && (
                <TypingBubble
                  side={conversation[messages.length]?.side || "left"}
                />
              )}{" "}
            </div>

            <div className="border-t border-white/10 bg-[#0f171e] px-3 py-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
                <span className="flex-1 text-[14px] text-white/40">
                  Mensagem
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="flex justify-center bg-[#0f171e] pb-2 pt-1">
              <div className="h-[5px] w-[135px] rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[50px] top-[20px] h-[200px] w-[60px] rotate-[20deg] rounded-full bg-gradient-to-b from-white/10 to-transparent blur-xl" />
        <div className="pointer-events-none absolute right-[30px] top-[60px] h-[100px] w-[30px] rotate-[-15deg] rounded-full bg-gradient-to-b from-white/5 to-transparent blur-lg" />
      </div>

      <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 text-xs text-white/50">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
        Atendimento direto para entender seu projeto
      </div>
    </div>
  );
}

function ChatBubble({ side, children }) {
  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`animate-message-in max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
          isRight
            ? "rounded-br-md bg-emerald-500 text-white"
            : "rounded-bl-md border border-white/10 bg-white/10 text-white/90"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function TypingBubble({ side }) {
  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex items-center gap-1 rounded-2xl px-4 py-3 ${
          isRight
            ? "rounded-br-md bg-emerald-500/80"
            : "rounded-bl-md border border-white/10 bg-white/10"
        }`}
      >
        <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-white/60 [animation-delay:0.15s]" />
        <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-white/60 [animation-delay:0.3s]" />
      </div>
    </div>
  );
}

export default PhoneMockup;
