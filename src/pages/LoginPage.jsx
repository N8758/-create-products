import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        alert("Login successful!");
        navigate("/home");
      } else {
        alert(data.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      setLoading(false);
      alert("An error occurred. Please try again later.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
