import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-gray-200 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-t-8 border-[#66451C]">
        <h2 className="text-2xl font-bold text-[#66451C] text-center mb-6">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-4">Enter your registered email to reset your password.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-[#66451C] font-medium">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#66451C]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#66451C] text-white py-3 rounded-md hover:bg-[#562E17] transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remember your password? <Link to="/login" className="text-[#66451C] font-medium hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;