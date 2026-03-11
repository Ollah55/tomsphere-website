import "../styles/whychoose.css";
import { CheckCircle } from "lucide-react";

function WhyChoose() {

  const features = [
    { text: "Practical hands-on training" },
    { text: "Industry-relevant tech skills" },
    { text: "Experienced tutors and mentorship" },
    { text: "Professional web development services" }
  ];

  return (
    <section className="whychoose">
      
      <h2 className="why-title">
        Why Choose Tomsphere Globaltech
      </h2>

      <div className="why-container">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            
            <div className="icon">
              <CheckCircle size={28} />
            </div>

            <p>{item.text}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChoose;