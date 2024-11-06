import React, { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [satisfactionLevel, setSatisfactionLevel] = useState(0);
  const [satisfactionFriendLevel, setSatisfactionFriendLevel] = useState(0);

  const tip = bill * ((satisfactionLevel + satisfactionFriendLevel) / 2 / 100);

  function handleBillAmount(e) {
    setBill(Number(e.target.value));
  }
  function handleSatisfactionLevel(e) {
    setSatisfactionLevel(Number(e.target.value));
  }
  function handleSatisfactionFriendLevel(e) {
    setSatisfactionFriendLevel(Number(e.target.value));
  }
  function handleReset() {
    setBill(0);
    setSatisfactionLevel(0);
    setSatisfactionFriendLevel(0);
  }
  return (
    <>
      <h1 className="text-center">Tip Calculator</h1>
      <div className="text-center">
        <h4>
          How mush was the bill ?{" "}
          <input type="number" value={bill} onChange={handleBillAmount} />
        </h4>
        <h4>
          How did you like the servies ?{" "}
          <select value={satisfactionLevel} onChange={handleSatisfactionLevel}>
            {" "}
            <option value="0">Dessatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Amazing! (20%)</option>
          </select>
        </h4>
        <h4>
          How did your friend like the servies ?{" "}
          <select
            value={satisfactionFriendLevel}
            onChange={handleSatisfactionFriendLevel}
          >
            {" "}
            <option value="0">Dessatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Amazing! (20%)</option>
          </select>
        </h4>
        {bill > 0 && (
          <>
            <div>
              <h3>
                You pay $ {bill + tip} ( ${bill} + {tip}$ tip){" "}
              </h3>
            </div>
            <button onClick={handleReset} class="btn btn-danger">
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
}
