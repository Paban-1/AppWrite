import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../AppWrite/auth";
import { logOut } from "../../Store/authSlice";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const LogOutHandler = () => {
    authService.LogOut().then(() => dispatch(logOut()));
  };
  return <button className="bg-gray-500 p-2">logOut</button>;
};

export default LogOutBtn;
