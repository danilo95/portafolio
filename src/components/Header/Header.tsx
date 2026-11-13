import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((previous) => !previous);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Danilo Rivera, inicio"
          onClick={closeMenu}
        >
          Danilo<span>.dev</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="navigation"
          className={`navigation ${isOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
        >
          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>
          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#tecnologias" onClick={closeMenu}>
            Tecnologías
          </a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>
            Hablemos <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
};
