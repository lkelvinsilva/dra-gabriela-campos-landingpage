"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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


  return (
      <header
        className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300
          ${
            scrolled
              ? "bg-[#E8D7D2] shadow-lg backdrop-blur-xl"
              : "bg-[rgba(255, 255, 255, 0.3)] backdrop-blur-md"
          }
        `}
      >
    
      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src="/logo-gc.jpg" className="h-16 w-24" alt="Logo" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 text-[17px] font-semibold justify-center flex-1">
          <a href="#inicio" className="menu-link">Início</a>
          <a href="#sobre" className="menu-link">Sobre</a>
          <a href="#procedimentos" className="menu-link">Procedimentos</a>
          <a href="#resultados" className="menu-link">Resultados</a>
          <a href="#clinica" className="menu-link">Clínica</a>
        </nav>

        {/* BOTÕES DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5585992883317"
            className="px-10 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3"
          >
            <FiPhone className="w-4 h-4" />
            Entre em contato
          </a>

          <a
            href="https://maps.google.com/"
            className="px-10 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3"
          >
            <FiMapPin className="w-4 h-4" />
            Localização
          </a>
        </div>

        {/* BOTÃO MOBILE HAMBÚRGUER */}
        <button
          className="md:hidden text-4xl text-[var(--vinho)] ml-auto"
          onClick={() => setOpenMenu(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* MENU MOBILE + OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[3000] md:hidden
          transition-opacity duration-300
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >

        {/* FUNDO ESCURO */}
          <div
            className="absolute inset-0 menu-overlay z-[3001]"
            onClick={() => setOpenMenu(false)}
          ></div>
        {/* PAINEL LATERAL */}
          <div
            className={`
              absolute right-0 top-0 h-full w-[80%] max-w-[350px]
              menu-panel text-white !text-white p-8 shadow-2xl
              transition-transform duration-300
              ${openMenu ? "translate-x-0" : "translate-x-full"}
              z-[3002]
            `}
          >


          {/* BOTÃO FECHAR */}
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setOpenMenu(false)}
          >
            <FiX />
          </button>

          {/* LOGO MOBILE */}
          <div className="flex flex-col items-center mt-6 mb-10">
            <img src="/logo-gc.jpg" className="w-40 mb-3 rounded-lg" alt="Logo" />
            <p className="text-sm opacity-90">Odontologia Estética</p>
          </div>

          {/* TÍTULO */}
          <h3 className="text-3xl text-center font-semibold mb-2">Menu</h3>
          <div className="w-28 mx-auto h-[2px] bg-white/40 mb-8"></div>

          {/* LINKS */}
          <nav className="flex flex-col items-center gap-6 text-lg mb-6 text-white !text-white">
            <a onClick={() => setOpenMenu(false)} href="#inicio" className="text-white !text-white">Início</a>
            <a onClick={() => setOpenMenu(false)} href="#resultados" className="text-white !text-white">Resultados</a>
            <a onClick={() => setOpenMenu(false)} href="#procedimentos" className="text-white !text-white">Procedimentos</a>
            <a onClick={() => setOpenMenu(false)} href="#sobre" className="text-white !text-white">Sobre</a>
            <a onClick={() => setOpenMenu(false)} href="#clinica" className="text-white !text-white">Clínica</a>
          </nav>

          {/* BOTÕES MOBILE */}
          <div className="mt-4 flex flex-col gap-4">
            <a
              href="https://wa.me/5585992883317"
              className="px-6 py-3 rounded-full border border-white text-white !text-white flex items-center justify-center gap-3"
            >
              <FiPhone />
              Entre em contato!
            </a>

            <a
              href="https://maps.google.com/"
              className="px-6 py-3 rounded-full border border-white text-white !text-white flex items-center justify-center gap-3"
            >
              <FiMapPin />
              Nossa Localização
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
