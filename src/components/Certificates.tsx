import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface RelatedProject {
  name: string;
  description: string;
}

interface RelatedSkill {
  name: string;
  description: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  file: string;
  projects: RelatedProject[];
  skills: RelatedSkill[];
}

const certificates: Certificate[] = [
  {
    title: "AI-Enabled Applications for Customer Service",
    issuer: "AI / Customer Service",
    file: "/certificates/AI-Enabled Applications for Customer Service_page_1.jpg",
    projects: [
      {
        name: "AI-based Projects",
        description:
          "Applying AI concepts and problem-solving approaches to build technology-driven solutions.",
      },
    ],
    skills: [
      {
        name: "Artificial Intelligence",
        description:
          "Understanding and applying AI concepts to practical problems.",
      },
      {
        name: "Problem Solving",
        description:
          "Using logical and technology-driven approaches to solve real-world challenges.",
      },
    ],
  },

  {
    title: "AI-Powered Chatbots",
    issuer: "Artificial Intelligence",
    file: "/certificates/AI-Powered Chatbots_page_1.jpg",
    projects: [
      {
        name: "AI-based Projects",
        description:
          "Applying AI concepts and problem-solving approaches to build technology-driven solutions.",
      },
    ],
    skills: [
      {
        name: "Artificial Intelligence",
        description:
          "Understanding and applying AI concepts to practical problems.",
      },
      {
        name: "Problem Solving",
        description:
          "Using logical and technology-driven approaches to solve real-world challenges.",
      },
    ],
  },

  {
    title: "AI-Powered Ticket Routing and",
    issuer: "Artificial Intelligence",
    file: "/certificates/AI-Powered Ticket Routing and_page_1.jpg",
    projects: [
      {
        name: "AI-based Projects",
        description:
          "Applying AI concepts and problem-solving approaches to build technology-driven solutions.",
      },
    ],
    skills: [
      {
        name: "Artificial Intelligence",
        description:
          "Understanding and applying AI concepts to practical problems.",
      },
      {
        name: "Problem Solving",
        description:
          "Using logical and technology-driven approaches to solve real-world challenges.",
      },
    ],
  },

  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Data Analytics",
    file: "/certificates/Ask Questions to Make Data-Driven Decisions_page_1.jpg",
    projects: [
      {
        name: "AI-based Projects",
        description:
          "Applying AI concepts and problem-solving approaches to build technology-driven solutions.",
      },
    ],
    skills: [
      {
        name: "Artificial Intelligence",
        description:
          "Understanding and applying AI concepts to practical problems.",
      },
      {
        name: "Problem Solving",
        description:
          "Using logical and technology-driven approaches to solve real-world challenges.",
      },
    ],
  },

  {
    title: "Build a Mobile App with Firebase",
    issuer: "Mobile Development",
    file: "/certificates/Build a Mobile App with Firebase_page_1.jpg",
    projects: [
      {
        name: "Swast Care App",
        description:
          "A mobile application concept involving user-focused UI, application logic and app development.",
      },
    ],
    skills: [
      {
        name: "Flutter",
        description:
          "Cross-platform mobile application development.",
      },
      {
        name: "App Development",
        description:
          "Building mobile applications with structured UI and application logic.",
      },
    ],
  },

  {
    title: "Building an App with Code Agents and MongoDB",
    issuer: "MongoDB",
    file: "/certificates/Building an App with Code Agents and MongoDB_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Database concepts are used for storing and managing reservation-related information.",
      },
      {
        name: "Web Application Projects",
        description:
          "MongoDB concepts support document-based data storage for application features.",
      },
    ],
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-based NoSQL database concepts, collections, documents and database management.",
      },
      {
        name: "Database",
        description:
          "Understanding of data storage, organization and application data management.",
      },
    ],
  },

  {
    title: "Certificate of CSDT",
    issuer: "CSDT IT Solution",
    file: "/certificates/Certificate of CSDT.jpg",
    projects: [
      {
        name: "Web & App Development Projects",
        description:
          "Practical development experience involving programming, websites and applications.",
      },
    ],
    skills: [
      {
        name: "Programming",
        description:
          "Practical programming and problem-solving experience.",
      },
      {
        name: "Web Development",
        description:
          "Building modern websites and digital experiences.",
      },
    ],
  },

  {
    title: "Certificate of Internship – Navodita Infotech",
    issuer: "Navodita Infotech",
    file: "/certificates/CERTIFICATE OF INTERNSHIP Navodita Infotech_page_1.jpg",
    projects: [
      {
        name: "Web & App Development Projects",
        description:
          "Practical development experience involving programming, websites and applications.",
      },
    ],
    skills: [
      {
        name: "Programming",
        description:
          "Practical programming and problem-solving experience.",
      },
      {
        name: "Web Development",
        description:
          "Building modern websites and digital experiences.",
      },
    ],
  },

  {
    title: "Certificate of Merit – Two-Tech 2025",
    issuer: "Pushpa Gujral Science City",
    file: "/certificates/Certificate of Merit by Pushpa Gujral Science City.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Pushpa Gujral Science City",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "Connecting to a MongoDB Database Using the MongoDB Shell",
    issuer: "MongoDB",
    file: "/certificates/Connecting to a MongoDB Database Using the MongoDB Shell_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Database concepts are used for storing and managing reservation-related information.",
      },
      {
        name: "Web Application Projects",
        description:
          "MongoDB concepts support document-based data storage for application features.",
      },
    ],
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-based NoSQL database concepts, collections, documents and database management.",
      },
      {
        name: "Database",
        description:
          "Understanding of data storage, organization and application data management.",
      },
    ],
  },

  {
    title: "Create a Credly Account",
    issuer: "Credly",
    file: "/certificates/Create a Credly account_page_1.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Credly",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "Data Structures",
    issuer: "Computer Science",
    file: "/certificates/Data Structures_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Data structures are used to organize and manage application data and operations.",
      },
    ],
    skills: [
      {
        name: "DSA",
        description:
          "Arrays, vectors, searching, sorting and other data-structure concepts.",
      },
    ],
  },

  {
    title: "Earn it! Accept it! Share it!",
    issuer: "Professional Development",
    file: "/certificates/Earn it! Accept it! Share it!_page_1.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Professional Development",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "Flutter and Dart – Developing iOS, Android, and",
    issuer: "Flutter",
    file: "/certificates/Flutter and Dart Developing iOS, Android, and_page_1.jpg",
    projects: [
      {
        name: "Swast Care App",
        description:
          "A mobile application concept involving user-focused UI, application logic and app development.",
      },
    ],
    skills: [
      {
        name: "Flutter",
        description:
          "Cross-platform mobile application development.",
      },
      {
        name: "App Development",
        description:
          "Building mobile applications with structured UI and application logic.",
      },
    ],
  },

  {
    title: "Foundations – Data, Data, Everywhere",
    issuer: "Google / Data",
    file: "/certificates/Foundations - Data, Data, Everywhere_page_1.jpg",
    projects: [
      {
        name: "Data and Web Projects",
        description:
          "Data concepts are used to organize, analyze and present useful application information.",
      },
    ],
    skills: [
      {
        name: "Data Analytics",
        description:
          "Understanding data organization, exploration and analysis.",
      },
      {
        name: "Database",
        description:
          "Fundamentals of storing, organizing and managing application data.",
      },
    ],
  },

  {
    title: "Fundamentals of UI/UX Design",
    issuer: "UI / UX",
    file: "/certificates/Fundamentals of UI-UX Design_page_1.jpg",
    projects: [
      {
        name: "Portfolio Website",
        description:
          "UI/UX principles are applied to create a clean, responsive and user-focused interface.",
      },
    ],
    skills: [
      {
        name: "UI / UX",
        description:
          "Design principles for usable, clear and visually consistent digital experiences.",
      },
    ],
  },

  {
    title: "Getting Started with MongoDB Atlas",
    issuer: "MongoDB",
    file: "/certificates/Getting started with mongoDB atlas_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Database concepts are used for storing and managing reservation-related information.",
      },
      {
        name: "Web Application Projects",
        description:
          "MongoDB concepts support document-based data storage for application features.",
      },
    ],
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-based NoSQL database concepts, collections, documents and database management.",
      },
      {
        name: "Database",
        description:
          "Understanding of data storage, organization and application data management.",
      },
    ],
  },

  {
    title: "Hands-on Introduction to Linux Commands and",
    issuer: "Linux",
    file: "/certificates/Hands-on Introduction to Linux Commands and_page_1.jpg",
    projects: [
      {
        name: "Computer Science Projects",
        description:
          "Operating-system concepts support system-level understanding and application development.",
      },
    ],
    skills: [
      {
        name: "Linux",
        description:
          "Command-line and operating-system fundamentals.",
      },
      {
        name: "Operating Systems",
        description:
          "Understanding of system resources, processes and core OS concepts.",
      },
    ],
  },

  {
    title: "India AI Impact Buildathon – Certificate of Participation",
    issuer: "HCL GUVI",
    file: "/certificates/HCL GUVI Certification .png",
    projects: [
      {
        name: "AI-based Projects",
        description:
          "Applying AI concepts and problem-solving approaches to build technology-driven solutions.",
      },
    ],
    skills: [
      {
        name: "Artificial Intelligence",
        description:
          "Understanding and applying AI concepts to practical problems.",
      },
      {
        name: "Problem Solving",
        description:
          "Using logical and technology-driven approaches to solve real-world challenges.",
      },
    ],
  },

  {
    title: "Internship Offer Letter – Navodita Infotech",
    issuer: "Navodita Infotech",
    file: "/certificates/Internship Offer Letter Navodita Infotech_page_1.jpg",
    projects: [
      {
        name: "Web & App Development Projects",
        description:
          "Practical development experience involving programming, websites and applications.",
      },
    ],
    skills: [
      {
        name: "Programming",
        description:
          "Practical programming and problem-solving experience.",
      },
      {
        name: "Web Development",
        description:
          "Building modern websites and digital experiences.",
      },
    ],
  },

  {
    title: "Introduction to Contemporary Operating Systems",
    issuer: "Operating Systems",
    file: "/certificates/Introduction to Contemporary Operating Systems_page_1.jpg",
    projects: [
      {
        name: "Computer Science Projects",
        description:
          "Operating-system concepts support system-level understanding and application development.",
      },
    ],
    skills: [
      {
        name: "Linux",
        description:
          "Command-line and operating-system fundamentals.",
      },
      {
        name: "Operating Systems",
        description:
          "Understanding of system resources, processes and core OS concepts.",
      },
    ],
  },

  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Operating Systems",
    file: "/certificates/Introduction to Hardware and Operating Systems_page_1.jpg",
    projects: [
      {
        name: "Computer Science Projects",
        description:
          "Operating-system concepts support system-level understanding and application development.",
      },
    ],
    skills: [
      {
        name: "Linux",
        description:
          "Command-line and operating-system fundamentals.",
      },
      {
        name: "Operating Systems",
        description:
          "Understanding of system resources, processes and core OS concepts.",
      },
    ],
  },

  {
    title: "Introduction to Relational Databases (RDBMS)",
    issuer: "Database",
    file: "/certificates/Introduction to Relational Databases (RDBMS)_page_1.jpg",
    projects: [
      {
        name: "Data and Web Projects",
        description:
          "Data concepts are used to organize, analyze and present useful application information.",
      },
    ],
    skills: [
      {
        name: "Data Analytics",
        description:
          "Understanding data organization, exploration and analysis.",
      },
      {
        name: "Database",
        description:
          "Fundamentals of storing, organizing and managing application data.",
      },
    ],
  },

  {
    title: "Introduction to the Internet of Things and",
    issuer: "Internet of Things",
    file: "/certificates/Introduction to the Internet of Things and_page_1.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Internet of Things",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "Knowledge Management Systems and Customer Analytics",
    issuer: "Data Analytics",
    file: "/certificates/Knowledge Management Systems and Customer Analytics_page_1.jpg",
    projects: [
      {
        name: "Data and Web Projects",
        description:
          "Data concepts are used to organize, analyze and present useful application information.",
      },
    ],
    skills: [
      {
        name: "Data Analytics",
        description:
          "Understanding data organization, exploration and analysis.",
      },
      {
        name: "Database",
        description:
          "Fundamentals of storing, organizing and managing application data.",
      },
    ],
  },

  {
    title: "MongoDB and the Document Model",
    issuer: "MongoDB",
    file: "/certificates/MongoDB and the Document Model_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Database concepts are used for storing and managing reservation-related information.",
      },
      {
        name: "Web Application Projects",
        description:
          "MongoDB concepts support document-based data storage for application features.",
      },
    ],
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-based NoSQL database concepts, collections, documents and database management.",
      },
      {
        name: "Database",
        description:
          "Understanding of data storage, organization and application data management.",
      },
    ],
  },

  {
    title: "MongoDB Basics for Students – Academia Event",
    issuer: "MongoDB",
    file: "/certificates/MongoDB Basics for Students Academia Event - 20260626 - India Student Skillathon 2026_page_1.jpg",
    projects: [
      {
        name: "Railway Reservation System",
        description:
          "Database concepts are used for storing and managing reservation-related information.",
      },
      {
        name: "Web Application Projects",
        description:
          "MongoDB concepts support document-based data storage for application features.",
      },
    ],
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-based NoSQL database concepts, collections, documents and database management.",
      },
      {
        name: "Database",
        description:
          "Understanding of data storage, organization and application data management.",
      },
    ],
  },

  {
    title: "NCC Certificate 'A'",
    issuer: "National Cadet Corps",
    file: "/certificates/NCC Certificate A.jpg",
    projects: [],
    skills: [
      {
        name: "Discipline",
        description:
          "Demonstrates discipline, responsibility and commitment developed through NCC training.",
      },
      {
        name: "Leadership",
        description:
          "Experience in teamwork, responsibility and structured activities through NCC.",
      },
    ],
  },

  {
    title: "Object Oriented Programming in Java",
    issuer: "Java",
    file: "/certificates/Object Oriented Programming in Java_page_1.jpg",
    projects: [
      {
        name: "Java Projects",
        description:
          "Object-oriented programming concepts are applied to build structured applications.",
      },
    ],
    skills: [
      {
        name: "Java",
        description:
          "Object-oriented programming and application development using Java.",
      },
      {
        name: "OOP",
        description:
          "Encapsulation, inheritance, polymorphism and abstraction.",
      },
    ],
  },

  {
    title: "Prepare Data for Exploration",
    issuer: "Data Analytics",
    file: "/certificates/Prepare Data for Exploration_page_1.jpg",
    projects: [
      {
        name: "Data and Web Projects",
        description:
          "Data concepts are used to organize, analyze and present useful application information.",
      },
    ],
    skills: [
      {
        name: "Data Analytics",
        description:
          "Understanding data organization, exploration and analysis.",
      },
      {
        name: "Database",
        description:
          "Fundamentals of storing, organizing and managing application data.",
      },
    ],
  },

  {
    title: "Principles of Management",
    issuer: "Management",
    file: "/certificates/Principles of Management_page_1.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Management",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "SkillsCert Certificate",
    issuer: "Skills / Professional Development",
    file: "/certificates/SkillsCert20260817-21-ucj5mz_page_1.jpg",
    projects: [
      {
        name: "Portfolio & College Projects",
        description:
          "The learning from this certification supports practical development and project work.",
      },
    ],
    skills: [
      {
        name: "Skills / Professional Development",
        description:
          "Knowledge and practical concepts gained through this certification.",
      },
    ],
  },

  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Computer Networking",
    file: "/certificates/The Bits and Bytes of Computer Networking_page_1.jpg",
    projects: [
      {
        name: "Networking Projects",
        description:
          "Networking concepts support communication, connectivity and application infrastructure.",
      },
    ],
    skills: [
      {
        name: "Networking",
        description:
          "Fundamentals of computer networking and communication.",
      },
    ],
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  // Initially show 6 certificates
  const [visibleCount, setVisibleCount] = useState(6);

  // Lock background scroll when certificate viewer is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  // Close viewer with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================
  // VIEW MORE LOGIC
  // =========================

  const handleViewMore = () => {
    if (visibleCount < 10) {
      setVisibleCount(10);
    } else if (visibleCount < 20) {
      setVisibleCount(20);
    } else if (visibleCount < 30) {
      setVisibleCount(30);
    } else {
      setVisibleCount(certificates.length);
    }
  };

  const visibleCertificates = certificates.slice(
    0,
    visibleCount
  );

  const hasMoreCertificates =
    visibleCount < certificates.length;

  return (
    <>
      <ScrollReveal>
        <section
          className="certificates"
          id="certificates"
        >
          {/* =========================
              SECTION LABEL
          ========================= */}

          <div className="section-label">
            CERTIFICATES
          </div>

          {/* =========================
              HEADING
          ========================= */}

          <div className="certificates-heading">
            <div>
              <h2>
                Proof of my
                <span> learning.</span>
              </h2>
            </div>

            <p>
              Certifications, achievements and learning
              experiences that support my technical skills
              and projects.
            </p>
          </div>

          {/* =========================
              CERTIFICATE GRID
          ========================= */}

          <div className="certificates-grid">
            {visibleCertificates.map(
              (certificate, index) => (
                <button
                  key={`${certificate.title}-${index}`}
                  className="certificate-card-new"
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                >
                  {/* PREVIEW */}

                  <div className="certificate-preview-new">
                    <img
                      src={certificate.file}
                      alt={certificate.title}
                      loading="lazy"
                    />

                    <div className="certificate-overlay-new">
                      <span>
                        VIEW CERTIFICATE ↗
                      </span>
                    </div>
                  </div>

                  {/* INFO */}

                  <div className="certificate-card-info">
                    <div>
                      <span className="certificate-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="certificate-issuer">
                        {certificate.issuer}
                      </span>
                    </div>

                    <h3>
                      {certificate.title}
                    </h3>

                    {certificate.date && (
                      <p>
                        {certificate.date}
                      </p>
                    )}
                  </div>
                </button>
              )
            )}
          </div>

          {/* =========================
              VIEW MORE BUTTON
          ========================= */}

          {hasMoreCertificates && (
            <div className="certificates-view-more">
              <button
                type="button"
                className="view-more-certificates"
                onClick={handleViewMore}
              >
                View More
                <span>↓</span>
              </button>
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* =========================
          FULL SCREEN CERTIFICATE
      ========================= */}

      {selectedCertificate && (
        <div
          className="certificate-fullscreen"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >
          <div
            className="certificate-fullscreen-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE BUTTON */}

            <button
              className="certificate-fullscreen-close"
              type="button"
              onClick={() =>
                setSelectedCertificate(null)
              }
              aria-label="Close certificate"
            >
              ×
            </button>

            {/* CERTIFICATE IMAGE */}

            <div className="certificate-large-preview">
              <img
                src={selectedCertificate.file}
                alt={selectedCertificate.title}
              />
            </div>

            {/* DETAILS */}

            <div className="certificate-details">
              <p className="certificate-details-label">
                CERTIFICATE
              </p>

              <h2>
                {selectedCertificate.title}
              </h2>

              <p className="certificate-issued">
                Issued by {selectedCertificate.issuer}
                {selectedCertificate.date
                  ? ` • ${selectedCertificate.date}`
                  : ""}
              </p>

              {/* =========================
                  RELATED PROJECTS
              ========================= */}

              {selectedCertificate.projects.length >
                0 && (
                <section className="certificate-related-section">
                  <h3>
                    Related Projects
                  </h3>

                  <div className="certificate-related-list">
                    {selectedCertificate.projects.map(
                      (project, index) => (
                        <div
                          className="certificate-related-item"
                          key={index}
                        >
                          <span>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <div>
                            <h4>
                              {project.name}
                            </h4>

                            <p>
                              {project.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

              {/* =========================
                  RELATED SKILLS
              ========================= */}

              {selectedCertificate.skills.length >
                0 && (
                <section className="certificate-related-section">
                  <h3>
                    Related Skills
                  </h3>

                  <div className="certificate-related-list">
                    {selectedCertificate.skills.map(
                      (skill, index) => (
                        <div
                          className="certificate-related-item"
                          key={index}
                        >
                          <span>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <div>
                            <h4>
                              {skill.name}
                            </h4>

                            <p>
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;