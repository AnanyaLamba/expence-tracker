import { useState } from "react";

const ExpenseList = ({ expenses, onDelete }) => {
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
                    <button onClick={() => onDelete(i)}>Delete</button>
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
