import { useState } from "react";
import "./ExpenseForm.css";
import { useNavigate } from "react-router-dom";
const ExpenseForm = () => {
  const [entries, setEntries] = useState(() => {
    //geting the data from the local storage
    const savedEntries = localStorage.getItem("entries");
    //if there are entries so we are parsing them if not so we are returning the empty array
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { title, category, price, date };
    setEntries((prevEntries) => {
      //creating a new array of the prev entries and upending the new entries to it
      const updateEntries = [...prevEntries, entry];
      //we are saving the data in the local storage
      localStorage.setItem("entries", JSON.stringify(updateEntries));
      console.log("updateEntries:", updateEntries);
      navigate('/view');
      return updateEntries;
    });
    //clearing the entries after submission
    setTitle("");
    setCategory("");
    setPrice("");
    setDate("");
  };

  //navigate to view page
  const navigate = useNavigate();
  
  //function to navigate to view page on submission
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Expense Tracker</h2>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              placeholder="please enter your title here"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          <label htmlFor="category">
            Category:
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
              <option value="recharge">Recharge</option>
              <option value="travel">Travel</option>
              <option value="SIP">SIP</option>
            </select>
          </label>

          <label htmlFor="price">
            Price:
            <input
              type="text"
              id="price"
              placeholder="Enter the price here"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>

          <label htmlFor="date">
            Date:
            <input
              type="date"
              placeholder=""
              id="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </label>

          <button id="submit-btn" type="submit" >
            Add expence
          </button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
