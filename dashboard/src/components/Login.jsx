import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL; // Get the base URL from .env

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post(
            `${VITE_BASE_URL}/api/v1/user/login`,  // Use VITE_BASE_URL dynamically
            { email, password, confirmPassword, role: "Admin" },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );

        toast.success(data.message);
        setIsAuthenticated(true);
        navigateTo("/");

        // Reset form fields
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
    }
};

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="container form-component">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="form-title">WELCOME TO HEALTHCARE HOSPITAL</h1>
        <p>Only Admins Are Allowed To Access These Resources!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;