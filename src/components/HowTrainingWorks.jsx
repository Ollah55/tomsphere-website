import "../styles/howTrainingWorks.css";

function HowTrainingWorks() {

  const steps = [
    {
      number: "1",
      title: "Apply for the program",
      description: "Fill out our simple application form via WhatsApp",
    },
    {
      number: "2",
      title: "Join the next cohort",
      description: "Get onboarded with fellow learners",
    },
    {
      number: "3",
      title: "Learn through hands-on projects",
      description: "Build practical skills with real projects",
    },
    {
      number: "4",
      title: "Build real portfolio projects",
      description: "Showcase your skills to employers",
    },
  ];

  return (
    <section className="training-works">

      <h2 className="training-works-title">How Our Training Works</h2>

      <div className="training-steps">

        {steps.map((step, index) => (
          <div className="training-step" key={index}>

            <div className="step-circle">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowTrainingWorks;