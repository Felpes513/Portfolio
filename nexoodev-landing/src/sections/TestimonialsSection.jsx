import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rafael Monteiro da Silva",
    role: "CEO",
    company: "VerdeMais Soluções Ambientais",
    text: "A NexooDev entendeu nosso desafio desde o início e entregou uma solução robusta, intuitiva e que otimizou nossos processos. Profissionais comprometidos e muito parceiros.",
    initials: "RM",
    accent: true,
    animation: "floating-card-a",
    rotation: "lg:-rotate-[1.5deg]",
  },
  {
    id: 2,
    name: "Mariana Lopes Ferreira",
    role: "Diretora",
    company: "Colégio Horizonte",
    text: "Nosso novo site trouxe mais credibilidade e facilitou a comunicação com alunos e famílias. A equipe é atenta, ágil e entrega com qualidade em cada detalhe.",
    initials: "ML",
    accent: false,
    animation: "floating-card-b",
    rotation: "lg:rotate-[1.5deg]",
  },
  {
    id: 3,
    name: "Lucas Andrade Ribeiro",
    role: "Fundador",
    company: "FitTrack App",
    text: "Do planejamento ao lançamento, a NexooDev foi essencial. Entregaram nosso app com excelente performance e uma experiência impecável para os usuários.",
    initials: "LA",
    accent: false,
    animation: "floating-card-c",
    rotation: "lg:-rotate-[1.5deg]",
  },
  {
    id: 4,
    name: "Juliana Paiva dos Santos",
    role: "Marketing Manager",
    company: "Clínica Harmonia",
    text: "A NexooDev trouxe clareza e organização para nosso projeto. O resultado superou as expectativas e hoje colhemos os frutos de uma parceria que fez a diferença.",
    initials: "JP",
    accent: true,
    animation: "floating-card-d",
    rotation: "lg:rotate-[1.5deg]",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article
      className={`floating-card ${testimonial.animation} ${testimonial.rotation}
      w-full rounded-[1.8rem] border p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
        testimonial.accent
          ? "border-emerald-400/40 bg-emerald-400/[0.055]"
          : "border-white/14 bg-white/[0.055]"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-white/12 text-sm font-black text-white">
            {testimonial.initials}
          </div>

          <div>
            <h3 className="max-w-[260px] text-base font-black leading-tight tracking-[-0.02em] text-white md:text-lg">
              {testimonial.name}
            </h3>

            <p className="mt-1 text-xs leading-5 text-white/55 md:text-sm">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>

        <Quote
          className={
            testimonial.accent
              ? "min-w-7 text-emerald-400/85"
              : "min-w-7 text-white/35"
          }
          size={28}
          strokeWidth={2.2}
        />
      </div>

      <div className="mb-4 flex items-center gap-1 text-emerald-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={14} fill="currentColor" />
        ))}
      </div>

      <p className="text-sm leading-7 text-white/82 md:text-[0.95rem]">
        "{testimonial.text}"
      </p>
    </article>
  );
}

function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(34,211,238,0.06),transparent_30%)]" />

      <div className="absolute left-[-140px] top-36 hidden h-[420px] w-[420px] rounded-[6rem] border border-white/10 lg:block" />
      <div className="absolute right-[-120px] bottom-28 hidden h-[360px] w-[360px] rounded-[6rem] border border-white/10 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-emerald-400 md:block" />

            <span className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
              Depoimentos
            </span>

            <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-emerald-400 md:block" />
          </div>

          <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[4.4rem]">
            O que dizem sobre nosso trabalho
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Histórias reais de empresas e pessoas que confiaram na{" "}
            <span className="font-semibold text-emerald-400">NexooDev</span>{" "}
            para transformar ideias em soluções digitais de impacto.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={
                index === 0
                  ? "lg:-translate-y-4"
                  : index === 1
                  ? "lg:translate-y-3"
                  : index === 2
                  ? "lg:-translate-y-1"
                  : "lg:translate-y-5"
              }
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/55 md:justify-center">
            <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-emerald-400/70 md:block" />
            <span>
              Confiança, clareza e resultado. Esses são os pilares de cada entrega
              da{" "}
              <span className="font-semibold text-emerald-400">NexooDev</span>.
            </span>
            <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-emerald-400/70 md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;