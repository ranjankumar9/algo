import React from "react";

const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
  handleReset,
}) => {
  return (
    <div>
      <div className="tipAmount">
        Tip Amount: {tipAmount}
      </div>
      <div className="TotalAmount">
        Total Amount: {total}
      </div>
      <button className="Reset" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default RightBox;
