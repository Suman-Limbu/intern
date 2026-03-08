import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("backend url/login", { email, password });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.role);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto bg-slate-500">
        <form className="max-w-6xl mx-auto" onSubmit={handleLogin}>
          <p>Enter Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
          />
          <p>Enter password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
