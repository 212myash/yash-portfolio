const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-label">EXPERIENCE</div>

      <div className="experience-heading">
        <h2>
          My journey in
          <span> technology.</span>
        </h2>

        <p>
          Practical experience in mobile application development,
          backend integration, database management and UI design.
        </p>
      </div>

      <div className="experience-card">
        {/* DURATION */}
        <div className="experience-date">
          <strong>3 MONTHS</strong>
          <span>JUNE 2025 — AUGUST 2025</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="experience-main">
          <p className="experience-type">
            PROFESSIONAL EXPERIENCE
          </p>

          <h3>
            Flutter Developer
          </h3>

          <h4>
            Abha Kasya Thali Therapy Center
          </h4>

          <p className="experience-description">
            Developed a mobile application for Abha Kasya Thali Therapy
            Center to manage client records, services and a
            subscription-based recharge system with a user-friendly
            interface.
          </p>

          {/* RESPONSIBILITIES */}
          <div className="experience-responsibilities">
            <p>
              Designed the complete mobile application UI and developed
              a cross-platform application using Flutter.
            </p>

            <p>
              Created client registration, login and dashboard screens
              with smooth navigation and structured application flow.
            </p>

            <p>
              Integrated API-ready architecture using Node.js,
              Express.js and REST APIs for backend communication.
            </p>

            <p>
              Designed database structure and managed data flow for
              client records using MongoDB.
            </p>

            <p>
              Developed recharge and subscription modules along with
              a real-time client dashboard interface.
            </p>
          </div>

          {/* TECH STACK */}
          <div className="experience-tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
            <span>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;