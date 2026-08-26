import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* =========================
          FOOTER MAIN
      ========================= */}

      <div className="footer-container">

        {/* =========================
            BRAND
        ========================= */}

        <div className="footer-brand">
          <div className="footer-logo">
            YASH<span>.</span>
          </div>

          <p>
            Computer Science Engineering student and developer passionate
            about building modern digital experiences.
          </p>

          <a
            href="mailto:212myashraj@gmail.com"
            className="footer-email"
          >
            212myashraj@gmail.com
          </a>
        </div>

        {/* =========================
            NAVIGATION
        ========================= */}

        <div className="footer-column">
          <span className="footer-heading">NAVIGATION</span>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>

        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-column footer-contact">
          <span className="footer-heading">CONTACT</span>

          <div className="footer-contact-item">
            <span>NAME</span>
            <p>Yash Raj</p>
          </div>

          <div className="footer-contact-item">
            <span>ADDRESS</span>
            <p>
              S/O: Arbind Kumar Modi, Shivam Computer Infotech,
              Sakuntla Market, A.G. Colony Ashiananagar,
              P.O. Ashiananagar, Patna, Bihar – 800025.
            </p>
          </div>

          <div className="footer-contact-item">
            <span>PHONE</span>
            <a href="tel:+916206825865">
              +91 6206825865
            </a>
          </div>

          <div className="footer-contact-item">
            <span>EMAIL</span>
            <a href="mailto:212myashraj@gmail.com">
              212myashraj@gmail.com
            </a>
          </div>
        </div>

        {/* =========================
            SOCIAL / CONNECT
        ========================= */}

        <div className="footer-column">
          <span className="footer-heading">CONNECT</span>

          {/* GitHub */}
          <a
            href="https://github.com/212myash"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaGithub className="footer-social-icon" />
            <span>GitHub</span>
            <span className="footer-social-arrow">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yash-raj-9602a8271/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaLinkedin className="footer-social-icon" />
            <span>LinkedIn</span>
            <span className="footer-social-arrow">↗</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yash_raj_620_6/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaInstagram className="footer-social-icon" />
            <span>Instagram</span>
            <span className="footer-social-arrow">↗</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/19S7QuuZp4/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaFacebookF className="footer-social-icon" />
            <span>Facebook</span>
            <span className="footer-social-arrow">↗</span>
          </a>
        </div>

      </div>

      {/* =========================
          DIVIDER
      ========================= */}

      <div className="footer-line"></div>

      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">
        <p>
          © {currentYear} Yash Raj. All rights reserved.
        </p>

        <p className="footer-built">
          Designed & built with curiosity, code & creativity.
        </p>

        <a href="#top" className="back-top">
          Back to top
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;