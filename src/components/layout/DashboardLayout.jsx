import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{
        flex: 1,
        padding: "20px",
        background: "#000",
        minHeight: "100vh",
        color: "white"
      }}>
        {children}
      </div>

    </div>
  );
}
