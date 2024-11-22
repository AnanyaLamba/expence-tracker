import { useState } from "react";
import ExpenseList from "../Component/ExpenseList";

const ExpenseListPage = () => {
    const [entries, setEntries] = useState(() => {
        //geting the data from the local storage
        const savedEntries = localStorage.getItem("entries");
        //if there are entries so we are parsing them if not so we are returning the empty array
        return savedEntries ? JSON.parse(savedEntries) : '[]';
      });
    return ( 
        <>
        <ExpenseList expenses={entries} />
        </>
     );
}
 
export default ExpenseListPage;