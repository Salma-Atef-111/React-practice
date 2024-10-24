import { useState } from "react";

export default function Advice(){
    
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return <>
    <div className="text-center mt-5">
        <h1>Click The Button to Know your Advice for today</h1>
        <br />
        <button onClick={getAdvice} class="btn btn-success">Get advice</button>
        <br /><br />

        <h4>{advice}</h4>
        <br />
        <p>
        you have raed <strong>{count}</strong> pieces of advice
      </p>
    </div>
  </>
}

