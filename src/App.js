import { useState } from "react";
import "./App.css";
import ExpenseListPage from "./pages/ExpenseListPage";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/expense" element={<ExpenseFormPage />}></Route>
        <Route path="/view" element={<ExpenseListPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
