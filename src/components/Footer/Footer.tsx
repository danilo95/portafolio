import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { links } from "../../utils/links";
import { Reveal } from "../Reveal/Reveal";
import "./Footer.css";

export const Footer = () => (
  <footer id="contacto" className="footer container">
    <Reveal>
      <div className="contact-layout">
        <div>
          <p className="eyebrow">04 / SIGUIENTE PASO</p>
          <h2>
            Las buenas ideas
            <br />
            empiezan con una
            <br />
            <span>conversación.</span>
          </h2>
          <p>
            ¿Un proyecto en mente o una oportunidad para colaborar?
            <br />
            Conectemos y construyamos algo que importe.
          </p>
        </div>
        <a
          className="contact-button"
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> Hablemos en LinkedIn <FiArrowUpRight />
        </a>
      </div>
      <div className="footer-bottom">
        <a className="wordmark" href="#inicio">
          Danilo<span>.dev</span>
        </a>
        <p>© {new Date().getFullYear()} Danilo Rivera</p>
        <div className="footer-social">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <SiGithub /> GitHub <FiArrowUpRight />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /> LinkedIn <FiArrowUpRight />
          </a>
          <a href="#inicio" aria-label="Volver al inicio" className="back-top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </Reveal>
  </footer>
);
