import React from "react";
import { useLocation } from "react-router-dom";

export default function UseDetail() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
