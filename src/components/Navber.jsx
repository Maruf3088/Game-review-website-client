import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="bg-black/70 backdrop-blur-lg shadow-lg sticky top-0 z-50 text-white border-b border-white/10">
      <div className="container mx-auto navbar py-4 px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden focus:outline-none hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg glass rounded-box w-52 bg-white/10 backdrop-blur text-white"
            >
              {["/", "/all-reviews", "/add-reviews", "/my-reviews", "/game-watchlist"].map((path, idx) => (
                <li key={idx}>
                  <Link to={path} className="hover:text-blue-400 transition duration-200">
                    {path === "/" ? "Home" : path.split("/")[1].replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 text-sm md:text-2xl font-bold hover:text-blue-400 transition duration-300">
            <img className="w-10 h-10 rounded-full border-2 border-white" src={logo} alt="Logo" />
            Chill Games
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-sm font-medium">
            {["/", "/all-reviews", "/add-reviews", "/my-reviews", "/game-watchlist"].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="hover:text-blue-400 transition duration-200"
                >
                  {path === "/" ? "Home" : path.split("/")[1].replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex gap-3 items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium hidden md:block">{user?.displayName || "User"}</span>
              <Link to="/myProfile">
                <img
                  src={user?.photoURL || "https://i.ibb.co/2kRksZk/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white hover:scale-105 transition-transform"
                />
              </Link>
              <button
                onClick={signOutUser}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full text-sm transition-all shadow">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
