import { useState } from "react";


const ExpenseList = () => {
  // Initialize state with entries from localStorage
  const [expenses, setExpenses] = useState(() => {
    //getting the data from the localstorage
    const savedEntries = localStorage.getItem("entries");

    //if we have data then parse it and return otherwise return an empty array
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const handleDelete = (idx) => {
    // Update state by filtering out the deleted entry
    const updatedEntries = expenses.filter((_, i) => i !== idx);
    setExpenses(updatedEntries);

    // Update localStorage
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      {expenses.length > 0 && (
        <div id="table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((entries, i) => (
                <tr key={i}>
                  <td>{entries.title}</td>
                  <td>{entries.category}</td>
                  <td>{entries.price}</td>
                  <td>{entries.date}</td>
                  <td>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ExpenseList;
