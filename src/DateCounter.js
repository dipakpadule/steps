import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <div>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} Days from today is `
            : `${count} Days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default DateCounter;
