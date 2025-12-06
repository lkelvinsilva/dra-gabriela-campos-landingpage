"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta se está sobre seção escura
  useEffect(() => {
    const darkSections = document.querySelectorAll(".section-dark");
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.some((entry) => entry.isIntersecting);
        setIsDark(active);
      },
      { threshold: 0.4 }
    );

    darkSections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-transparent/90 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-gc.jpg"
            className="h-22 w-auto object-contain"
            alt="Logo Dra Gabriela"
          />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 font-semibold text-[17px]">
          <a href="#inicio" className="menu-link">Início</a>
          <a href="#sobre" className="menu-link">Sobre</a>  
          <a href="#procedimentos" className="menu-link">Procedimentos</a>
          <a href="#resultados" className="menu-link">Resultados</a>
          <a
            href="https://portfolio-gabriela-gray.vercel.app/"
            className="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dra Gabriela Campos
          </a>
        </nav>

        {/* BOTÕES */}
        <div className="hidden md:flex gap-4 items-center">
          
          <a
            href="https://wa.me/5585992883317"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-[var(--vinho)] text-white !text-white font-serif tracking-wide shadow-md hover:bg-[var(--vinho-2)] transition flex items-center gap-2"
          >
            <FiPhone className="text-base" />
            Entre em contato
          </a>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-[var(--vinho)] text-white !text-white font-serif tracking-wide shadow-md hover:bg-[var(--vinho-2)] transition flex items-center gap-2"
          >
            <FiMapPin className="text-base" />
            Localização
          </a>
        </div>

        {/* MENU MOBILE */}
        <button
          className="md:hidden text-4xl text-[var(--vinho)]"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {openMenu && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg px-6 py-4 flex flex-col gap-4">
          <a href="#inicio" className="menu-mobile" onClick={() => setOpenMenu(false)}>Início</a>
          <a href="#resultados" className="menu-mobile" onClick={() => setOpenMenu(false)}>Resultados</a>
          <a href="#procedimentos" className="menu-mobile" onClick={() => setOpenMenu(false)}>Procedimentos</a>
          <a href="#sobre" className="menu-mobile" onClick={() => setOpenMenu(false)}>Sobre</a>
          <a href="#clinica" className="menu-mobile" onClick={() => setOpenMenu(false)}>Clínica</a>

          <a
            href="https://wa.me/5585992883317"
            target="_blank"
            className="px-6 py-2 rounded-full bg-[var(--vinho)] text-white !text-white text-center mt-2 flex items-center justify-center gap-2"
          >
            <FiPhone className="text-lg" />
            Entre em contato
          </a>

          <a
            href="https://maps.google.com/"
            target="_blank"
            className="px-6 py-2 rounded-full bg-[var(--vinho-2)] text-white !text-white text-center flex items-center justify-center gap-2"
          >
            <FiMapPin className="text-lg" />
            Localização
          </a>
        </div>
      )}
    </header>
  );
}
