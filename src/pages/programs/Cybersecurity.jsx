import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
function Cybersecurity() {
    const navigate = useNavigate()
  return (

    <section className="program-details" data-aos="fade-up">
         <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Programs
      </button>

      <h1>Cybersecurity</h1>

      <p>
        Learn how to protect systems, networks and data from cyber attacks.
        This program introduces you to modern security practices and ethical hacking.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>Cybersecurity Fundamentals</li>
        <li>Network Security</li>
        <li>Ethical Hacking</li>
        <li>Vulnerability Assessment</li>
        <li>Security Tools and Techniques</li>
        <li>Incident Response</li>
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

export default Cybersecurity