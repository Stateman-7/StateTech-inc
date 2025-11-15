import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../api"; // Use your reusable API helper
import Logo from "/logo.png"; // Make sure this is in /public folder

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ----- Floating Tiles -----
  useEffect(() => {
    const updateTiles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / 150);
      const rows = Math.ceil(height / 150);
      const total = cols * rows;

      const newTiles = Array.from({ length: total }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotate: Math.random() * 45 - 22.5,
        speedX: (Math.random() - 0.5) * 0.05,
        speedY: (Math.random() - 0.5) * 0.05,
        speedRotate: (Math.random() - 0.5) * 0.05,
      }));

      setTiles(newTiles);
    };

    updateTiles();
    window.addEventListener("resize", updateTiles);
    return () => window.removeEventListener("resize", updateTiles);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTiles((prev) =>
        prev.map((tile) => ({
          ...tile,
          x: (tile.x + tile.speedX) % 100,
          y: (tile.y + tile.speedY) % 100,
          rotate: (tile.rotate + tile.speedRotate) % 360,
        }))
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // ----- Login Handler -----
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await AuthAPI.login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-sky-950 text-white overflow-hidden">
      {/* Floating Tiles Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {tiles.map((tile, i) => (
          <img
            key={i}
            src={Logo}
            alt="Logo"
            className="opacity-10 absolute"
            style={{
              width:
                window.innerWidth < 640
                  ? "80px"
                  : window.innerWidth < 1024
                  ? "120px"
                  : "150px",
              height: "auto",
              top: `${tile.y}%`,
              left: `${tile.x}%`,
              transform: `rotate(${tile.rotate}deg)`,
              transition:
                "transform 0.1s linear, top 0.1s linear, left 0.1s linear",
            }}
          />
        ))}
      </div>

      {/* Login Form */}
      <div className="relative bg-sky-900/50 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-sky-800/50 backdrop-blur-md z-10">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-sky-400">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-xl bg-sky-950/50 border border-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-xl bg-sky-950/50 border border-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-sky-400 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
