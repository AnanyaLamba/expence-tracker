import { useState } from "react";
import ExpenseList from "../Component/ExpenseList";

const ExpenseListPage = () => {
  const [entries, setEntries] = useState(() => {
    //geting the data from the local storage
    const savedEntries = localStorage.getItem("entries");
    //if there are entries so we are parsing them if not so we are returning the empty array
    return savedEntries ? JSON.parse(savedEntries) : "[]";
  });

  const handleDelete = (idx) => {
    const updatedEntries = entries.filter((_, i) => i !== idx);
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      <ExpenseList expenses={entries} onDelete={handleDelete} />
    </>
  );
};

export default ExpenseListPage;
