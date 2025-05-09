import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhbWVzfGVufDB8fDB8fHww')] bg-cover relative">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full sm:w-96 border border-white/20 text-white text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/Tc0t7VS/user.png"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 object-cover border-white/30"
        />
        <h2 className="text-2xl font-bold mb-2">
          {user?.displayName || "No Name Provided"}
        </h2>
        <p className="text-sm mb-6">{user?.email || "No Email Available"}</p>

        <button
          onClick={() => navigate("/update-profile")}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
