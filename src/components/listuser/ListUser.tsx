import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nva@example.com",
      address: "HN",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      email: "nvb@example.com",
      address: "HCM",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nvc@example.com",
      address: "TH",
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>

            <NavLink to={`${user.id}`} state={{ user }}>
              View Details
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
