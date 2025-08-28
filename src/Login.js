import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", accessCode: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/api/register/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.text();
    setMessage(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
      <input name="accessCode" placeholder="Access Code" type="password" onChange={handleChange} /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
