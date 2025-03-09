import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ profileFor: "" });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 py-10 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-3xl border-t-8 border-[#66451C]">
        <h2 className="text-3xl font-bold text-[#66451C] text-center mb-6 uppercase tracking-wide">
          Matrimonial Registration
        </h2>
        <form className="space-y-6">
          {/* Profile For */}
          <div>
            <label className="block text-[#66451C] font-semibold mb-2">Create Profile For</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Self", "Son", "Daughter", "Sister", "Brother", "Relative"].map((option) => (
                <div
                  key={option.toLowerCase()}
                  className={`py-3 px-4 text-center text-sm font-semibold rounded-lg cursor-pointer transition-all duration-300 ${
                    formData.profileFor === option.toLowerCase()
                      ? "bg-[#e7d5b4] text-[#66451C] border border-[#66451C] shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setFormData({ ...formData, profileFor: option.toLowerCase() })}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Full Name", "Email", "Phone Number", "Date of Birth"].map((label, index) => (
              <div key={index}>
                <label className="block text-[#66451C] font-semibold mb-2">{label}</label>
                <input
                  type={label.includes("Email") ? "email" : label.includes("Date") ? "date" : "text"}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66451C]"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  required
                />
              </div>
            ))}
          </div>

          {/* Dropdown Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Gender", "Marital Status"].map((label, index) => (
              <div key={index}>
                <label className="block text-[#66451C] font-semibold mb-2">{label}</label>
                <select className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66451C]">
                  <option value="">Select {label.toLowerCase()}</option>
                  {label === "Gender"
                    ? ["Male", "Female", "Other"].map((option) => <option key={option}>{option}</option>)
                    : ["Single", "Divorced", "Widowed"].map((option) => <option key={option}>{option}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Location */}
          <div>
            <label className="block text-[#66451C] font-semibold mb-2">Country</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66451C]"
              placeholder="Enter your country"
              required
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-[#66451C] font-semibold mb-2">Upload Profile Picture</label>
            <input
              type="file"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66451C]"
              required
            />
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Password", "Confirm Password"].map((label, index) => (
              <div key={index}>
                <label className="block text-[#66451C] font-semibold mb-2">{label}</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66451C]"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  required
                />
              </div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-5 h-5 accent-[#66451C]" required />
            <label className="text-[#66451C] text-sm font-medium">
              I agree to the <Link to="/terms" className="text-[#66451C] underline">Terms & Conditions</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#66451C] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-[#562E17] transition-all duration-300">
            Register
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-[#66451C] font-semibold underline">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
