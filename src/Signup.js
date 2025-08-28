import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    githubUsername: "",
    rollNo: "",
    accessCode: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const res = await fetch("http://localhost:8080/api/register/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.text();
    setMessage(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
      <input name="mobileNo" placeholder="Mobile No" onChange={handleChange} /><br/><br/>
      <input name="githubUsername" placeholder="Github Username" onChange={handleChange} /><br/><br/>
      <input name="rollNo" placeholder="Roll No" onChange={handleChange} /><br/><br/>
      <input name="accessCode" placeholder="Access Code" type="password" onChange={handleChange} /><br/><br/>
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}

export default Signup;
