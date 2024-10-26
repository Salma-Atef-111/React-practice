//Counter

import React, { useState } from "react";

const SmallChallenge = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Sep 20 2025");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "32px",
        }}
      >
        <button
          onClick={() => setStep((c) => c - 1)}
          style={{ padding: "5px 15px", marginRight: "15px" }}
          class="btn btn-danger"
        >
          -
        </button>
        <h4>Step: {step}</h4>
        <button
          onClick={() => setStep((c) => c + 1)}
          style={{ padding: "5px 15px", marginLeft: "15px" }}
          class="btn btn-success"
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "32px",
        }}
      >
        <button
          onClick={() => setCount((c) => c - step)}
          style={{ padding: "5px 15px", marginRight: "15px" }}
          class="btn btn-danger"
        >
          -
        </button>
        <h4>count: {count}</h4>
        <button
          onClick={() => setCount((c) => c + step)}
          style={{ padding: "5px 15px", marginLeft: "15px" }}
          class="btn btn-success"
        >
          +
        </button>
      </div>
      <br />
      <h3 className="text-center">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </h3>
    </>
  );
};

export default SmallChallenge;
