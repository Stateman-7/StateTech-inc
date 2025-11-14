import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const loadProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(`${API}/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.user) {
        setUser(data.user);
      } else {
        alert(data.message || "Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      alert("Unable to load profile. Check your connection or try again later.");
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-sky-950 text-white flex flex-col">
      <nav className="bg-sky-900/70 backdrop-blur-md shadow-md p-4 flex justify-between items-center border-b border-sky-800/40">
        <h1 className="text-2xl font-extrabold text-sky-400">StateTech Inc.</h1>
        <button
          onClick={handleLogout}
          className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl font-semibold transition"
        >
          Logout
        </button>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        {loading ? (
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Loading your profile...
          </h2>
        ) : (
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            {user ? `Welcome, ${user.email}` : "User not found"}
          </h2>
        )}
        <p className="text-gray-300 text-lg">
          Your secure dashboard for managing company systems and analytics.
        </p>
      </main>

      <footer className="p-4 text-center text-gray-400 border-t border-sky-800/40">
        © 2025 StateTech Inc. All rights reserved.
      </footer>
    </div>
  );
}
