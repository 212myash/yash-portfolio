const Education = () => {
  const education = [
    {
      year: "2025 — PRESENT",
      degree: "B.Tech in Computer Science Engineering",
      institute: "Lovely Professional University",
      detail: "Currently pursuing B.Tech in CSE.",
    },
    {
      year: "2022 — 2025",
      degree: "Diploma in Computer Science Engineering",
      institute: "Lovely Professional University",
      detail: "Diploma in CSE with a CGPA of 7.0.",
    },
    {
      year: "2022",
      degree: "ADCA",
      institute: "Shivam Computer Institute",
      detail: "Advanced Diploma in Computer Applications.",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-label">EDUCATION</div>

      <div className="education-heading">
        <h2>
          Learning,
          <span> growing & building.</span>
        </h2>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <div className="education-item" key={item.degree}>
            <div className="education-index">
              0{index + 1}
            </div>

            <div className="education-year">
              {item.year}
            </div>

            <div className="education-main">
              <h3>{item.degree}</h3>

              <h4>{item.institute}</h4>

              <p>{item.detail}</p>
            </div>

            <div className="education-arrow">
              ↗
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;