import React, { useState } from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  const [form, setForm] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-gradient-to-br bg-gray-200">
        <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-4xl ">

          {/* Image Section */}
          <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gray-100 p-6">
            <img
              src="https://images.pexels.com/photos/30482895/pexels-photo-30482895/free-photo-of-beautiful-indian-wedding-ceremony-couple-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Wedding"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>


          {/* Login Form Section */}
          <div className="flex flex-col justify-center md:w-1/2 w-full p-8 bg-white">
            <h1 className="text-[#66451C] font-bold text-3xl text-center mb-6">LOGIN</h1>

            <form className="space-y-5">
              {/* Email Input */}
              <div className="flex items-center border-2 py-3 px-4 rounded-lg transition focus-within:border-indigo-500">
                <svg className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <input
                  className="w-full pl-3 outline-none border-none text-gray-700 text-lg"
                  type="text"
                  placeholder="Email or Mobile"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center border-2 py-3 px-4 rounded-lg transition focus-within:border-indigo-500">
                <svg className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input
                  className="w-full pl-3 outline-none border-none text-gray-700 text-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
                Login
              </button>
            </form>

            {/* Links */}
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <Link to={"/forgot-password"} className="hover:text-indigo-500 cursor-pointer">
                Forgot Password?
              </Link>
              <Link to={"/register"} className="hover:text-indigo-500 cursor-pointer">
                Register
              </Link>
            </div>

            {/* Social Login */}
            <p className="text-center text-sm text-gray-500 font-light mt-6">Or sign in with</p>

            <div className="flex justify-center mt-4">
              <button className="flex items-center py-2 px-6 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;