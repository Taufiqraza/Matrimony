import React from "react";
import {Route,Routes } from "react-router";
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import LoginForm from './pages/Login/LoginForm.jsx'
import Profile from './pages/Profile/Profile.jsx'
import MainLayout from "./Layout/MainLayout.jsx";
import RegisterForm from "./pages/Register/RegiterForm.jsx";
import ForgotPassword from "./pages/ForgetPassword/ForgetPassword.jsx";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App;
