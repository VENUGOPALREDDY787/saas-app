import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Settings() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  function toggleTheme() {

    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  }

  return (
    <DashboardLayout>

      <h1>Settings</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </DashboardLayout>
  );
}
