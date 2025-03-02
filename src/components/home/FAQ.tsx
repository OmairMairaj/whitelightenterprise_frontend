import React, { useState } from 'react'; 
const faqs = [
  {
    question: "Do you provide customisation?",
    answer: "Yes, we offer customization based on customer requirements."
  },
  {
    question: "Do you deliver Pan-India?",
    answer: "Yes, we provide delivery services across India."
  },
  {
    question: "Where are you located?",
    answer: "We are located in XYZ City, India."
  },
  {
    question: "What if we get a broken product?",
    answer: "You can contact our support team for a replacement or refund."
  },
  {
    question: "Do you maintain spare parts in your inventory?",
    answer: "Yes, we maintain spare parts for most of our products."
  },
  {
    question: "I have an ongoing project. Can someone from your team visit?",
    answer: "Yes, our team can schedule a visit based on project requirements."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (<div className='bac'>
    <section className="faq-section">
      <h2 className="faq-title">For Truth Seekers</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  </div>
  );
};

export default FAQ;
