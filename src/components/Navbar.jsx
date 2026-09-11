import { useState } from "react"
import "../styles/navbar.css"
import logo from "../assets/Tlogo.webp"
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
          <img src={logo} alt="Tomsphere Globaltech logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
     <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? "✖" : "☰"}
    </button>

      {/* Navigation Links */}
      <ul id="main-navigation" className={`nav-links ${menuOpen ? "active" : ""}`}>

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
            to="/products"
            onClick={closeMenu}
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            Products
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
        href="/apply"
                className="apply-btn"
        onClick={closeMenu}
      >
        Apply Now →
      </a>

    </nav>
  )
}

export default Navbar
