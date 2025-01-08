import React, { useState } from "react";

function LoginForm() {
  const[login, setLogin ] = useState(false);
  const openLogin = () => setLogin(true);
  const closeLogin = () => setLogin(false);
  return (
    <>
      <div className="text-[#66451c]">
        <a href="#" onClick={openLogin}>Login</a>
      </div>
      {login && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#66451c]">LOGIN</h2>
            <form>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">Email</span>
                <input type="email" class="peer block mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">Password</span>
                <input type="password" class="peer block mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
              </label>
              <div className="flex flec-row justify-around items-center">
              <button class="bg-[#66451c] text-white hover:bg-[#e7d5b4] hover:text-[#66451c] text-center rounded-lg px-4 py-1 mt-7 ">
                Login
              </button>
              <button onClick={closeLogin} class="bg-red-500 hover:bg-red-700 text-white text-center rounded-lg px-4 py-1 mt-7 ">
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginForm;