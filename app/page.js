import Hero from "./sections/Hero";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Harmonizacao from "../src/components/Harmonizacao";
import Results from "../src/components/Results";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Harmonizacao />
      <Results />
      <Testimonials />
      <Footer />
    </main>
  );
}
