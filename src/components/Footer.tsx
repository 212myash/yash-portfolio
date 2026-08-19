const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          YASH<span>.</span>
        </div>

        <p>
          Designed & built with curiosity, code and creativity.
        </p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yash Raj. All rights reserved.</p>

        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;