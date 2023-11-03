import React, { useState } from "react";

const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [customTip, setCustomTip] = useState("");

  const tipPercentages = [5, 10, 15, 25, 50];

  const handleCustomTip = (e) => {
    const customValue = e.target.value;
    setCustomTip(customValue);
    handleTip(customValue || 0);
  };

  return (
    <div className="left-box">
      <div>
        <p>Bill</p>
        <input
          type="number"
          className="bill_input"
          value={bill}
          onChange={handleBill}
        />
      </div>

      <div>
        <label>Select Tip %</label>
        <div>
          {tipPercentages.map((percentage) => (
            <button key={percentage} onClick={() => handleTip(percentage)}>
              {percentage}%
            </button>
          ))}
        </div>
        <div>
          <input
            type="number"
            className="custom"
            placeholder="Custom Tip"
            value={customTip}
            onChange={handleCustomTip}
          />
        </div>
      </div>

      <div>
        <label>Number of People</label>
        <input
          type="number"
          className="people"
          value={people}
          onChange={handlePeople}
        />
      </div>
    </div>
  );
};

export default LeftBox;
