import { FiArrowUpRight, FiLayers, FiZap } from "react-icons/fi";
import { Reveal } from "../Reveal/Reveal";
import "./About.css";

export const About = () => (
  <section id="sobre-mi" className="section about" aria-labelledby="about-title">
    <div className="container">
      <Reveal>
        <div className="about-layout">
          <div>
            <p className="eyebrow">01 / SOBRE MÍ</p>
            <h2 id="about-title">
              Visión de producto.
              <br />
              <span className="text-muted">Mentalidad de developer.</span>
            </h2>
            <p className="about-signature">
              Danilo Rivera <FiArrowUpRight />
            </p>
          </div>
          <div className="about-text">
            <p className="about-lead">
              Desarrollo experiencias completas, desde lo que ves hasta lo que las hace funcionar.
            </p>
            <p>
              Soy Full Stack Software Developer con experiencia en aplicaciones web, integración de
              servicios y optimización de rendimiento. Trabajo con JavaScript y TypeScript, React,
              Next.js, NestJS, Node.js y Express.
            </p>
            <p>
              He contribuido a proyectos de e-commerce, turismo, hotelería, telecomunicaciones y
              planificación aeronáutica, combinando experiencia frontend con desarrollo backend e
              integración.
            </p>
            <div className="ai-note">
              <FiZap />
              <p>
                Integro <strong>GitHub Copilot, OpenAI Codex y Claude</strong> en mi flujo de
                trabajo para implementar funcionalidades, analizar código y resolver problemas.
              </p>
            </div>
          </div>
        </div>
        <div className="focus-strip">
          <span>
            <FiLayers /> Experiencias frontend
          </span>
          <span>APIs e integraciones</span>
          <span>Optimización de rendimiento</span>
          <span>Desarrollo con IA</span>
        </div>
      </Reveal>
    </div>
  </section>
);
