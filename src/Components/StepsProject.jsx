//handle events like onClick
//state

import { useState } from "react";
import "../Css/Steps.css"

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];


export default function StepsProject(){

    const [step , setStep] = useState(1);
    // const [test , setTest] = useState({name: 'salma'})
    //const step = 1 ; //static data 

    const [isOpen , setIsOpen] = useState(true)

    function handlePrevious(){
        if (step >1 ) setStep((s) => s - 1)
    }
    
    function handleNext(){
      if (step < 3) setStep((s) => s + 1) // we use the set to update the data or the state

        // BAD prictic : مينفعش احدث ال state بالمنظر ده خالص مع انه شغال ..بس الصح في ريأكت هو ال setState
        //   test.name = 'atef';
        //the right way 
        // setTest({name:"atef"})
    }
    return (
    <>  
    {/* لما دوسنا اوبن علي مثلا صفحه 2 ورجعنا تاني دوسنا كلوز وفتحنا تاني لقينا 
    اننا لسه في صفحه 2 عشان ال ستيت مش بينسي عامل زي الميموري */}

    <button className="close" 
        onClick={() => setIsOpen(!isOpen)}>
        {/* الفانكشن دي لازم تبقي عكس لو اوبن يبقي كلوز ولو كلوز يبقي اوبن  */}
        &times; 
        {/* ده يعني X */}
    </button>
    { isOpen && (
        <div className="StepsBody">
            <div className="steps">
                <div className="numbers">
                    <div className={step >= 1 ? 'active' : ""}>1</div>
                    <div className={step >= 2 ? 'active' : ""}>2</div>
                    <div className={step >= 3 ? 'active' : ""}>3</div>
                </div>
                <p className="message">Step {step} : {messages[step -1]} 
                    {/* {test.name} */}
                    </p>
                <div className="buttons">
                    <button style={{backgroundColor: '#7950f2' , color:"#fff"}}
                     onClick={handlePrevious}
                     >Previous</button>    
                    <button style={{backgroundColor: '#7950f2' , color:"#fff"}}
                     onClick={handleNext}
                     >Next</button>    
                </div> 
            </div>
        </div>
    )}
    </>
    )

}