import "../styles/finalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-container">

        <h2>Start Your Tech Career Today</h2>

        <p>
          Join our next cohort and gain practical skills in Frontend Development,
          Backend Development, UI/UX Design, and Data Analysis.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Apply Now
        </a>

      </div>

    </section>
  );
}

export default FinalCTA;