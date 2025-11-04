import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

import { FaStar } from "react-icons/fa";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const cover = form.cover.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const userPhoto = user.photoURL;

    const reviewInfo = {
      title,
      cover,
      description,
      rating,
      year,
      genre,
      userEmail,
      userName,
      userPhoto,
    };
    fetch("https://game-review-website-server-1.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Review Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZXN8ZW58MHx8MHx8fDA%3D')] bg-cover flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-4xl border border-white/20">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center text-white mb-8"
        >
          Add New Game Review
        </h2>

        <form onSubmit={handleAddReview}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Game Cover */}
            <div data-aos="fade-up">
              <label className="label text-white">Game Cover Image URL</label>
              <input
                type="text"
                name="cover"
                required
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              />
            </div>

            {/* Game Title */}
            <div data-aos="fade-up" data-aos-delay="200">
              <label className="label text-white">Game Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter game title"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              />
            </div>

            {/* Rating */}
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="label text-white flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Rating (1–5)
              </label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                required
                placeholder="5"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              />
            </div>

            {/* Year */}
            <div data-aos="fade-up" data-aos-delay="600">
              <label className="label text-white">Publishing Year</label>
              <input
                type="number"
                name="year"
                required
                placeholder="2024"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              />
            </div>

            {/* Genre */}
            <div data-aos="fade-up" data-aos-delay="800">
              <label className="label text-white">Genre</label>
              <select
                name="genre"
                required
                className="select select-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              >
                <option value="" disabled selected>
                  Select genre
                </option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
                <option>Sports</option>
                <option>Strategy</option>
              </select>
            </div>

            {/* Description */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="md:col-span-2"
            >
              <label className="label text-white">Review Description</label>
              <textarea
                name="description"
                rows="4"
                required
                placeholder="Write your thoughts about the game..."
                className="textarea textarea-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30"
              ></textarea>
            </div>

            {/* User Info */}
            <div data-aos="fade-up" data-aos-delay="1200">
              <label className="label text-white">Your Email</label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-white/10 text-white border-white/30"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="1400">
              <label className="label text-white">Your Name</label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full bg-white/10 text-white border-white/30"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="btn bg-ghost rounded-full bg-gray-900 px-8 py-2 text-white text-lg"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
