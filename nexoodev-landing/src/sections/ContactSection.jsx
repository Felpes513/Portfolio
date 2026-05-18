import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import PhoneMockup from "../components/PhoneMockup";

function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(34,211,238,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-10 lg:px-16 lg:py-16">
          <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,1)]" />
          <div className="absolute right-[-120px] top-16 hidden h-[420px] w-[420px] rounded-[6rem] border border-emerald-400/15 lg:block" />
          <div className="absolute right-[-40px] bottom-[-80px] hidden h-[320px] w-[320px] rounded-full bg-emerald-400/5 blur-3xl lg:block" />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="mb-6 inline-block text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
                Contato
              </span>

              <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-[4.5rem]">
                Vamos tirar sua ideia do papel
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/68 md:text-lg">
                Se você precisa de uma landing page, site institucional, sistema
                web, API ou estrutura digital para o seu negócio, a{" "}
                <span className="font-semibold text-emerald-400">NexooDev</span>{" "}
                pode ajudar a transformar sua ideia em uma solução profissional,
                moderna e pronta para crescer.
              </p>

              <div className="mt-9 space-y-5">
                <ContactBenefit text="Atendimento direto e objetivo" />
                <ContactBenefit text="Soluções sob medida para o seu negócio" />
                <ContactBenefit text="Do front-end ao back-end" />
                <ContactBenefit text="Deploy, domínio e estrutura inicial" />
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5511934409921"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  <MessageCircle size={19} />
                  Falar no WhatsApp
                </a>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-400/35 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Ver portfólio
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/50">
                <ShieldCheck size={18} className="text-white/55" />
                <span>
                  WhatsApp, e-mail e portfólio para começar seu projeto com
                  clareza.
                </span>
              </div>
            </div>

            <div>
              <PhoneMockup />
            </div>

            <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2 text-xs text-white/45">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              Atendimento direto para entender seu projeto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBenefit({ text }) {
  return (
    <div className="flex items-center gap-4 text-white/75">
      <CheckCircle2 size={21} className="text-emerald-400" />
      <span>{text}</span>
    </div>
  );
}

function ChatBubble({ side, children }) {
  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-[1.35rem] px-4 py-3 text-[13px] leading-6 shadow-sm ${
          isRight
            ? "rounded-br-md bg-emerald-500/80 text-white"
            : "rounded-bl-md border border-white/6 bg-white/[0.06] text-white/82"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ContactSection;
