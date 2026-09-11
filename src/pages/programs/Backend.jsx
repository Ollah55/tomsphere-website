import ProgramFees from "../../components/ProgramFees"
import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
function Backend() {
    const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>Backend Development Training | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="Master backend development using Node.js, databases and APIs. Learn to build scalable server-side applications."
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

      <h1>Backend Development</h1>

      <p>
        Learn how to build powerful server-side applications, APIs and databases
        that power modern websites and digital products.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>Backend Programming Fundamentals</li>
        <li>REST API Development</li>
        <li>Database Design and Management</li>
        <li>Authentication and Security</li>
        <li>Server Deployment</li>
        <li>Building Scalable Web Applications</li>
      </ul>

      <ProgramFees programId="backend" />

      <a
        href="/apply?program=backend"
                className="program-apply-btn"
      >
        Apply for this Program
      </a>

    </section>
    </>
  )
}

export default Backend