import "../styles/programs.css"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

function Programs() {
  return (
    <>
      <Helmet>
        <title>Frontend Development Training | Tomsphere</title>

        <meta name="description" content="Learn HTML, CSS, JavaScript and React with hands-on frontend development training at Tomsphere Globaltech." />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Ikeja, Lagos" />
    </Helmet>

      <section className="programs-page">

        <h1 className="programs-title">Our Programs</h1>

        <ul className="programs-list">

          <li>
            <Link to="/programs/cybersecurity">
              <span className="bullet">🔐</span>
              Cybersecurity
            </Link>
          </li>

          <li>
            <Link to="/programs/frontend">
              <span className="bullet">💻</span>
              Frontend Development
            </Link>
          </li>

          <li>
            <Link to="/programs/backend">
              <span className="bullet">⚙️</span>
              Backend Development
            </Link>
          </li>

          <li>
            <Link to="/programs/fullstack">
              <span className="bullet">🚀</span>
              Full Stack Development
            </Link>
          </li>

          <li>
            <Link to="/programs/uiux">
              <span className="bullet">🎨</span>
              UI/UX Design
            </Link>
          </li>

          <li>
            <Link to="/programs/data-analytics">
              <span className="bullet">📊</span>
              Data Analytics
            </Link>
          </li>

        </ul>

      </section>
    </>
  )
}

export default Programs