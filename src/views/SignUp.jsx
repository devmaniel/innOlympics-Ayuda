import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import axiosConfig from "@/lib/axiosConfig";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      address: e.target.address.value,
      valid_id: e.target.validId.files[0], // Get the file
    };

    try {
      const response = await axiosConfig.post("/user/createUser.php", formData);

      if (response.data.status === "success") {
        alert("User created successfully!");
        // You can add navigation or other success handling here
      } else {
        alert(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-left">Sign Up</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          molestias facilis consectetur magnam in. Saepe!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <input
                type="text"
                id="middleName"
                placeholder="Enter middle name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <input
                type="text"
                id="address"
                placeholder="House No/Street/Barangay"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Full Width File Upload */}
        <div className="space-y-2">
          <Label htmlFor="validId">Valid ID (upload picture)</Label>
          <div className="space-y-2">
            <input
              type="file"
              id="validId"
              accept="image/*"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary file:text-black hover:file:bg-primary/90"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
