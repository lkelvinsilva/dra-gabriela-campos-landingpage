import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ServicesCarousel from "./components/ServicesCarousel";
import ServicesWeb from "./components/ServicesGrid";
import Harmonizacao from "./components/Harmonizacao"; 
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServicesCarousel />
        <ServicesWeb />
        <Harmonizacao />
        <Results />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

