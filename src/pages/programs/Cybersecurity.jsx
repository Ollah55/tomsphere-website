import ProgramFees from "../../components/ProgramFees"
import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
function Cybersecurity() {
    const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>Cybersecurity Training | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="Learn ethical hacking, network security and cyber defense techniques. Start a career in cybersecurity with hands-on training."
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

      <ProgramFees programId="cybersecurity" />

      <a
        href="/apply?program=cybersecurity"
                className="program-apply-btn"
      >
        Apply for this Program
      </a>

    </section>
    </>
  )
}

export default Cybersecurity