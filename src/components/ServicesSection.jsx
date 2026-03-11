import "../styles/servicesSection.css";
import screen from "../assets/screen.jpg";
import { Laptop } from "lucide-react";

function ServicesSection() {
  const services = [
    "Website Design & Development",
    "Business Websites",
    "Landing Page Development",
    "Website Maintenance and Updates",
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Web Development Services</h2>

      <div className="services-container">
        
        <div className="services-image">
          <img src={screen} alt="web development" />
        </div>

        <div className="services-content">
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <Laptop size={22} className="service-icon" />
                {service}
              </li>
            ))}
          </ul>

        <a
             href="https://wa.me/2347043998793"
            target="_blank"
            rel="noopener noreferrer"
            className="start-project"
        >
  Start a Project
</a>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;