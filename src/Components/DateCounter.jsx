//Date Counter

import React, { useState } from "react";

const DateCounter = () => {
  const [showText, setShowText] = useState("");
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Sep 20 2025");
  date.setDate(date.getDate() + count);

  function details() {
    setShowText(!showText);
  }
  return (
    <>
      <div
        className="text-center"
        style={{
          paddingTop: "20px",
          paddingBottom: "30px",
          backgroundColor: "#ffecc8",
        }}
      >
        <h2>How this Counter work ?</h2>
        <button onClick={details} class="btn btn-outline-warning">
          Click here to know
        </button>
        {showText && (
          <p style={{ paddingTop: "20px" }}>
            Set the number of steps in <strong>Steps</strong> to control how
            much the date changes each time. <br />
            Then, use the <strong>Counter</strong> to increase or decrease the
            date accordingly,
            <br />
            and watch the updated date appear below automatically.
          </p>
        )}
      </div>
      <div style={{ paddingBottom: "50px" }}>
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
      </div>
      <DateCounterTwo />
    </>
  );
};
function DateCounterTwo() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date("March 5 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="text-center">
        <h3
          style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            backgroundColor: "#ffecc8",
          }}
        >
          Another way to do the counter
        </h3>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {step}</span>

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
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset} class="btn btn-danger">
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default DateCounter;
