import { useState, useEffect } from "react";
import "../styles/hero.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import { Link } from "react-router-dom";

function Hero() {
 const slides = [
  {
    title: "Empowering You With Practical Tech Skills for the Digital Age",
    description: "Hands-on training in Frontend Development, Backend Development, UI/UX Design, and Data Analysis to prepare you for real tech careers.",
    image: image1,
  },
  {
    title: "Learn In-Demand Tech Skills and Build Powerful Digital Solutions",
    description: "Tomsphere Globaltech provides hands-on tech training in Frontend Development, Backend Development, UI/UX Design, and Data Analysis while also offering professional web development services for businesses.",
    image: image2,
  },
];

const [current, setCurrent] = useState(0);

useEffect(() => {
  const slideInterval = setInterval(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, 5000);

  return () => clearInterval(slideInterval);
}, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>{slides[current].title}</h1>

        <p>{slides[current].description}</p>

        <div className="hero-buttons">

          <div className="hero-buttons">

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="apply"
            >
                Apply Now
            </a>

            <Link to="/programs" className="programs">
                View Programs
            </Link>

            <Link to="/services" className="services">
                Services
            </Link>

            </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={slides[current].image} alt="hero visual" />
      </div>
    </section>
  );
}

export default Hero;