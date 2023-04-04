import React, { useState, useEffect } from 'react';
import "./navbar.css";
import logo from "./assets/netflix-logo.png";
import avatar from "./assets/Netflix-avatar.png";

const Navbar = () => {

  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    })
    
    return ()=>{window.removeEventListener("scroll", null);}
    
  })

  return (
    <nav className={`navbar ${handleShow && "navbar__black"}`}>
      <img className='navbar__netflix-logo' src={logo} alt="netflix-logo" />
      {/* {handleShow && (
        <div className="navbar__categories">
          <h5>Mystery</h5>
          <h5>Horror</h5>
        </div>
      )} */}
      <img className='navbar__account-logo' src={avatar} alt="account-logo" />
    </nav>
  );
}

export default Navbar;
