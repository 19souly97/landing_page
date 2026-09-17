import { useState } from "react";

function QuestionBox() {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (question.trim() === "") {
      setMessage("Please write a question first.");
      return;
    }

    setMessage("Thank you! We received your question.");
    setQuestion("");
  }

  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">WE ARE HERE TO HELP</p>
        <h2>Have a question?</h2>
        <p>Send us a message and our team will contact you.</p>
      </div>

      <form className="question-form" onSubmit={handleSubmit}>
        <label htmlFor="question">Your question</label>
        <textarea
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Example: How long does charging take?"
          rows="4"
        />
        <button className="primary-button" type="submit">
          Send Question
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </section>
  );
}

export default QuestionBox;
