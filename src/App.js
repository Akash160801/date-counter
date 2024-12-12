import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

//learnings : state management using useState hook

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => setStep((c) => c - 1)}>-</button>
        </div>
        <p style={{ marginInline: "14px" }}>Step :{step}</p>
        <div>
          <button onClick={() => setStep((c) => c + 1)}>+</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
        </div>
        <p style={{ marginInline: "14px" }}>Count:{count}</p>
        <div>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from Today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
