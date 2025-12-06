import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="/logo.png" alt="Logo" className="logo" />

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato" className="btn-agendar">
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
