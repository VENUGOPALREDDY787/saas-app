import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { fetchUsers } from "../utils/api";

export default function Dashboard() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function loadUsers() {

      try {

        const data = await fetchUsers();

        setUsers(data);

      } catch (err) {

        setError("Failed to load users");

      } finally {

        setLoading(false);

      }

    }

    loadUsers();

  }, []);

  // Calculate company count
  const companyCount =
    new Set(users.map(user => user.company.name)).size;

  return (

    <DashboardLayout>

      <h1>Dashboard Summary</h1>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (

        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}>

          <div style={{
            background: "#18181C",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>

          <div style={{
            background: "#18181C",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Total Companies</h3>
            <p>{companyCount}</p>
          </div>

        </div>

      )}

    </DashboardLayout>

  );
}
