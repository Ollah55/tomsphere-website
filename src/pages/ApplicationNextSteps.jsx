import { useSearchParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { programs, formatFee, paymentUrl, applicationEmail } from "../data/programs"
import "../styles/apply.css"

export default function ApplicationNextSteps() {
  const [search] = useSearchParams()
  const program = programs.find((item) => item.id === search.get("program"))
  const format = search.get("format")
  const reference = search.get("reference") || ""
  const valid = program && ["physical", "online"].includes(format) && /^TS-[0-9a-f-]{36}$/.test(reference)
  return (
    <main className="application-page">
      <Helmet><title>Application Next Steps | Tomsphere Globaltech</title><meta name="robots" content="noindex, follow" /></Helmet>
      <div className="application-next">
        <p className="application-eyebrow">Training applications</p><h1>Your next steps</h1>
        <p>Check your inbox for an application acknowledgement. If it doesn’t arrive, check spam or contact us before submitting again.</p>
        {valid ? <><dl className="application-receipt"><div><dt>Application reference</dt><dd>{reference}</dd></div><div><dt>Program</dt><dd>{program.name}</dd></div><div><dt>Class format</dt><dd>{format === "physical" ? "Physical" : "Online"}</dd></div><div><dt>Training fee</dt><dd>{formatFee(program[format])}</dd></div></dl><h2>Ready to pay?</h2><p>First confirm the class schedule and availability with Tomsphere. Then enter <strong>{formatFee(program[format])}</strong> on Paystack and include your application reference and program in the payment purpose.</p><a className="application-button" href={paymentUrl} target="_blank" rel="noopener noreferrer">Continue to Paystack ↗</a><p>Use the same email address you used to apply. Keep your Paystack receipt; our team checks payment and confirms enrolment separately.</p></> : <p><Link to="/apply">Start an application</Link> to see your program fee and payment instructions.</p>}
        <p>This page is not proof of application delivery or payment.</p><p>Need help? <a href={`mailto:${applicationEmail}`}>{applicationEmail}</a> or <a href="https://wa.me/2347043998793">WhatsApp us</a>.</p>
      </div>
    </main>
  )
}
