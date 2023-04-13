import React from 'react';
import "./profile.css";
import Navbar from "../Navbar";
import avatar from "../assets/Netflix-avatar.png";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

const Profile = () => {
  const user = useSelector(selectUser);

  const logoutHandler = async () => {
    await signOut(auth);
  }

  return (
    <div className='profile'>
      <Navbar />
      <div className="profile__body">
        <h1>Your Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="netflix-logo" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <button className="profile__button" onClick={logoutHandler}>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
