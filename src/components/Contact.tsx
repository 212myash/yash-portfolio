const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* SECTION LABEL */}
      <div className="section-label">GET IN TOUCH</div>

      {/* HEADING */}
      <div className="contact-content">
        <div className="contact-heading">
          <h2>
            Let's build
            <span> something together.</span>
          </h2>

          <p>
            Have a project idea, internship opportunity or just want to say
            hello? Feel free to get in touch with me.
          </p>
        </div>

        {/* =========================
            WORK & PROFESSIONAL
        ========================= */}

        <div className="contact-category">
          <div className="contact-category-heading">
            <span className="contact-category-line"></span>
            <span>WORK &amp; PROFESSIONAL</span>
          </div>

          <div className="contact-links">
            {/* GMAIL */}
            <a href="mailto:212myashraj@gmail.com" className="contact-link">
              <div>
                <span className="contact-label">EMAIL</span>
                <h3>Gmail</h3>
                <p>212myashraj@gmail.com</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P1.jpg" alt="My Profile" />
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/212myash"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">CODE</span>
                <h3>GitHub</h3>
                <p>View my repositories</p>
              </div>

              <div className="contact-profile">
                <img
                  src="https://github.com/212myash.png"
                  alt="GitHub Profile"
                />
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/yash-raj-9602a8271/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">PROFESSIONAL</span>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P2.jpeg" alt="LinkedIn Profile" />
              </div>
            </a>
          </div>
        </div>

        {/* =========================
            SOCIAL MEDIA
        ========================= */}

        <div className="contact-category">
          <div className="contact-category-heading">
            <span className="contact-category-line"></span>
            <span>SOCIAL MEDIA</span>
          </div>

          <div className="contact-links">
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/yash_raj_620_6/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">SOCIAL</span>
                <h3>Instagram</h3>
                <p>Follow me on Instagram</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P6.png" alt="Instagram Profile" />
              </div>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/19S7QuuZp4/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">SOCIAL</span>
                <h3>Facebook</h3>
                <p>Connect with me</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P8.png" alt="Facebook Profile" />
              </div>
            </a>

            {/* SNAPCHAT */}
            <a
              href="https://www.snapchat.com/add/yaashraj_2007?share_id=5J77cWaTkdA&locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">SOCIAL</span>
                <h3>Snapchat</h3>
                <p>Connect with me</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P7.png" alt="Snapchat Profile" />
              </div>
            </a>
          </div>
        </div>

        {/* =========================
            DIRECT CONTACT
        ========================= */}

        <div className="contact-category">
          <div className="contact-category-heading">
            <span className="contact-category-line"></span>
            <span>DIRECT CONTACT</span>
          </div>

          <div className="contact-links">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/+916206825865"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">MESSAGE</span>
                <h3>WhatsApp</h3>
                <p>yash_raj_620_6</p>
              </div>

              <div className="contact-profile">
                <img src="/socal/P5.png" alt="WhatsApp Profile" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
