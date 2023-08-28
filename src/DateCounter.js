import { useState } from "react";
import "./DateCounter.css";
function DateCounter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div>
        <button onClick={() => setSteps((c) => c - 1)}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={() => setSteps((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => (c - 1) * steps)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1 * steps)}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} Days from today is `
            : `${count} Days ago was `}
        </p>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default DateCounter;
