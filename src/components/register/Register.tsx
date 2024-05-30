import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, SetEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = () => {
    setError("");
    if (!email || !password || !confirmPassword) {
      setError("Tất cả không được để trống");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không trùng khớp");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const isEmailTaken = users.some((user: any) => user.email === email);

    if (isEmailTaken) {
      setError("Email không được trùng khớp.");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    let user = {
      email: email,
      pass: password,
    };

    navigate("/Login", { state: user });
  };
  return (
    <div>
      <h1>Register Account</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label htmlFor="">Your email</label>
      <br />
      <input
        value={email}
        type="text"
        placeholder="name@gmail.com"
        onChange={(e) => SetEmail(e.target.value)}
      />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input
        value={password}
        type="text"
        placeholder="..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="">Confirm Password</label>
      <br />
      <input
        value={confirmPassword}
        type="text"
        placeholder="..."
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register an account</button>
      <br />
      <a>
        Already have an account? <Link to="/Login"> Login here</Link>
      </a>
    </div>
  );
}
