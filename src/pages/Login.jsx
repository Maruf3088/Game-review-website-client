import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.from || "/");
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        const mes = error.message;
        Swal.fire({
          icon: "error",
          title: "opps!",
          text: mes,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.from || "/");
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://plus.unsplash.com/premium_photo-1677870728110-3b3b41677a9b?w=900&auto=format&fit=crop&q=60')] bg-cover relative">
      {/* Glassmorphism card */}
      <div data-aos="flip-left" className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full sm:w-96 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back!
        </h2>

        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full mt-2 p-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Enter your password"
              required
            />
            <span
              className="absolute top-11 right-3 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all w-full text-white rounded-full text-md font-semibold shadow-md"
          >
            Log In
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mb-6 py-3 bg-white/20 border border-white/30 text-white font-semibold rounded-lg flex items-center justify-center gap-3 mt-5 hover:bg-white/30 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold text-blue-300 hover:text-blue-400"
            >
              {" "}
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
