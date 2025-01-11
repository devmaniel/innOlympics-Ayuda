import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-left mb-6">Sign Up</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          molestias facilis consectetur magnam in. Saepe!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <input
                type="text"
                id="address"
                placeholder="House No/Street/Barangay"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Full Width File Upload */}
        <div className="space-y-2">
          <Label htmlFor="validId">Valid ID (upload picture)</Label>
          <div className="space-y-2">
            <input
              type="file"
              id="validId"
              accept="image/*"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary 
               file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
               file:bg-primary file:text-black hover:file:bg-primary/90"
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
