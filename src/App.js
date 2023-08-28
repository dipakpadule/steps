import { useState } from "react";
import DateCounter from "./DateCounter";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, isOpenSet] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    } else return;
  }
  function handlePrev() {
    if (step > 1) {
      setStep((s) => s - 1);
    } else return;
  }

  return (
    <div>
      <button className="close" onClick={() => isOpenSet((is) => !is)}>
        &times;
      </button>
      <DateCounter />
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
