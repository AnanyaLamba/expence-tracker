// import React from 'react';
// //these are all the seperate components that we are using as inputs in form 
// export const DateInput = ({value,onChange}) =>{
//     return(
//         <div>
//             <label>Date:</label>
//             <input type="date" value={value} onChange={(e) => onChange(e.target.value)} required/>
//         </div>
//     );
// };

// export const AmountInput = ({value, onChange}) =>{
//     return(
//         <div>
//             <label>Amount:</label>
//             <input type="text" value={value} onChange={(e) => onChange(e.target.value)} required />
//         </div>
//     );
// };

// export const TitleInput = ({value, onChange}) =>{
//     return(
//         <div>
//             <label>Title:</label>
//             <input type="text" value={value} onChange={(e) => onChange(e.target.value)} required />
//         </div>
//     );
// };


// const categories = [
//     "Entertainment", "Food", "Groceries", "Gift", "Apparel", "Self Care", "Donation", "Capital Expense", "Travel", "Repair", "Medical", "Miscellaneous", "Petrol"
//   ];
  
//   export const CategoryInput = ({ selectedCategory, onChange, newCategory, onNewCategoryChange }) => {
//     return (
//       <div>
//         <label>Category:</label>
//         <div>
//           {categories.map(category => (
//             <label key={category}>
//               <input type="radio" name="category" value={category} checked={selectedCategory === category} onChange={() => onChange(category)} />
//               {category}
//             </label>
//           ))}
//           <input type="text" value={newCategory} onChange={(e) => onNewCategoryChange(e.target.value)} placeholder="Add New Category" />
//         </div>
//       </div>
//     );
//   };

//   export const PaymentModeInput = ({ selectedMode, onChange }) => {
//     return (
//       <div>
//         <label>Payment Mode:</label>
//         <div>
//           <label>
//             <input type="radio" name="payment-mode" value="Cash" checked={selectedMode === 'Cash'} onChange={() => onChange('Cash')} />
//             Cash
//           </label>
//           <label>
//             <input type="radio" name="payment-mode" value="Digital" checked={selectedMode === 'Digital'} onChange={() => onChange('Digital')} />
//             Digital
//           </label>
//         </div>
//       </div>
//     );
//   };

//   export const RecurringInput = ({ value, onChange }) => {
//     return (
//       <div>
//         <label>Recurring:</label>
//         <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
//       </div>
//     );
//   };

