import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";

export const App = () => (
  <>
    <a className="skip-link" href="#main">
      Saltar al contenido
    </a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
    <Footer />
  </>
);
