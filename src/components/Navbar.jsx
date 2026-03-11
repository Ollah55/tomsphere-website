import { useState } from "react"
import "../styles/navbar.css"
import logo from "../assets/Tlogo.png"
import { NavLink } from "react-router-dom"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Tomsphere Logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
     <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? "✖" : "☰"}
    </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/programs" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            Programs
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/services" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>

      </ul>

      {/* Apply Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="apply-btn"
        onClick={closeMenu}
      >
        Apply Now →
      </a>

    </nav>
  )
}

export default Navbar