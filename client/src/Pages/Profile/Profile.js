import React from "react";
import { useSelector } from "react-redux";
import Home from "../home/Home";
import "./Profile.css";
import Sidebar from "../../Components/sidebar/Sidebar";


const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile" >
      <Sidebar className="side" />
      <Home></Home>
    </div>
  );
};

export default Profile;
