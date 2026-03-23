import "../styles/services.css"

function Services() {
  return (
    <>
    <Helmet>
        <title>Tech Services & Solutions | Tomsphere Globaltech</title>

        <meta
        name="description"
        content="We provide web development, software solutions, IT consulting and digital services to help businesses grow."
        />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Ikeja, Lagos" />
    </Helmet>
    
    <section className="services-page">

      {/* HERO */}

      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          We provide innovative digital solutions to help businesses grow,
          automate processes and build powerful online platforms.
        </p>
      </div>


      {/* SERVICES GRID */}

      <div className="services-grid">

        <div className="service-card">
          <h3>Website Development</h3>
          <p>
            We design and develop modern, responsive websites that help
            businesses establish a strong online presence.
          </p>
        </div>

        <div className="service-card">
          <h3>Web Applications</h3>
          <p>
            Custom web applications built with modern technologies to
            streamline operations and improve productivity.
          </p>
        </div>

        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            We create intuitive and visually appealing user interfaces
            that deliver seamless digital experiences.
          </p>
        </div>

        <div className="service-card">
          <h3>Data Analytics</h3>
          <p>
            Transform raw data into actionable insights that help
            businesses make smarter decisions.
          </p>
        </div>

        <div className="service-card">
          <h3>Tech Consulting</h3>
          <p>
            Get expert advice on technology solutions, digital strategy
            and software architecture.
          </p>
        </div>

        <div className="service-card">
          <h3>System Automation</h3>
          <p>
            Automate repetitive processes using modern tools to improve
            efficiency and reduce operational costs.
          </p>
        </div>

      </div>


      {/* HOW WE WORK */}

      <div className="process-section">

        <h2>How We Work</h2>

        <div className="process-grid">

          <div className="process-card">
            <h4>1. Consultation</h4>
            <p>
              We understand your business needs and project goals.
            </p>
          </div>

          <div className="process-card">
            <h4>2. Planning</h4>
            <p>
              Our team designs a clear roadmap for the solution.
            </p>
          </div>

          <div className="process-card">
            <h4>3. Development</h4>
            <p>
              We build and test your solution using modern technologies.
            </p>
          </div>

          <div className="process-card">
            <h4>4. Deployment</h4>
            <p>
              Your product goes live and we provide ongoing support.
            </p>
          </div>

        </div>

      </div>


      {/* CTA */}

      <div className="services-cta">

        <h2>Need a Digital Solution?</h2>

        <p>
          Let's help you build powerful technology solutions for your business.
        </p>

        <a
          href="https://wa.me/2347043998793"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Start a Project
        </a>

      </div>

    </section>
    </>
  )
}

export default Services