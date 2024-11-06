import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PizzaApp from "./Components/PizzaApp";
import ProfileCard from "./Components/ProfileCard";
import HomePage from "./Components/HomePage";
import StepsProject from "./Components/StepsProject";
import Advice from "./Components/Advice";
import FlashCards from "./Components/FlashCards";
import DateCounter from "./Components/DateCounter";
import Accordion from "./Components/Accordion";
import TipCalculator from "./Components/TipCalculator";
import TextExpander from "./Components/TextExpander";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project1" element={<Advice />} />
          <Route path="/project2" element={<PizzaApp />} />
          <Route path="/project3" element={<ProfileCard />} />
          <Route path="/project4" element={<StepsProject />} />
          <Route path="/project5" element={<DateCounter />} />
          <Route path="/project6" element={<FlashCards />} />
          <Route path="/project7" element={<Accordion />} />
          <Route path="/project8" element={<TipCalculator />} />
          <Route path="/project9" element={<TextExpander />} />
        </Routes>
      </Router>
    </>
  );
}
