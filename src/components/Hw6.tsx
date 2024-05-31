import React from "react";
import { Link } from "react-router-dom";

export default function Hw6() {
  return (
    <div>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
}
