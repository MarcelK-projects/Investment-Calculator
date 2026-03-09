import { useState } from 'react';

import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import { calculateInvestmentResults } from "./util/investment.js";
import Table from "./components/Table.jsx";
import { formatter } from "./util/investment.js";

function App() {
  const [initInvest, setInitInvest] = useState(10000);
  const [annualInvest, setAnnualInvest] = useState(1200);
  const [expReturn, setExpReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function handleInitValue(event) {
    let value = Number(event.target.value);
    setInitInvest(value)
  }

  function handleAnnualInvest(event) {
    let value = Number(event.target.value);
    setAnnualInvest(value)
  }

  function handleExpReturn(event) {
    let value = Number(event.target.value);
    setExpReturn(value)
  }

  function handleDuration(event) {
    let value = Number(event.target.value);
    setDuration(value)
  }

  let CalInvest = {
    initialInvestment: initInvest,
    annualInvestment: annualInvest,
    expectedReturn: expReturn,
    duration: duration
 } 

 const results = calculateInvestmentResults(CalInvest);

  return (
    <div>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <Input type={"number"} name="Initial Investment" onChange={handleInitValue} value={initInvest} />    
          <Input type={"number"} name="Annual Investment" onChange={handleAnnualInvest} value={annualInvest} /> 
        </div>
        <div className="input-group">
          <Input type={"number"} name="Expected Return" onChange={handleExpReturn} value={expReturn} /> 
          <Input type={"number"} name="Duration" onChange={handleDuration} value={duration} />  
        </div>
      </section>
      <Table results={results} formatter={formatter} initInvest={initInvest}/>
    </div>
  )
}

export default App
