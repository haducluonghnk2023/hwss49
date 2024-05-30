import React from "react";
import { Link } from "react-router-dom";

export default function Hw3() {
  return (
    <div>
      {" "}
      <h1>Login Account</h1>
      <label htmlFor="">Your email </label>
      <br />
      <input type="text" />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input type="text" />
      <br />
      <button>Login an account</button>
      <br />
      <br />
      <a>
        Already have an account? <Link to="/Register"> Register here</Link>
      </a>
    </div>
  );
}
