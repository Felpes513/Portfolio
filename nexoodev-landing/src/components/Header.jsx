import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full px-5 transition-all duration-300 lg:px-20 ${
        isScrolled ? "py-4" : "py-7"
      }`}
    >
      <div className="relative flex items-center justify-between">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center rounded-2xl bg-emerald-400 font-black text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 ${
              isScrolled ? "h-10 w-10 text-sm" : "h-11 w-11 text-base"
            }`}
          >
            N
          </div>

          <span
            className={`font-bold tracking-tight text-white transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            NexooDev
          </span>
        </a>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border px-5 py-2.5 text-sm font-medium shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-300 md:flex ${
            isScrolled
              ? "border-white/12 bg-[#0b1018]/75 text-white/80"
              : "border-white/10 bg-white/[0.075] text-white/75"
          }`}
        >
          <HeaderLink href="#servicos">Serviços</HeaderLink>
          <HeaderLink href="#depoimentos">Depoimentos</HeaderLink>
          <HeaderLink href="#contato">Contato</HeaderLink>
        </nav>

        <a
          href="#contato"
          className={`hidden items-center gap-2 rounded-full bg-emerald-400 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 sm:flex ${
            isScrolled ? "px-5 py-3" : "px-6 py-3.5"
          }`}
        >
          Solicitar orçamento
          <ArrowUpRight size={17} strokeWidth={2.4} />
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white backdrop-blur-xl md:hidden"
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#0b1018]/90 p-4 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            <MobileHeaderLink href="#servicos" onClick={closeMenu}>
              Serviços
            </MobileHeaderLink>

            <MobileHeaderLink href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </MobileHeaderLink>

            <MobileHeaderLink href="#contato" onClick={closeMenu}>
              Contato
            </MobileHeaderLink>

            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950"
            >
              Solicitar orçamento
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeaderLink({ href, children }) {
  return (
    <a
      className="rounded-full px-5 py-2 transition hover:bg-white/10 hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
}

function MobileHeaderLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default Header;