import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { links } from "../../utils/links";
import { Reveal } from "../Reveal/Reveal";
import "./Hero.css";

export const Hero = () => (
  <section id="inicio" className="hero container" aria-labelledby="hero-title">
    <Reveal>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> FULL STACK SOFTWARE DEVELOPER
          </p>
          <h1 id="hero-title">
            Ideas claras.
            <br />
            Código sólido.
            <br />
            <span>Experiencias reales.</span>
          </h1>
          <p className="hero-intro">
            Soy <strong>Danilo Rivera.</strong> Conecto frontend, backend e integraciones para
            construir aplicaciones web que hacen que las cosas sucedan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Explorar proyectos <FiArrowUpRight />
            </a>
            <a
              className="github-link"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub /> Mi GitHub <FiArrowUpRight />
            </a>
          </div>
          <p className="hero-note">
            <span /> De la interfaz a la infraestructura.
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-coordinates">13.69° N &nbsp; / &nbsp; DIGITAL CRAFT</div>
          <div className="code-cube">
            <span>&lt;</span>
            <span>/</span>
            <span>&gt;</span>
          </div>
          <div className="floating-label label-front">
            <span className="mini-dot" /> frontend.tsx
          </div>
          <div className="floating-label label-back">
            <span className="mini-dot" /> backend.ts
          </div>
          <div className="art-caption">
            <span>BUILD. CONNECT. IMPROVE.</span>
            <span>↗</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>REACT / TYPESCRIPT / NESTJS / NODE.JS</span>
        <a href="#sobre-mi">
          Conoce mi trabajo <FiArrowDown />
        </a>
      </div>
    </Reveal>
  </section>
);
