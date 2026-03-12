import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
function Fullstack() {
    const navigate = useNavigate()
  return (

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

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
        target="_blank"
        className="program-apply-btn"
      >
        Apply for this Program
      </a>

    </section>

  )
}

export default Fullstack