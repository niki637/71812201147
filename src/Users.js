import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/register")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>All Registered Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} - {u.email} - {u.mobileNo} - {u.githubUsername} - {u.rollNo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
