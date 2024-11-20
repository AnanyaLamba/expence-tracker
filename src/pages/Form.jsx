import { useState } from "react";
import "./Form.css";
const Form = () => {
    const[entries , setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {title,category,price,date};
    setEntries((prevEntries) => {
        //creating a new array of the prev entries and upending the new entries to it
        const updateEntries = [...prevEntries, entry]
        console.log("updateEntries:", updateEntries);
        return updateEntries;
    })
  };
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
          <select name="category" id="category"
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value);
          }}>
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
            placeholder="$400"
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

        <button id="submit-btn" type="submit">Add expence</button>
      </form>
    </div>

    {entries.length > 0 && <div id="table">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entries , i)=>(
                    <tr key={i}>
                        <td>{entries.title}</td>
                        <td>{entries.category}</td>
                        <td>{entries.price}</td>
                        <td>{entries.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>}
    </>
  );
};

export default Form;
