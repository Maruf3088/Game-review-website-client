import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AllReviews = () => {
  const allLoadedReviews = useLoaderData();
  const [allReviews, setAllReviews] = useState(allLoadedReviews);
  setAllReviews(allLoadedReviews);

  return (
    <div>
      <div className="text-center py-5">
        <h1 data-aos="fade-up" className="text-4xl font-bold">Game Reviews Hub</h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 mt-2">
          Explore what gamers are saying — honest reviews, real experiences, and
          ratings across every genre.
        </p>
      </div>

      {allReviews.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            🚫 No reviews available right now.
          </p>
          <Link to="/add-reviews">
            <button className="btn btn-primary">Add Your First Review</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-10">
          {allReviews.map((review ,index) => (
            <Link data-aos="fade-up" data-aos-delay={index * 100}  key={review._id} to={`/reviews/${review._id}`}>
              <div className="card h-full w-full md:w-96 backdrop-blur-md shadow-xl border border-white/10 mx-auto hover:scale-102 duration-200 ease-in transition ">
                <figure>
                  <img
                    src={review.cover}
                    alt={review.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="card-title text-lg font-bold mb-1">
                      {review.title}
                      <div className="badge badge-accent">{review.genre}</div>
                    </h2>
                    <p className="text-sm h-[100px]">
                      {review.description.split(" ").slice(0, 30).join(" ")}
                      {review.description.split(" ").length > 30 && "..."}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-between mt-2">
                      <span className="badge badge-outline border-white/30">
                        🎮 Genre: {review.genre}
                      </span>
                      <span className="badge badge-outline border-white/30">
                        📅 Year: {review.year}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="rating mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`mask mask-star-2 ${
                            review.rating >= star
                              ? "bg-orange-500"
                              : "bg-gray-500"
                          }`}
                          aria-label={`${star} star`}
                        ></div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-white/20 pt-3 flex items-center gap-3">
                      <img
                        src={review.userPhoto}
                        alt={review.userName}
                        className="w-10 h-10 rounded-full border object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-semibold flex items-center gap-1">
                          <FaUser className="text-gray-500" /> {review.userName}
                        </h4>
                        <p className="text-xs italic flex items-center gap-1 text-gray-500">
                          <MdEmail className="text-gray-400" />{" "}
                          {review.userEmail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {allReviews.length == 6 && (
        <div className="text-center py-5">
          <Link to="/all-reviews">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all text-white rounded-full text-sm shadow-md">
              View All Reviews
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
