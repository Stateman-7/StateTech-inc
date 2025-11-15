// src/api.js
const API = import.meta.env.VITE_API_URL;

export const AuthAPI = {
  login: async (email, password) => {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    return data;
  },

  signup: async (name, email, password) => {
    const res = await fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");
    return data;
  },

  getProfile: async (token) => {
    const res = await fetch(`${API}/profile`, {
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to load profile");
    return data.user;
  }
};
