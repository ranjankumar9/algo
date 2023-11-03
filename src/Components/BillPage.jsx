import React, { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";


const BillPage = () => {
  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(15);
  const [people, setPeople] = useState(1);

  const handleBill = (event) => {
    setBill(parseInt(event.target.value));
  };

  console.log(bill)

  const handleTip = (event) => {
    const tipPercentage = parseInt(event.target.value);
    setTipAmount(tipPercentage);

  };

  console.log(tipAmount)

  const handlePeople = (event) => {
    const peopleValue = parseInt(event.target.value);
    setPeople(peopleValue);
  };
  
  const total = bill+tipAmount ;
  

  const handleReset = () => {
    setBill(0);
    setTipAmount(0);
    setPeople(1);
  };




  return (
    <div className="billbox">
      <LeftBox
        bill={bill}
        tipAmount={tipAmount}
        people={people}
        handleBill={handleBill}
        handleTip={handleTip}
        handlePeople={handlePeople}
        handleReset={handleReset}
      />
      <RightBox
        tipAmount={tipAmount}
        total={total}
        people={people}
        handleBill={handleBill}
        handleTip={handleTip}
        handlePeople={handlePeople}
        handleReset={handleReset}
      />
    </div>
  );
};

export default BillPage;
