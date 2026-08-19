const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-label">GET IN TOUCH</div>

      <div className="contact-content">
        <div className="contact-heading">
          <h2>
            Let's build
            <span> something together.</span>
          </h2>

          <p>
            Have a project idea, internship opportunity or just want to
            say hello? Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:212myashraj@gmail.com"
            className="contact-link"
          >
            <div>
              <span className="contact-label">EMAIL</span>
              <h3>Gmail.</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://github.com/212myash"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-label">GITHUB</span>
              <h3>GitHub Profile</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/yash-raj-9602a8271/"
            target="_blank"
            rel="noop ener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-label">LINKEDIN</span>
              <h3>LinkedIn Profile</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;