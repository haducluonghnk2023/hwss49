import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const localtion = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hanldeLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser !== null) {
      const parsedUser = JSON.parse(storedUser);
      if (
        parsedUser &&
        parsedUser.email === email &&
        parsedUser.password === password
      ) {
        navigate("/Home", { state: { user: parsedUser } });
      }
      // console.log(parsedUser.email);
      // console.log(localtion.state.email);
    } else {
      setError("email hoac mk k hop le");
    }
  };

  // console.log("gia tri localtion", localtion);
  return (
    <div>
      <h1>Login Account</h1>

      <label htmlFor="">Your email </label>
      <br />
      <input
        type="text"
        placeholder="name@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input
        type="text"
        placeholder="..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={hanldeLogin}>Login an account</button>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <a>
        Already have an account? <Link to="/Register"> Register here</Link>
      </a>
    </div>
  );
}
