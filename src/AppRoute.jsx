import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Announcement_Page from "./views/Announcement_Page";
import Announcement_Content from "./views/Announcement_Content";

import History from "./views/History";
import About from "./views/About";

const ProtectedRoute = ({ children }) => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("documentId="));
  const location = useLocation();

  if (!cookie) {
    // Redirect to sign-in or sign-up if no cookie is found
    return <Navigate to="/sign_in" state={{ from: location }} />;
  }

  return children; // If cookie exists, render the protected route
};

const AppRoute = () => (
  <Routes>
    {/* Redirect to sign-up if there's no authentication */}
    <Route path="/" element={<Navigate to="/sign_in" />} />

    {/* SignIn and SignUp routes */}
    <Route path="/sign_in" element={<SignIn />} />
    <Route path="/sign_up" element={<SignUp />} />

    {/* Protected routes */}
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/about"
      element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/history"
      element={
        <ProtectedRoute>
          <History />
        </ProtectedRoute>
      }
    />
    <Route
      path="/announcement_page"
      element={
        <ProtectedRoute>
          <Announcement_Page />
        </ProtectedRoute>
      }
    />
    <Route
      path="/announcement_content"
      element={
        <ProtectedRoute>
          <Announcement_Content />
        </ProtectedRoute>
      }
    />

    {/* Catch-all route */}
    <Route path="*" element={<Navigate to="/sign_in" />} />
  </Routes>
);

export default AppRoute;
