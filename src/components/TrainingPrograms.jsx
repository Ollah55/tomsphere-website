import "../styles/trainingPrograms.css";
import { Code, Server, PencilRuler, Database } from "lucide-react";

function TrainingPrograms() {
  const programs = [
    {
      icon: <Code size={30} />,
      title: "Frontend Development",
      description:
        "Learn HTML, CSS, JavaScript, React, and modern frontend frameworks to build beautiful, responsive user interfaces.",
    },
    {
      icon: <Server size={30} />,
      title: "Backend Development",
      description:
        "Master server-side programming, databases, APIs, and cloud services to build robust web applications.",
    },
    {
      icon: <PencilRuler size={30} />,
      title: "UI/UX Design",
      description:
        "Create stunning user experiences with Figma, design thinking, and user research methodologies.",
    },
    {
      icon: <Database size={30} />,
      title: "Data Analysis",
      description:
        "Transform data into insights using Python, SQL, Excel, and data visualization tools.",
    },
  ];

  return (
    <section className="training-section" data-aos="zoom-in">
      <h2 className="training-title">Our Training Programs</h2>

      <div className="training-container">
        {programs.map((program, index) => (
          <div className="training-card" key={index}>
            <div className="training-icon">{program.icon}</div>

            <h3>{program.title}</h3>

            <p>{program.description}</p>

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn2"
            >
                Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrainingPrograms;