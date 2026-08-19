import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <section className="about" id="about">
        <div className="section-label">ABOUT ME</div>

        <div className="about-content">
          <div className="about-title">
            <h2>
              Turning ideas into
              <span> digital experiences.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm Yash Raj, a Computer Science Engineering student and
              developer who enjoys building websites, applications and
              technology-driven projects.
            </p>

            <p>
              I like solving problems with code and learning new
              technologies. My experience includes web development,
              app development, programming and data structures.
            </p>

            <p>
              Currently, I'm pursuing my B.Tech in Computer Science
              Engineering at Lovely Professional University.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Projects</p>
              </div>

              <div className="stat">
                <h3>3+</h3>
                <p>Months Experience</p>
              </div>

              <div className="stat">
                <h3>CSE</h3>
                <p>Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;