import "../styles/footer.css"
import logo from "../assets/Tlogo.png"
import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section-company">

          <img src={logo} alt="Tomsphere Globaltech" className="footer-logo"/>

          <p>
            Empowering individuals with practical technology skills
            and building innovative digital solutions for the future.
          </p>

          <div className="social-icons">

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>

                <a href="https://instagram.com/tomsphereglobaltech" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://tiktok.com/@tomsphereglobaltech" target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                </a>

                <a href="https://snapchat.com/add/tomsphereglobaltech" target="_blank" rel="noopener noreferrer">
                    <FaSnapchatGhost />
                </a>

            </div>

        </div>


        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>

        </div>


        {/* Newsletter */}
        <div className="footer-section">

          <h3>Newsletter</h3>

          <p>Subscribe to receive updates and tech insights.</p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>


        {/* Google Map */}
        <div className="footer-section">

          <h3>Our Location</h3>

          <iframe
            src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
            title="Tomsphere Location"
            loading="lazy"
          ></iframe>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Tomsphere Globaltech Ltd. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer