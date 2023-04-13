import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";
import Profile from "./screens/Profile";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        dispatch(login({
          uid: currentUser.uid,
          email: currentUser.email
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
