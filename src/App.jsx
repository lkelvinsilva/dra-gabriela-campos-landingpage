import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesCarousel from "./components/ServicesCarousel";
import Harmonizacao from "./components/Harmonizacao";
import Estratificacao from "./components/Estratificacao";
import Results from "./components/Results";
import MissaoValores from "./components/mission";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Links from "./Links";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PÁGINA DE ENTRADA */}
        <Route path="/" element={<Links />} />

        {/* SITE PRINCIPAL */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />

              <main>
                <Hero />
                <About />
                <ServicesCarousel />
                <Harmonizacao />
                <Estratificacao />
                <Results />
                <MissaoValores />
                <Testimonials />
                <Footer />
              </main>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}