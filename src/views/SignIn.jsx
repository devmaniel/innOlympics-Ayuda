import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // Update with your actual Firebase config path
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    try {
      // Query Firestore to find user with matching username
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming only one user with the same username
        const user = querySnapshot.docs[0].data();

        if (user.password === password) {
          // Store Document ID in cookieStorage with expiration of 1 hour
          const documentId = querySnapshot.docs[0].id; // Get the document ID
          const expirationTime = new Date();
          expirationTime.setHours(expirationTime.getHours() + 1); // Set expiration time to 1 hour

          document.cookie = `documentId=${documentId}; expires=${expirationTime.toUTCString()}; path=/`;

          navigate("/announcement_page"); // Redirect to the announcement page
        } else {
          setErrorMessage("Incorrect password.");
        }
      } else {
        setErrorMessage("Username not found.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-ranade">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-left">Sign In</h1>

        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
