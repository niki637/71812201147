import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Users from "./Users";

function App() {
  const [page, setPage] = useState("signup"); // default page

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Fullstack Register App</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("signup")} style={{ marginRight: "10px" }}>Signup</button>
        <button onClick={() => setPage("login")} style={{ marginRight: "10px" }}>Login</button>
        <button onClick={() => setPage("users")}>View Users</button>
      </div>

      <div>
        {page === "signup" && <Signup />}
        {page === "login" && <Login />}
        {page === "users" && <Users />}
      </div>
    </div>
  );
}

export default App;
