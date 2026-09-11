import "../styles/footer.css"
import logo from "../assets/Tlogo.webp"
import { Link } from "react-router-dom"
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-company">
          <Link to="/" className="footer-brand" aria-label="Tomsphere Globaltech home">
            <img src={logo} alt="Tomsphere Globaltech" className="footer-logo" width="140" height="140" loading="lazy" />
          </Link>
          <p>Practical tech training. Digital solutions for businesses. Products built for the future.</p>
          <div className="social-icons" aria-label="Follow Tomsphere">
            <a href="https://instagram.com/tomsphereglobaltech" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com/@tomsphereglobaltech" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://snapchat.com/add/tomsphereglobaltech" aria-label="Snapchat" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></a>
          </div>
        </div>
        <nav className="footer-section" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Training Programs</Link></li>
            <li><Link to="/services">Business Services</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/about">About Tomsphere</Link></li>
          </ul>
        </nav>
        <div className="footer-section">
          <h2>Our Products</h2>
          <a href="https://academora.tomspheretech.com">Academora <span aria-hidden="true">↗</span></a>
          <p>Discover Academora, a product from Tomsphere Globaltech.</p>
          <Link to="/products">Explore our products →</Link>
        </div>
        <div className="footer-section">
          <h2>Get in Touch</h2>
          <p>Have a training question or a project in mind? Let’s talk.</p>
          <a className="footer-phone" href="tel:+2347043998793">+234 704 399 8793</a>
          <a className="footer-contact" href="https://wa.me/2347043998793" target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a>
          <p className="footer-location">Based in Lagos, Nigeria</p>
        </div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Tomsphere Globaltech Ltd. All rights reserved.</p></div>
    </footer>
  )
}
export default Footer
