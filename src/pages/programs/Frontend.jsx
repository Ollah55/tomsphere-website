import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
function Frontend() {
    const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>Frontend Development Training | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="Learn HTML, CSS, JavaScript and React with practical frontend development training. Build responsive websites and real-world projects."
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

      <h1>Frontend Development</h1>

      <p>
        Learn how to build modern, responsive websites using the
        latest frontend technologies.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Responsive Design</li>
        <li>Version Control with Git</li>
      </ul>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
        target="_blank"
        className="program-apply-btn"
      >
        Apply for this Program
      </a>

    </section>
    </>
  )
}

export default Frontend