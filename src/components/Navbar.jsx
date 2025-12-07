// Navbar.jsx
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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white/90 shadow-lg backdrop-blur-xl" : "bg-white/70 backdrop-blur-md"}
    `}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="flex items-center">
          <img src="/logo-gc.jpg" className="h-18 w-26" alt="Logo" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 text-[17px] font-semibold justify-center w-full">
          <a href="#inicio" className="menu-link">Início</a>
          <a href="#sobre" className="menu-link">Sobre</a>
          <a href="#procedimentos" className="menu-link">Procedimentos</a>
          <a href="#resultados" className="menu-link">Resultados</a>
          <a href="#clinica" className="menu-link">Clínica</a>
        </nav>
        {/* BOTOES DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5585992883317"
            className="px-6 py-3 rounded-full bg-[var(--vinho)] text-white !text-white whitespace-nowrap flex items-center justify-center gap-3"
          >
            <FiPhone />
            Entre em contato
          </a>

          <a
            href="https://maps.google.com/"
            className="px-6 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3"
          >
            <FiMapPin />
            Localização
          </a>
        </div>


        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden text-4xl text-[var(--vinho)]"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div className={`
        fixed top-0 right-0 h-full w-[80%] bg-white shadow-2xl p-8 flex flex-col gap-8 
        transition-transform duration-300 md:hidden
        ${openMenu ? "translate-x-0" : "translate-x-full"}
      `}>
        <a onClick={() => setOpenMenu(false)} href="#inicio" className="menu-mobile">Início</a>
        <a onClick={() => setOpenMenu(false)} href="#sobre" className="menu-mobile">Sobre</a>
        <a onClick={() => setOpenMenu(false)} href="#procedimentos" className="menu-mobile">Procedimentos</a>
        <a onClick={() => setOpenMenu(false)} href="#resultados" className="menu-mobile">Resultados</a>
        <a onClick={() => setOpenMenu(false)} href="#clinica" className="menu-mobile">Clínica</a>

        {/* BOTOES */}
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="https://wa.me/5585992883317"
            className="px-6 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3"
          >
            <FiPhone />
            Entre em contato
          </a>

          <a
            href="https://maps.google.com/"
            className="px-6 py-3 rounded-full bg-[var(--vinho-2)] text-white !text-white flex items-center justify-center gap-3"
          >
            <FiMapPin />
            Localização
          </a>
        </div>
      </div>
    </header>
  );
}
