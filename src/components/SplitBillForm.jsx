import React, { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({ selected, handleSplitBill, handleSelect }) => {
  const [billValue, setBillValue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = billValue - myExpense;
  const [payer, setPayer] = useState("user");

  function splitBill(e) {
    e.preventDefault();
    if (!billValue) return;

    payer === "user"
      ? handleSplitBill(friendExpense)
      : handleSplitBill(-myExpense);

    handleSelect(selected);
  }

  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>SPLIT BILL WITH {selected.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>💸 Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > billValue
              ? myExpense
              : Number(e.target.value)
          )
        }
      />
      <label>🕴️ {selected.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑 Who is paying the bill</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBillForm;
