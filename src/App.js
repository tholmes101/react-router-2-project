import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Products from "./Components/Products";
import TeamForm from "./Components/TeamForm";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  let navigate = useNavigate();


  const handleUserLogin = (user) => {
    setCurrentUser(user);
    navigate('/products')
  }

  return (
    <div className="App">

      <Nav currentUser={currentUser}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleUserLogin={handleUserLogin}/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

