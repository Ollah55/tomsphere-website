import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import { programs, formatFee, applicationEmail, legacyApplicationUrl, applicationsEnabled, paymentUrl } from "../data/programs"
import "../styles/apply.css"

export default function Apply() {
  const [search] = useSearchParams()
  const [programId, setProgramId] = useState(() => programs.find((p) => p.id === search.get("program"))?.id || "")
  const [format, setFormat] = useState("")
  const [reference] = useState(() => `TS-${crypto.randomUUID()}`)
  const program = programs.find((item) => item.id === programId)
  const fee = program && format ? program[format] : null
  const nextUrl = new URL("https://www.tomspheretech.com/apply/next-steps")
  nextUrl.search = new URLSearchParams({ program: programId, format, reference }).toString()
  return (
    <main className="application-page">
      <Helmet><title>Apply for Tech Training | Tomsphere Globaltech</title><meta name="description" content="Choose a Tomsphere training program, compare physical and online fees, and apply for your preferred class." /><link rel="canonical" href="https://www.tomspheretech.com/apply" /></Helmet>
      <header className="application-heading"><p className="application-eyebrow">Your next step starts here</p><h1>Apply for tech training</h1><p>Choose your program and class format. Review the fee before you apply.</p></header>
      <div className="application-layout">
        <div>
          {!applicationsEnabled && <div className="application-notice" role="status"><h2>Applications are open</h2><p>Our new application form is being connected. For now, review your fee below and apply through our existing application form.</p><a href={legacyApplicationUrl} className="application-button">Apply using Google Forms ↗</a></div>}
          <form className="application-form" action={`https://formsubmit.co/${applicationEmail}`} method="POST">
            <input type="hidden" name="_subject" value={`Training application: ${reference}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={nextUrl.href} />
            <input type="hidden" name="_autoresponse" value={`Thank you for applying to Tomsphere Globaltech. Your reference is ${reference}. We will contact you about availability and the class schedule. Payment is checked separately and does not automatically confirm enrolment. Questions? Email ${applicationEmail}.`} />
            <input type="hidden" name="Application reference" value={reference} />
            <input type="hidden" name="Program" value={program?.name || ""} />
            <input type="hidden" name="Quoted fee (NGN)" value={fee || ""} />
            <input type="text" name="_honey" className="application-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <h2>1. Choose your training</h2>
            <label htmlFor="program">Program</label>
            <select id="program" value={programId} onChange={(event) => setProgramId(event.target.value)} required><option value="">Select a program</option>{programs.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
            <label htmlFor="class-format">Class format</label>
            <select id="class-format" name="Class format" value={format} onChange={(event) => setFormat(event.target.value)} required><option value="">Select a class format</option><option value="physical">Physical class</option><option value="online">Online class</option></select>
            <p aria-live="polite"><strong>{fee ? `Selected training fee: ${formatFee(fee)}` : "Select a program and class format to see your fee."}</strong></p>
            <fieldset disabled={!applicationsEnabled}>
              <legend>2. Your details</legend>
              <label htmlFor="applicant-name">Full name</label><input id="applicant-name" name="name" autoComplete="name" required minLength={2} maxLength={100} />
              <label htmlFor="applicant-email">Email address</label><input id="applicant-email" name="email" type="email" autoComplete="email" required maxLength={254} />
              <label htmlFor="applicant-phone">WhatsApp number (include country code)</label><input id="applicant-phone" name="WhatsApp number" type="tel" autoComplete="tel" placeholder="e.g. +234 801 234 5678" minLength={7} required maxLength={25} />
              <label htmlFor="experience">Experience level</label><select id="experience" name="Experience level" required><option value="">Select your experience</option><option>Beginner — starting from scratch</option><option>Some experience — building my skills</option><option>Experienced — expanding my skills</option></select>
              <label className="application-consent"><input type="checkbox" name="Consent to application processing" value="Yes" required /><span>I agree that Tomsphere can use these details to process my application and contact me. FormSubmit processes the submission and forwards it by email. Please don’t include passwords or payment card details.</span></label>
              <button className="application-button" type="submit">Submit application →</button>
              <p className="application-small">You’ll complete a spam check before returning here for the next steps. Submitting an application does not make a payment.</p>
            </fieldset>
          </form>
        </div>
        <aside className="application-summary">
          <h2>Your training fee</h2><p>{program?.name || "Choose a program"}</p><p>{format === "physical" ? "Physical class" : format === "online" ? "Online class" : "Choose a class format"}</p><strong aria-live="polite">{fee ? formatFee(fee) : "—"}</strong>
          <p>Before paying, confirm the next intake and timetable with our team. For physical classes, also confirm the location.</p><a href="https://wa.me/2347043998793">Ask on WhatsApp ↗</a><p><a href={`mailto:${applicationEmail}`}>{applicationEmail}</a></p>
          {fee && <div className="application-payment"><h2>Already applied?</h2><p>Once our team confirms the schedule and availability, enter <strong className="application-inline-fee">{formatFee(fee)}</strong> on Paystack. Include your name, {program.name}, and {format} class in the payment purpose. Our team checks payment separately.</p><a className="application-button" href={paymentUrl} target="_blank" rel="noopener noreferrer">Pay with Paystack ↗</a></div>}
        </aside>
      </div>
    </main>
  )
}
