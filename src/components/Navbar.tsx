import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    "about",
    "skills",
    "certificates",
    "projects",
    "experience",
    "contact",
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      // Hero ke andar ho to koi highlight nahi
      if (window.scrollY < 250) {
        setActiveSection("");
        return;
      }

      const checkPoint = window.scrollY + 120;
      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= checkPoint) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    // Page load / direct #section ke liye
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

return (
  <nav className="navbar">
    <a href="/" className="nav-logo">
      <img src="/image/Logo1.png" alt="Yash Raj" />
    </a>

      {/* DESKTOP MENU */}
      <div className="nav-links">
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#certificates"
          className={
            activeSection === "certificates" ? "active" : ""
          }
          onClick={closeMenu}
        >
          Certificates
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        {/* RESUME */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a
          href="#experience"
          className={
            activeSection === "experience" ? "active" : ""
          }
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
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
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#certificates"
          className={
            activeSection === "certificates" ? "active" : ""
          }
          onClick={closeMenu}
        >
          Certificates
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>

        <a
          href="#experience"
          className={
            activeSection === "experience" ? "active" : ""
          }
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
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