import ProgramFees from "../../components/ProgramFees"
import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
function Fullstack() {
    const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>Full Stack Development Training | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="Become a full stack developer by learning frontend and backend technologies. Build complete web applications from scratch."
        />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Ikeja, Lagos" />
    </Helmet>
    
    <section className="program-details" data-aos="fade-up">
         <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Programs
      </button>

      <h1>Full Stack Web Development</h1>

      <p>
        Become a complete developer by learning both frontend and backend
        technologies used to build modern web applications.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>HTML and CSS</li>
        <li>JavaScript Programming</li>
        <li>Frontend Development with React</li>
        <li>Backend Development</li>
        <li>API Integration</li>
        <li>Database Management</li>
      </ul>

      <ProgramFees programId="fullstack" />

      <a
        href="/apply?program=fullstack"
                className="program-apply-btn"
      >
        Apply for this Program
      </a>

    </section>
    </>
  )
}

export default Fullstack