import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // Update with your actual Firebase config path

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    password: "",
  });
  const [validId, setValidId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValidId(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validId) {
      alert("Please upload a valid ID.");
      return;
    }

    const validIdPath = `/images/Valid ID/${validId.name}`;

    try {
      setIsLoading(true); // Set loading to true

      // Simulate a delay to show loading state
      setTimeout(async () => {
        try {
          // Simulate saving the file to the public directory
          const formDataWithId = {
            ...formData,
            valid_id_path: validIdPath,
          };

          const docRef = await addDoc(collection(db, "users"), formDataWithId);

          alert(`User created successfully! Document ID: ${docRef.id}`);
        } catch (error) {
          console.error("Error adding user:", error);
          alert("Failed to create user. Please try again.");
        } finally {
          setIsLoading(false); // Set loading to false after submission
        }
      }, 1500); // 1.5-second delay to simulate loading
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-ranade">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-left">Sign Up</h1>
        <p>
          Create your account by filling up your information and attaching valid
          ID.
        </p>

        {/* User Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Label htmlFor="first_name">First Name</Label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full p-2 mb-2 border rounded-md"
            />
            <Label htmlFor="middle_name">Middle Name</Label>
            <input
              type="text"
              id="middle_name"
              value={formData.middle_name}
              onChange={handleChange}
              placeholder="Enter middle name"
              className="w-full p-2 mb-2 border rounded-md"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="last_name">Last Name</Label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full p-2 mb-2 border rounded-md"
            />
            <Label htmlFor="address">Address</Label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House No/Street/Barangay"
              className="w-full p-2 mb-2 border rounded-md"
            />
          </div>
        </div>

        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full p-2 mb-2 border rounded-md"
        />

        <Label htmlFor="username">Username</Label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full p-2 mb-2 border rounded-md"
        />

        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full p-2 mb-2 border rounded-md"
        />

        <Label htmlFor="valid_id">Valid ID</Label>
        <input
          type="file"
          id="valid_id"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 mb-2 border rounded-md"
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating User..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
