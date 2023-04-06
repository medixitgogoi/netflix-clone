import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })

  // const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
