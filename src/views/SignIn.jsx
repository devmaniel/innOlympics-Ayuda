import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-left mb-6">Sign In</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          molestias facilis consectetur magnam in. Saepe!
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder="Enter username" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter password" />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
