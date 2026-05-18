import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050914] px-6 text-white lg:px-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente moderno representando presença digital"
          className="h-full w-full object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/85 to-[#050914]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-[#050914]/40" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center pt-28">
        <div className="max-w-3xl">
          <h1 className="max-w-3xl text-[2.9rem] font-black leading-[1] tracking-[-0.045em] text-white md:text-[4.6rem] lg:text-[5.2rem]">
            Criamos presença digital para negócios que querem vender mais
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Desenvolvemos landing pages modernas, rápidas e estratégicas para
            transformar visitantes em contatos, orçamentos e clientes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Quero minha landing page
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.08] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 z-10 hidden items-center justify-between border-t border-white/10 pt-7 text-xs text-white/45 lg:left-20 lg:right-20 lg:flex">
          <span>© NexooDev 2026</span>

          <span className="flex items-center gap-3">
            Sites, landing pages e sistemas web
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;