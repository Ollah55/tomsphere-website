import "../styles/whatYouGain.css";
import { Award, Briefcase, Users, Code } from "lucide-react";

function WhatYouGain() {

  const benefits = [
    {
      icon: <Code size={32} />,
      title: "Practical Tech Skills",
      description: "Gain hands-on experience building real projects using modern technologies."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Portfolio Projects",
      description: "Build real-world projects you can showcase to employers and clients."
    },
    {
      icon: <Users size={32} />,
      title: "Mentorship & Community",
      description: "Learn alongside other students and get guidance from experienced tutors."
    },
    {
      icon: <Award size={32} />,
      title: "Certificate of Completion",
      description: "Receive a certificate that validates the skills you gained during the program."
    }
  ];

  return (
    <section className="gain-section" data-aos="fade-up">

      <h2 className="gain-title">What You Will Gain</h2>

      <div className="gain-container">

        {benefits.map((item, index) => (
          <div className="gain-card" key={index}>

            <div className="gain-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhatYouGain;