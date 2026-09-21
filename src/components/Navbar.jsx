"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#clinica", label: "Clínica" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Só permite o portal depois que o componente montou no client (evita erro de hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [openMenu]);

  // Fecha o menu mobile com a tecla Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-black/5"
              : "bg-white/20 backdrop-blur-md"
          }
        `}
      >
        {/* CONTAINER PRINCIPAL */}
        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ease-out
            ${scrolled ? "py-2 md:py-3" : "py-4 md:py-5"}
          `}
        >
          {/* LOGO */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.gc.png"
              alt="Dra. Gabriela Campos — Odontologia"
              className={`w-auto object-contain transition-all duration-500 ease-out
                ${scrolled ? "h-11 md:h-12" : "h-14 md:h-16"}
              `}
            />
          </a>

          {/* MENU DESKTOP */}
          <nav
            aria-label="Menu principal"
            className="hidden md:flex items-center gap-9 text-[15px] font-medium tracking-wide uppercase justify-center flex-1 mx-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[var(--vinho)]/90 hover:text-[var(--vinho)] transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0
                  after:bg-[var(--vinho)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* BOTÕES DESKTOP */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--vinho)]/30
                text-[var(--vinho)] text-sm font-medium hover:bg-[var(--vinho)]/5 transition-colors duration-200"
            >
              <FiMapPin className="w-4 h-4" />
              Localização
            </a>

            <a
              href="https://wa.me/5585991355731"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--vinho)] text-white text-sm font-medium
                shadow-[0_4px_16px_rgba(107,39,55,0.35)] hover:shadow-[0_6px_20px_rgba(107,39,55,0.45)]
                hover:-translate-y-0.5 transition-all duration-200"
            >
              <FiPhone className="w-4 h-4" />
              Agendar consulta
            </a>
          </div>

          {/* BOTÃO MOBILE HAMBÚRGUER */}
          <button
            aria-label="Abrir menu"
            className="md:hidden text-3xl text-[var(--vinho)] ml-auto p-1"
            onClick={() => setOpenMenu(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/*
        MENU MOBILE renderizado via PORTAL direto em document.body.
        Isso é necessário porque o <header> usa backdrop-blur, e backdrop-filter
        cria um novo "containing block" para descendentes com position:fixed —
        ou seja, sem o portal, o "fixed inset-0" abaixo ficaria preso às
        dimensões do header, não da viewport inteira.
      */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[3000] md:hidden transition-opacity duration-300
              ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
          >
            {/* FUNDO ESCURO */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[3001]"
              onClick={() => setOpenMenu(false)}
            />

            {/* PAINEL LATERAL */}
            <div
              className={`fixed right-0 top-0 h-full w-[82%] max-w-[360px] overflow-y-auto
                bg-gradient-to-b from-[var(--vinho)] to-[#3d1620] text-white p-8 shadow-2xl
                transition-transform duration-500 ease-out
                ${openMenu ? "translate-x-0" : "translate-x-full"}
                z-[3002]
              `}
            >
              {/* BOTÃO FECHAR */}
              <button
                aria-label="Fechar menu"
                className="absolute top-6 right-6 text-2xl p-1 hover:opacity-70 transition-opacity"
                onClick={() => setOpenMenu(false)}
              >
                <FiX />
              </button>

              {/* LOGO MOBILE */}
              <div className="flex flex-col items-center mt-6 mb-10">
                <img
                  src="/logo.gc.png"
                  alt="Dra. Gabriela Campos — Odontologia"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-95 mb-3"
                />
                <p className="text-xs tracking-[0.2em] uppercase opacity-70">
                  Odontologia Estética
                </p>
              </div>

              <div className="w-16 mx-auto h-[1px] bg-white/25 mb-8" />

              {/* LINKS */}
              <nav
                aria-label="Menu principal mobile"
                className="flex flex-col items-center gap-7 text-base font-light tracking-wide uppercase mb-10"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    onClick={() => setOpenMenu(false)}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* BOTÕES MOBILE */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5585991355731"
                  className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white text-[var(--vinho)]
                    text-sm font-semibold shadow-lg"
                >
                  <FiPhone className="w-4 h-4" />
                  Agendar consulta
                </a>

                <a
                  href="https://maps.google.com/"
                  className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/40
                    text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200"
                >
                  <FiMapPin className="w-4 h-4" />
                  Nossa localização
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
