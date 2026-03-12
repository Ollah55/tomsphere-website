import "../../styles/programs.css"
import { useNavigate } from "react-router-dom"
function DataAnalytics() {
    const navigate = useNavigate()
  return (

    <section className="program-details" data-aos="fade-up">
         <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Programs
      </button>

      <h1>Data Analytics</h1>

      <p>
        Learn how to collect, analyze and visualize data to uncover
        insights that help businesses make better decisions.
      </p>

      <h3>What You Will Learn</h3>

      <ul>
        <li>Data Analysis Fundamentals</li>
        <li>Spreadsheet Analysis</li>
        <li>Data Visualization</li>
        <li>SQL for Data Queries</li>
        <li>Business Intelligence Tools</li>
        <li>Data Reporting and Insights</li>
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

export default DataAnalytics