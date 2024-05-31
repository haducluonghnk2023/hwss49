import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function CustomLink() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/homepage");
  };
  return (
    <div>
      <nav>
        <Link to="/homepage" onClick={redirect}>
          Homepage
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
