import { Link } from "react-router-dom"
import { programs, formatFee } from "../data/programs"
import "../styles/apply.css"

export default function ProgramFees({ programId }) {
  const selected = programId ? programs.filter((program) => program.id === programId) : programs
  return (
    <section className="program-fees" aria-label="Training fees">
      <h2>Choose your class format</h2>
      <p>Fees are in Nigerian naira. Contact us to confirm the next intake, timetable, and physical class location before paying.</p>
      <div className="fee-cards">
        {selected.map((program) => (
          <article className="fee-card" key={program.id}>
            <h3><Link to={`/programs/${program.id}`}>{program.name}</Link></h3>
            <dl><div><dt>Physical class</dt><dd>{formatFee(program.physical)}</dd></div><div><dt>Online class</dt><dd>{formatFee(program.online)}</dd></div></dl>
            <Link className="application-button" to={`/apply?program=${program.id}`}>Apply for this program →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
