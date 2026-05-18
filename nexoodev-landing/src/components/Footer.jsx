import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#050914] px-6 pb-8 pt-20 text-white lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-base font-black text-slate-950 shadow-lg shadow-emerald-500/20">
                N
              </div>

              <span className="text-2xl font-black tracking-tight text-white">
                NexooDev
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Desenvolvimento de landing pages, sites institucionais, sistemas
              web, APIs, banco de dados e integrações para negócios que querem
              crescer com tecnologia.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialLink
                href="https://wa.me/5511934409921"
                label="WhatsApp"
                icon={MessageCircle}
              />

              <SocialLink
                href="mailto:seuemail@email.com"
                label="E-mail"
                icon={Mail}
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white/80">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <FooterLink href="#servicos">Serviços</FooterLink>
              <FooterLink href="#depoimentos">Depoimentos</FooterLink>
              <FooterLink href="#contato">Contato</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white/80">
              Serviços
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <FooterLink href="#servicos">Landing Pages</FooterLink>
              <FooterLink href="#servicos">Sites Institucionais</FooterLink>
              <FooterLink href="#servicos">Sistemas Web</FooterLink>
              <FooterLink href="#servicos">APIs e Integrações</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white/80">
              Vamos conversar?
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Tem uma ideia, projeto ou precisa modernizar a presença digital do
              seu negócio?
            </p>

            <a
              href="https://wa.me/5511934409921"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-slate-950"
            >
              Solicitar orçamento
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} NexooDev. Todos os direitos reservados.</p>

          <p>Criado com foco em performance, clareza e resultado.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="transition hover:text-emerald-400">
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
    >
      <Icon size={18} />
    </a>
  );
}

export default Footer;