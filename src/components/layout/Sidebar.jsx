import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  function logout() {

    localStorage.removeItem("token");

    navigate("/login");

  }

  return (
    <div style={{
      width: "200px",
      background: "#111",
      padding: "20px",
      color: "white"
    }}>

      <h3>Dashboard</h3>

      <Link to="/dashboard">Summary</Link>
      <br />
      <Link to="/users">Users</Link>
      <br />
      <Link to="/settings">Settings</Link>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}
