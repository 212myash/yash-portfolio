import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const skills = [
    {
      name: "C / C++",
      category: "Programming",
      level: "Core",
      icon: "/icons/cpp.png",
    },
    {
      name: "Python",
      category: "Programming",
      level: "Core",
      icon: "/icons/python.png",
    },
    {
      name: "Java",
      category: "Programming",
      level: "Core",
      icon: "/icons/java.png",
    },
    {
      name: "HTML / CSS",
      category: "Frontend",
      level: "Web",
      icon: "/icons/html-css.png",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      level: "Web",
      icon: "/icons/javascript.png",
    },
    {
      name: "React",
      category: "Frontend",
      level: "Web",
      icon: "/icons/react.png",
    },
    {
      name: "Flutter",
      category: "Mobile Development",
      level: "App",
      icon: "/icons/flutter.png",
    },
    {
      name: "DSA",
      category: "Computer Science",
      level: "Core",
      icon: "/icons/dsa.png",
    },
    {
      name: "Database",
      category: "Computer Science",
      level: "Backend",
      icon: "/icons/database.png",
    },
    {
      name: "MongoDB",
      category: "Database",
      level: "NoSQL",
      icon: "/icons/mongodb.png",
    },
    {
      name: "Networking",
      category: "Computer Science",
      level: "Core",
      icon: "/icons/networking.png",
    },
    {
      name: "Linux",
      category: "Operating System",
      level: "System",
      icon: "/icons/linux.png",
    },
    {
      name: "Operating Systems",
      category: "Computer Science",
      level: "Core",
      icon: "/icons/os.png",
    },
    {
      name: "UI / UX",
      category: "Design",
      level: "Design",
      icon: "/icons/ui-ux.png",
    },
    {
      name: "AI / Machine Learning",
      category: "Artificial Intelligence",
      level: "AI",
      icon: "/icons/ai.png",
    },
    {
      name: "Data Analytics",
      category: "Data",
      level: "Analytics",
      icon: "/icons/data-analytics.png",
    },
    {
      name: "Git / GitHub",
      category: "Tools",
      level: "Development",
      icon: "/icons/github.png",
    },
    {
      name: "NCC",
      category: "Achievement",
      level: "Certificate",
      icon: "/icons/ncc.png",
    },
  ];

  return (
    <ScrollReveal>
      <section className="skills" id="skills">

        {/* SECTION LABEL */}
        <div className="section-label">
          MY SKILLS
        </div>

        {/* HEADING */}
        <div className="skills-heading">
          <h2>
            Tools I use to
            <span> build things.</span>
          </h2>

          <p>
            Technologies, programming concepts and
            tools I use while developing applications,
            websites and solving programming problems.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
            >

              {/* NUMBER */}
              <div className="skill-number">
                {index + 1}
              </div>

              {/* CONTENT */}
              <div className="skill-content">
                <p className="skill-category">
                  {skill.category}
                </p>

                <h3>{skill.name}</h3>

                <p className="skill-level">
                  {skill.level}
                </p>
              </div>

              {/* SKILL IMAGE */}
              <div className="skill-image-box">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="skill-image"
                />
              </div>

              {/* ARROW */}
              <div
                className="skill-arrow"
                aria-hidden="true"
              >
                ↗
              </div>

            </div>
          ))}
        </div>

      </section>
    </ScrollReveal>
  );
};

export default Skills;