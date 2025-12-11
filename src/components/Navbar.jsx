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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 shadow-lg backdrop-blur-xl" : "bg-white/70 backdrop-blur-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  
      </div>
        

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src="/logo-gc.jpg" className="h-16 w-24" alt="Logo" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 text-[17px] font-semibold justify-center w-full">
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
          className="px-10 py-3 rounded-full bg-[var(--vinho)] text-white !text-white
         flex items-center justify-center gap-3 
         whitespace-nowrap"

        
        >
          <FiPhone className="w-4 h-4 text-white flex-shrink-0"/>
          Entre em contato
        </a>

        <a
          href="https://maps.google.com/"
          className="px-10 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3"
        >
          <FiMapPin className="w-4 h-4 text-white flex-shrink-0" />
          Localização
        </a>

      </div>
      {/* BOTÃO MENU MOBILE (hamburguer) */}
      <button
        className="md:hidden text-4xl text-[var(--vinho)] relative z-[10001]"
        onClick={() => setOpenMenu(true)}
      >
        <FiMenu />
      </button>

      {/* MENU MOBILE + OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[9999] flex md:hidden
          transition-opacity duration-300
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >


        {/* FUNDO ESCURO */}
        <div
          className="absolute inset-0 bg-[#6B1F3A] backdrop-blur-sm"
          onClick={() => setOpenMenu(false)}
        ></div>

        {/* PAINEL LATERAL */}
        <div
          className={`
            relative ml-auto h-full w-[80%] max-w-[350px]
            bg-[var(--vinho-2)] text-white p-8 shadow-2xl
            transition-transform duration-300
            ${openMenu ? "translate-x-0" : "translate-x-full"}
            z-[10000]
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

          {/* TÍTULO MENU */}
          <h3 className="text-3xl text-center font-semibold mb-2">Menu</h3>
          <div className="w-28 mx-auto h-[2px] bg-white/40 mb-8"></div>

          {/* LINKS */}
          <nav className="flex flex-col items-center texr-white !text-white gap-6 text-lg mb-6">
            <a onClick={() => setOpenMenu(false)} href="#inicio">Início</a>
            <a onClick={() => setOpenMenu(false)} href="#resultados">Resultados</a>
            <a onClick={() => setOpenMenu(false)} href="#procedimentos">Procedimentos</a>
            <a onClick={() => setOpenMenu(false)} href="#sobre">Sobre</a>
            <a onClick={() => setOpenMenu(false)} href="#clinica">Clínica</a>
          </nav>

          {/* BOTÕES DO MENU MOBILE */}
          <div className="mt-4 flex flex-col gap-4">
            <a
              href="https://wa.me/5585992883317"
              className="px-6 py-3 rounded-full bg-[var(--vinho)] text-white !text-white flex items-center justify-center gap-3 md:translate-x-[-40px]"
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



