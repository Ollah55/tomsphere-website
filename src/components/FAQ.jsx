import { useState } from "react";
import "../styles/faq.css";

function FAQ() {

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. Our programs are beginner-friendly. We start from the fundamentals and guide you step-by-step until you can build real projects."
    },
    {
      question: "How long is the training program?",
      answer:
        "The program duration depends on the track you choose, but most cohorts run for several weeks with structured lessons and projects."
    },
    {
      question: "Is the training online or physical?",
      answer:
        "Our training is online and physical, allowing you to learn from anywhere while still interacting with instructors and fellow students."
    },
    {
      question: "Will I work on real projects?",
      answer:
        "Yes. You will build real-world projects that you can add to your portfolio and showcase to potential employers."
    },
    {
      question: "How do I apply?",
      answer:
        "Simply click the Apply Now button on this website and fill out our application form to join the next cohort."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;