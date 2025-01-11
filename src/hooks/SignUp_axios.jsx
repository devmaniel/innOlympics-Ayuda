import { useState } from "react";
import axiosConfig from "@/lib/axiosConfig";

const SignUp_axios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosConfig.post("/user/createUser.php", {
        username: formData.username,
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        middle_name: formData.middleName,
        address: formData.address,
        valid_id: formData.validId,
      });

      if (response.data.status === "success") {
        return { success: true, message: response.data.message };
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setError(err.message || "An error occurred during sign up");
      return { success: false, message: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignUp, isLoading, error };
};

export default SignUp_axios;
