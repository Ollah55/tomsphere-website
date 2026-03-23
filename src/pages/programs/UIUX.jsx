import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
function UIUX() {
    const navigate = useNavigate()
  return (
    <>
    <Helmet>
        <title>UI/UX Design Training | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="Learn UI/UX design, wireframing, prototyping and user research. Build modern and user-friendly digital products."
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

      <h1>UI/UX Design</h1>

      <p>
        Learn how to design intuitive and visually appealing digital products
        through user research, wireframing and interactive prototypes.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>User Experience Fundamentals</li>
        <li>User Research and Personas</li>
        <li>Wireframing and Prototyping</li>
        <li>Design Systems</li>
        <li>Usability Testing</li>
        <li>Design Tools and Collaboration</li>
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

export default UIUX