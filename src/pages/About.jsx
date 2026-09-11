import "../styles/about.css"
import founder from "../assets/me.webp"
import { Helmet } from "react-helmet"

function About() {
  return (
    <>
    <Helmet>
        <title>About Tomsphere Globaltech | Tech Training Company</title>

        <meta
        name="description"
        content="Learn about Tomsphere Globaltech, our mission, vision and commitment to empowering individuals with tech skills and digital solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Ikeja, Lagos" />
    </Helmet>
    
    <section className="about-page">

      {/* ===== Founder Section ===== */}

      <section className="about-founder">

        <h1 className="about-title">Meet the Founder</h1>

        <div className="about-container">

          <div className="about-text">

            <p>
              Tomsphere Globaltech was founded to help individuals gain
              practical tech skills while also providing digital solutions
              for businesses.
            </p>

            <p>
              Our mission is to bridge the gap between theoretical knowledge
              and real-world application, empowering the next generation of
              tech professionals while supporting businesses in their digital
              transformation journey.
            </p>

          </div>

          <div className="about-image">
            <img src={founder} alt="Founder" />
          </div>

        </div>

      </section>


      {/* ===== WHY WE EXIST ===== */}

      <section className="why-section">

        <h2>Why Tomsphere Globaltech Exists</h2>

        <p>
          The global economy is becoming increasingly digital, yet many
          individuals still struggle to access practical technology education
          that prepares them for real careers. At the same time, businesses
          often face challenges adopting the digital tools they need to grow
          and compete effectively.
        </p>

        <p>
          Tomsphere Globaltech was created to bridge this gap. We are
          committed to empowering individuals with industry-relevant skills
          while also helping businesses design and implement powerful digital
          solutions that improve efficiency and unlock new opportunities.
        </p>

        <p>
          By combining tech education with real-world development services,
          we aim to create a future where more people can thrive in the
          technology industry while organizations benefit from innovative
          digital transformation.
        </p>

      </section>


      {/* ===== WHAT MAKES US DIFFERENT ===== */}

      <section className="difference-section">

        <h2>What Makes Tomsphere Different</h2>

        <div className="difference-container">

          <div className="difference-card">
            <h3>Practical Learning</h3>
            <p>
              Our training focuses on real-world projects that give students
              hands-on experience rather than just theory.
            </p>
          </div>

          <div className="difference-card">
            <h3>Industry-Relevant Skills</h3>
            <p>
              We teach technologies and tools that are actively used in the
              tech industry today.
            </p>
          </div>

          <div className="difference-card">
            <h3>Digital Solutions</h3>
            <p>
              Beyond training, we help businesses design and develop
              technology solutions that drive innovation and growth.
            </p>
          </div>

          <div className="difference-card">
            <h3>Community Growth</h3>
            <p>
              We are building a community of passionate tech professionals
              who support, collaborate, and grow together.
            </p>
          </div>

        </div>

      </section>


      {/* ===== Mission Vision ===== */}

      <section className="mission-section">

        <div className="mission-box">

          <h2>Our Mission</h2>

          <p>
            To empower individuals with practical technology skills and help
            businesses build innovative digital solutions that drive growth
            in the modern digital economy.
          </p>

        </div>

        <div className="mission-box">

          <h2>Our Vision</h2>

          <p>
            To become a leading global tech training and digital solutions
            company shaping the next generation of technology professionals.
          </p>

        </div>

      </section>


      {/* ===== Core Values ===== */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-container">

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We embrace creativity and new technologies to build impactful
              digital solutions.
            </p>
          </div>

          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We strive for the highest standards in both training and
              technology services.
            </p>
          </div>

          <div className="value-card">
            <h3>Empowerment</h3>
            <p>
              We equip individuals with the skills needed to succeed in the
              digital world.
            </p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We build trust through transparency, honesty and ethical
              practices.
            </p>
          </div>

        </div>

      </section>


      {/* ===== CTA ===== */}

      <section className="about-cta">

        <h2>Join Our First Tech Cohort</h2>

        <p>
          Start your journey into the tech industry by learning in-demand
          skills with hands-on training and real-world projects.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Apply Now
        </a>

      </section>

    </section>
    </>
  )
}

export default About