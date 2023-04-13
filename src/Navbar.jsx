import React, { useState, useEffect } from 'react';
import "./navbar.css";
import logo from "./assets/netflix-logo.png";
import avatar from "./assets/Netflix-avatar.png";
import { useNavigate } from 'react-router-dom';
import {BiSearch} from "react-icons/bi";
import {IoMdNotifications} from "react-icons/io";

const Navbar = () => {

  const [handleShow, setHandleShow] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    })

    return () => { window.removeEventListener("scroll", null); }

  })

  return (
    <nav className={`navbar ${handleShow && "navbar__black"}`}>
      <img className='navbar__netflix-logo' onClick={() => navigateTo('/')} src={logo} alt="netflix-logo" />
      <div className="navbar__categories">
        <h5>Mystery</h5>
        <h5>Horror</h5>
        <h5>Adventure</h5>
        <h5>Romance</h5>
        <h5>Action</h5>
        <h5>Documentaries</h5>
      </div>
      <div className="navbar__icons">
          <BiSearch size={27} />
          <IoMdNotifications size={27} />
      </div>
        <img className='navbar__account-logo' onClick={() => navigateTo('/profile')} src={avatar} alt="account-logo" />
    </nav>
  );
}

export default Navbar;
