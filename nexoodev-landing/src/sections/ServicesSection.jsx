const services = [
  {
    number: "01",
    title: "Landing Pages",
    description:
      "Páginas estratégicas que apresentam seu produto ou serviço, captam contatos e geram conversões com foco em resultado.",
  },
  {
    number: "02",
    title: "Sites Institucionais",
    description:
      "Sites profissionais que fortalecem sua presença digital, transmitem confiança e posicionam sua empresa no mercado.",
  },
  {
    number: "03",
    title: "Sistemas Web",
    description:
      "Aplicações completas com front-end, back-end, autenticação, regras de negócio e banco de dados seguros.",
  },
  {
    number: "04",
    title: "APIs e Integrações",
    description:
      "Desenvolvimento de APIs, modelagem de dados e integrações entre sistemas e plataformas para automatizar processos.",
  },
];

function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#050914] px-6 py-28 text-white lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_28%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.06),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="mb-6 inline-block text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
            Serviços
          </span>

          <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-[4.2rem]">
            Do site ao sistema, criamos soluções digitais para empresas que
            querem vender, organizar e crescer.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/62 md:text-lg">
            Projetamos experiências digitais e construímos soluções sob medida,
            do front-end ao back-end, com foco em performance, clareza e
            resultado.
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-6 border-b border-white/10 py-10 transition duration-300 first:border-t md:grid-cols-[170px_1fr]"
            >
              <div className="relative flex items-start gap-6">
                <span className="text-7xl font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(16,185,129,0.28)] transition duration-300 group-hover:[-webkit-text-stroke:1px_rgba(16,185,129,0.65)]">
                  {service.number}
                </span>

                <span className="mt-2 hidden h-28 w-px bg-gradient-to-b from-emerald-400 via-emerald-400/70 to-transparent md:block" />
              </div>

              <div className="pt-1">
                <h3 className="text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-7xl">
        <div className="flex items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/50 md:justify-center">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-emerald-400/70 md:block" />
          <span>
            Também cuidamos de deploy, domínio, hospedagem e configuração
            inicial em cloud.
          </span>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-emerald-400/70 md:block" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;