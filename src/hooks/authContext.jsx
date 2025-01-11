// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axiosConfig from "@/lib/axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if the user is already authenticated when the app loads
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axiosConfig.get("auth/session.php");
        if (response.data.user) {
          setUser(response.data.user); // Set user from session if logged in
        }
      } catch (err) {
        console.error("Error checking session:", err);
      }
    };

    checkSession();
  }, []);

  const login = (userData) => {
    setUser(userData); // Set the user when logged in
  };

  const logout = async () => {
    try {
      await axiosConfig.post("auth/logout.php");
      setUser(null); // Clear user state when logged out
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
