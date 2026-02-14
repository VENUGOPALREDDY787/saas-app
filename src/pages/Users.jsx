import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { fetchUsers } from "../utils/api";

export default function Users() {

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

  return (

    <DashboardLayout>

      <h1>Users</h1>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (

        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>

            {users.map(user => (

              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </DashboardLayout>

  );
}
