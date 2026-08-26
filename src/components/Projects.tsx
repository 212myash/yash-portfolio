import ScrollReveal from "./ScrollReveal";

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string;
  type: string;

  status: "live" | "working";

  liveLink: string;
  githubLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      number: "01",
      title: "Railway Reservation System",
      description:
        "A C++ based railway reservation system using OOP, DSA, vectors and file handling. Includes seat booking and waiting list management.",
      tech: "C++ • DSA • OOP • File Handling",
      type: "SDP PROJECT",
      status: "working",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "02",
      title: "Restaurant Management Website",
      description:
        "A web-based restaurant management project designed to manage restaurant-related information with a clean and simple interface.",
      tech: "HTML • CSS • JavaScript",
      type: "WEB PROJECT",
      status: "live",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "03",
      title: "Sanskrit Yatra App",
      description:
        "A travel-focused application project presented at Science City, designed around exploring Sanskrit and cultural experiences.",
      tech: "Dart • Flutter",
      type: "APP PROJECT",
      status: "live",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "04",
      title: "Swast Care App",
      description:
        "A health monitoring application concept that uses health information and Google Fit data to provide useful health insights.",
      tech: "App Development • Google Fit",
      type: "APP PROJECT",
      status: "working",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "05",
      title: "Shivam Computer Institute Website",
      description:
        "A responsive website created for a computer institute to present courses, information and institute-related content.",
      tech: "HTML • CSS • JavaScript",
      type: "WEB PROJECT",
      status: "working",
      liveLink: "https://sci-zeta.vercel.app/",
      githubLink: "https://github.com/212myash/institute-project.git",
    },

    {
      number: "06",
      title: "The Real-Time Process Monitoring Dashboard",
      description:
        "A real-time process monitoring dashboard designed to monitor and display system process information in an organized interface.",
      tech: "Python",
      type: "PYTHON PROJECT",
      status: "live",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "07",
      title: "Dynamic Lecture Analyzer",
      description:
        "A project focused on analyzing lecture-related information dynamically and presenting useful results through an interactive interface.",
      tech: "JavaScript",
      type: "WEB PROJECT",
      status: "working",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "08",
      title: "AI Payroll Expense Management",
      description:
        "An AI-focused payroll and expense management project designed to organize employee payroll information and manage business expenses.",
      tech: "JavaScript",
      type: "AI / WEB PROJECT",
      status: "working",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "09",
      title: "Bazario",
      description:
        "A mobile application project designed around a modern shopping and marketplace experience.",
      tech: "Dart • Flutter",
      type: "APP PROJECT",
      status: "working",
      liveLink: "",
      githubLink: "",
    },

    {
      number: "10",
      title: "Portfolio",
      description:
        "A modern personal portfolio website showcasing my skills, projects, certifications and development experience.",
      tech: "React • TypeScript • CSS",
      type: "PERSONAL PROJECT",
      status: "live",
      liveLink: "",
      githubLink: "",
    },
  ];

  return (
    <ScrollReveal>
      <section className="projects" id="projects">

        {/* =========================
            SECTION LABEL
        ========================= */}

        <div className="section-label">
          SELECTED WORK
        </div>


        {/* =========================
            HEADING
        ========================= */}

        <div className="projects-heading">

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A collection of projects I've worked on while learning,
            experimenting and solving real-world problems with technology.
          </p>

        </div>


        {/* =========================
            PROJECT LIST
        ========================= */}

        <div className="projects-list">

          {projects.map((project) => (

            <article
              className={`project-card ${
                project.status === "live"
                  ? "project-live"
                  : "project-working"
              }`}
              key={project.number}
            >

              {/* =========================
                  NUMBER
              ========================= */}

              <div className="project-number">
                {project.number}
              </div>


              {/* =========================
                  MAIN CONTENT
              ========================= */}

              <div className="project-main">

                {/* TYPE + STATUS */}

                <div className="project-meta">

                  <p className="project-type">
                    {project.type}
                  </p>

                  <span
                    className={`project-status ${
                      project.status === "live"
                        ? "status-live"
                        : "status-working"
                    }`}
                  >

                    <span className="project-status-dot"></span>

                    {project.status === "live"
                      ? "LIVE"
                      : "CURRENTLY WORKING"}

                  </span>

                </div>


                {/* TITLE */}

                <h3>
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGY */}

                <p className="project-tech">
                  {project.tech}
                </p>


                {/* =========================
                    PROJECT BUTTONS
                ========================= */}

                {/* =========================
    PROJECT BUTTONS
========================= */}

<div className="project-links">

  {/* LIVE DEMO / CURRENTLY WORKING */}

  {project.status === "live" ? (
    <a
      href={project.liveLink || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn project-btn-live"
      onClick={(event) => {
        if (!project.liveLink) {
          event.preventDefault();
        }
      }}
    >
      <span>Live Demo</span>

      <span className="project-btn-arrow">
        ↗
      </span>
    </a>
  ) : (
    <a
      href={project.githubLink || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn project-btn-working"
      onClick={(event) => {
        if (!project.githubLink) {
          event.preventDefault();
        }
      }}
    >
      <span className="project-working-dot"></span>

      <span>Currently Working</span>

      <span className="project-btn-arrow">
        ↗
      </span>
    </a>
  )}


  {/* GITHUB */}

  <a
    href={project.githubLink || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn project-btn-github"
    onClick={(event) => {
      if (!project.githubLink) {
        event.preventDefault();
      }
    }}
  >
    <span className="github-icon">
      {"</>"}
    </span>

    <span>GitHub</span>

    <span className="project-btn-arrow">
      ↗
    </span>
  </a>

</div>

              </div>


            </article>

          ))}

        </div>

      </section>
    </ScrollReveal>
  );
};

export default Projects;