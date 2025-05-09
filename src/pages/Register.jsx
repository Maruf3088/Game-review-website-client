import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const Register = () => {
  const { creatUser, signOutUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, photoURL, email, password, confirmPassword);

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "opps!",
        text: "Password doesn't match",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "opps!",
        text: "Password must be at least 6 characters",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "opps!",
        text: "Password must contain at least one upper case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/(?=.*[0-9])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "opps!",
        text: "Password must contain at least one number",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "opps!",
        text: "Password must contain at least one lower case",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoURL);
        form.reset();
        signOutUser();
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Yayy!",
          text: "You have successfully registered",
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

  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://images.unsplash.com/photo-1498736297812-3a08021f206f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGdhbWVzfGVufDB8fDB8fHww')] bg-cover relative">
      <div data-aos="flip-right" className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full sm:w-[500px] border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-white"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              className="w-full mt-2 p-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Paste your photo URL"
            />
          </div>

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

          {/* Password Field */}
          <div className="mb-4 relative">
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

          {/* Confirm Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="rePassword"
              className="block text-sm font-medium text-white"
            >
              Re-enter Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="rePassword"
              name="confirmPassword"
              className="w-full mt-2 p-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Re-enter your password"
              required
            />
            <span
              className="absolute top-11 right-3 text-white cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-md font-semibold w-full shadow-md"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-blue-300 hover:text-blue-400"
            >
              {" "}
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
