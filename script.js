// ===== util =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// ===== menu mobile =====
const sidenav = $('#sidenav');
const btnToggleMenu = $('#btnToggleMenu');

function abrirMenu() {
  sidenav.classList.add('aberto');
  document.body.classList.add('menu-aberto');
  if (btnToggleMenu) btnToggleMenu.setAttribute('aria-expanded', 'true');
}
function fecharMenu() {
  sidenav.classList.remove('aberto');
  document.body.classList.remove('menu-aberto');
  if (btnToggleMenu) btnToggleMenu.setAttribute('aria-expanded', 'false');
}
function toggleMenu() {
  if (sidenav.classList.contains('aberto')) fecharMenu();
  else abrirMenu();
}

btnToggleMenu?.addEventListener('click', toggleMenu);

// Fecha ao clicar em qualquer link do menu (só faz algo se estiver aberto)
const navLinks = $$('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const hash = link.getAttribute('href');
    const alvo = hash && hash.startsWith('#') ? document.querySelector(hash) : null;

    if (alvo) {
      e.preventDefault();               // evita pulo instantâneo
      fecharMenu();                     // fecha o menu
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', hash);
    } else {
      // se for link externo, só fecha o menu mesmo
      fecharMenu();
    }
  });
});

// ===== scrollspy (destaca link ativo conforme a seção na tela) =====
const sections = $$('main section[id]');
const byId = {};
navLinks.forEach(link => { byId[link.dataset.section] = link; });

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.remove('active'));
        const link = byId[id];
        if (link) link.classList.add('active');
      }
    });
  },
  { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
);

sections.forEach(sec => observer.observe(sec));

const BREAKPOINT = 768;

function aplicarResponsivo() {
  if (window.innerWidth <= BREAKPOINT) {
    // mobile: começa fechado
    document.body.classList.remove('menu-aberto');
    sidenav.classList.remove('aberto');
  } else {
    // desktop: garante que não há classe de mobile aplicada
    document.body.classList.remove('menu-aberto');
    sidenav.classList.remove('aberto');
  }
}

// fecha/ajusta ao carregar e ao redimensionar
window.addEventListener('load', aplicarResponsivo);
window.addEventListener('resize', aplicarResponsivo);
window.addEventListener('orientationchange', aplicarResponsivo);
