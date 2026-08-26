import ScrollReveal from "./ScrollReveal";

interface Skill {
  name: string;
  category: string;
  level: string;
  icon: string;
}

const Skills = () => {
  const skills: Skill[] = [
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
      category: "Web Development",
      level: "Web",
      icon: "/icons/html-css.png",
    },
    {
      name: "JavaScript",
      category: "Web Development",
      level: "Web",
      icon: "/icons/javascript.png",
    },
    {
      name: "React",
      category: "Web Development",
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
      name: "Networking",
      category: "Computer Science",
      level: "Core",
      icon: "/icons/networking.png",
    },
    {
      name: "Linux",
      category: "Computer Science",
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
      name: "MongoDB",
      category: "Database",
      level: "NoSQL",
      icon: "/icons/mongodb.png",
    },

    {
      name: "AI / Machine Learning",
      category: "AI & Data",
      level: "AI",
      icon: "/icons/ai.png",
    },
    {
      name: "Data Analytics",
      category: "AI & Data",
      level: "Analytics",
      icon: "/icons/data-analytics.png",
    },

    {
      name: "UI / UX",
      category: "Tools & Design",
      level: "Design",
      icon: "/icons/ui-ux.png",
    },
    {
      name: "Git / GitHub",
      category: "Tools & Design",
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

  const categoryOrder = [
    "Programming",
    "Web Development",
    "Mobile Development",
    "Computer Science",
    "Database",
    "AI & Data",
    "Tools & Design",
    "Achievement",
  ];

  const groupedSkills = categoryOrder
    .map((category) => ({
      category,
      skills: skills.filter(
        (skill) => skill.category === category
      ),
    }))
    .filter((group) => group.skills.length > 0);

  let skillNumber = 0;

  return (
    <ScrollReveal>
      <section className="skills" id="skills">

        {/* =========================
            SECTION LABEL
        ========================= */}

        <div className="section-label">
          MY SKILLS
        </div>


        {/* =========================
            MAIN HEADING
        ========================= */}

        <div className="skills-heading">

          <div>
            <h2>
              Tools I use to
              <span> build things.</span>
            </h2>
          </div>

          <p>
            Technologies, programming concepts and
            tools I use while developing applications,
            websites and solving programming problems.
          </p>

        </div>


        {/* =========================
            CATEGORY LIST
        ========================= */}

        <div className="skills-categories">

          {groupedSkills.map(
            ({ category, skills: categorySkills }, categoryIndex) => {

              return (
                <div
                  className="skill-category-section"
                  key={category}
                >

                  {/* =========================
                      CATEGORY HEADER
                  ========================= */}

                  <div className="skill-category-heading">

                    <div className="skill-category-title">

                      <span className="skill-category-number">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="skill-category-line"></span>

                      <h3>
                        {category}
                      </h3>

                    </div>


                    <div className="skill-category-meta">

                      <span>
                        {String(categorySkills.length).padStart(2, "0")}
                      </span>

                      <small>
                        SKILLS
                      </small>

                    </div>

                  </div>


                  {/* =========================
                      SKILL GRID
                  ========================= */}

                  <div className="skills-grid">

                    {categorySkills.map((skill) => {

                      skillNumber++;

                      return (
                        <div
                          className="skill-card"
                          key={skill.name}
                        >

                          {/* NUMBER */}

                          <div className="skill-number">
                            {String(skillNumber).padStart(2, "0")}
                          </div>


                          {/* CONTENT */}

                          <div className="skill-content">

                            <h4>
                              {skill.name}
                            </h4>

                            <p className="skill-level">
                              {skill.level}
                            </p>

                          </div>


                          {/* ICON */}

                          <div className="skill-image-box">

                            <img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="skill-image"
                            />

                          </div>
                        </div>
                      );
                    })}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </section>
    </ScrollReveal>
  );
};

export default Skills;