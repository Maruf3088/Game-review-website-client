import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedSingleReview = useLoaderData();

  const handleAddToWatchlist = () => {
    const gameName = loadedSingleReview.title;
    const gameGenre = loadedSingleReview.genre;
    const gameYear = loadedSingleReview.year;
    const gameRating = loadedSingleReview.rating;
    const userName = user.displayName;
    const userEmail = user.email;
    const watchlistInfo = {
      gameName,
      gameGenre,
      gameYear,
      gameRating,
      userName,
      userEmail,
    };

    fetch(
      "https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/watchlist",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(watchlistInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added to Watchlist",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="text-center pb-10">
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Game Reviews Hub
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-100 mt-2"
          >
            Explore what gamers are saying — honest reviews, real experiences,
            and ratings across every genre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div data-aos="fade-left" data-aos-delay="300" className="p-6">
            <img
              src={loadedSingleReview.cover}
              alt={loadedSingleReview.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Details Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="bg-white/5   p-6 space-y-4  "
          >
            <h2 className="text-3xl font-bold">{loadedSingleReview.title}</h2>

            <p className="text-md text-gray-100">
              {loadedSingleReview.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-3">
              <span className="badge badge-outline border-white/30">
                🎮 Genre: {loadedSingleReview.genre}
              </span>
              <span className="badge badge-outline border-white/30">
                📅 Year: {loadedSingleReview.year}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-md font-semibold">Rating</p>
              <div className="rating mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`mask mask-star-2 ${
                      loadedSingleReview.rating >= star
                        ? "bg-blue-400"
                        : "bg-gray-500"
                    }`}
                    aria-label={`${star} star`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-white/20 pt-3 flex items-center gap-4">
              <img
                src={loadedSingleReview.userPhoto}
                alt={loadedSingleReview.userName}
                className="w-10 h-10 rounded-full border object-cover"
              />
              <div>
                <p className="text-sm font-semibold flex items-center gap-1">
                  <FaUser className="text-gray-400" />{" "}
                  {loadedSingleReview.userName}
                </p>
                <p className="text-sm italic text-gray-300 flex items-center gap-1">
                  <MdEmail className="text-gray-400" />{" "}
                  {loadedSingleReview.userEmail}
                </p>
              </div>
            </div>

            {user && (
              <button
                onClick={handleAddToWatchlist}
                className="btn btn-accent text-black w-full mt-5"
              >
                Add to WatchList
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
