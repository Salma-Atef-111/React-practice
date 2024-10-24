// import { useEffect, useState } from "react";
// export default function App(){
//   const [advice, setAdvice] = useState("");
//   const [count, setCount] = useState(0);

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount((c) => c + 1);
//   }

//   useEffect(function () {
//     getAdvice();
//   }, []);


//   return <>
//     <div>
//         <h1>Hello World </h1>
//         <button onClick={getAdvice}>Get advice</button>
//         <h4>{advice}</h4>
//         <Message count={count} />
//     </div>
//   </>
// }
// function Message(props) {
//   return (
//     <>
//       <p>
//         you have raed <strong>{props.count}</strong> pieces of advice
//       </p>
//     </>
//   );
// }

////////////////////////////////////////////

import PizzaApp from "./Components/PizzaApp";
import ProfileCard from "./Components/ProfileCard";

export default function App(){
    return <>
    <PizzaApp/>
    <ProfileCard/>
    </>
}