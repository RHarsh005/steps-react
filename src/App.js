import { useState } from "react";
const messages = ["Stability", "Millionaire", "Billionaire"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const previousFlag = step > 1;
  const nextFlag = step < 3;

  function handlePrevious() {
    if (previousFlag) setStep(step - 1);
  }

  function handleNext() {
    if (nextFlag) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("test")}
            >
              <span>👈</span>previous
            </Button>
            <Button style={{ background: "#7950f2", color: "#fff" }} onClick={handleNext}>
              next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button style={{ background: "#7850f2", color: "#fff" }} onClick={onClick}>
      {children}
    </button>
  );
}
