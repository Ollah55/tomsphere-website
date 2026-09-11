import "../styles/hero.css";
import image1 from "../assets/image1.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Build your skills. Bring your ideas to life.</h1>
        <p>Practical tech training, professional digital services, and products from Tomsphere Globaltech. Find the right next step for you or your business.</p>
        <div className="hero-buttons">
          <Link to="/programs" className="apply">Explore Training</Link>
          <Link to="/services" className="services">Business Services</Link>
          <Link to="/products" className="programs">Our Products</Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={image1} alt="Practical technology training at Tomsphere Globaltech" fetchPriority="high" />
      </div>
    </section>
  );
}
export default Hero;
