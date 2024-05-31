import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const navigation = useNavigate();
  const admin = () => {
    navigation("/admin");
  };
  const product = () => {
    navigation("/product");
  };
  const account = () => {
    navigation("/account");
  };
  return (
    <div>
      <h1>B8</h1>
      <nav>
        <b onClick={admin}>Admin</b>
        <b onClick={product}>Product</b>
        <b onClick={account}>Account</b>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
