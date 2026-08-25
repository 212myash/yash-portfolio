import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        YASH<span>.</span>
      </div>

      {/* DESKTOP MENU */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certificates">Certificates</a>
        <a href="#projects">Projects</a>

        {/* RESUME */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#certificates" onClick={closeMenu}>
          Certificates
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        {/* MOBILE RESUME */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-talk"
          onClick={closeMenu}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;