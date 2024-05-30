import React from "react";
import { Link } from "react-router-dom";

export default function Hw4() {
  return (
    <div>
      <h1>Register Account</h1>

      <label htmlFor="">Your email</label>
      <br />
      <input type="text" placeholder="name@gmail.com" />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input type="text" />
      <br />
      <label htmlFor="">Confirm Password</label>
      <br />
      <input type="text" />
      <br />
      <button>Register an account</button>
      <br />
      <a>
        Already have an account? <Link to="/Login"> Login here</Link>
      </a>
    </div>
  );
}
