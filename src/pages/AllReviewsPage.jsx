import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AllReviewsPage = () => {
  const loadedAllReviews = useLoaderData();

  const [filteredReviews, setFilteredReviews] = useState(loadedAllReviews);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Extract unique genres for the filter dropdown
  const genres = ["All", ...new Set(loadedAllReviews.map((r) => r.genre))];

  // Handle filtering and sorting
  useEffect(() => {
    window.scrollTo(0, 0);
    let updated = [...loadedAllReviews];

    // Filter by genre
    if (selectedGenre !== "All") {
      updated = updated.filter((review) => review.genre === selectedGenre);
    }

    // Sort by selected option
    if (sortOption === "rating-asc") {
      updated.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "rating-desc") {
      updated.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "year-asc") {
      updated.sort((a, b) => a.year - b.year);
    } else if (sortOption === "year-desc") {
      updated.sort((a, b) => b.year - a.year);
    }

    setFilteredReviews(updated);
  }, [selectedGenre, sortOption, loadedAllReviews]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhbWVzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="bg-black/60 w-full min-h-screen px-4 py-10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 data-aos="fade-up" className="text-4xl font-bold text-white">All Game Reviews</h1>
            <p data-aos="fade-up" data-aos-delay="200"  className="text-gray-300 mt-2 max-w-xl mx-auto">
              Browse reviews from gamers across genres. Filter by genre and sort
              by rating or release year.
            </p>
          </div>

          {/* Filter and Sort Dropdowns */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap justify-center gap-4 mb-8">
            <select
              className="select select-bordered bg-white/10 text-white"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            <select
              className="select select-bordered bg-white/10 text-white"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="year-asc">Year: Old to New</option>
              <option value="year-desc">Year: New to Old</option>
            </select>
          </div>

          {/* Cards */}
          {filteredReviews.length === 0 ? (
            <p className="text-center text-white text-xl font-semibold py-20">
              🚫 No reviews found for the selected filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review , index) => (
                <Link data-aos="fade-up" data-aos-delay={index * 100} key={review._id} to={`/reviews/${review._id}`}>
                  <div className="card backdrop-blur-xl border border-white/10 bg-white/5 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                    <figure>
                      <img
                        src={review.cover}
                        alt={review.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                    </figure>

                    <div className="card-body flex flex-col justify-between space-y-4">
                      <div>
                        <h2 className="card-title text-lg font-bold mb-1 text-white">
                          {review.title}
                          <div className="badge badge-accent">
                            {review.genre}
                          </div>
                        </h2>
                        <p className="text-sm text-gray-300 h-[90px]">
                          {review.description.split(" ").slice(0, 30).join(" ")}
                          {review.description.split(" ").length > 30 && "..."}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-between mt-2">
                          <span className="badge badge-outline border-white/30 text-white">
                            🎮 Genre: {review.genre}
                          </span>
                          <span className="badge badge-outline border-white/30 text-white">
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
                            <h4 className="text-sm font-semibold text-white flex items-center gap-1">
                              <FaUser className="text-gray-400" />{" "}
                              {review.userName}
                            </h4>
                            <p className="text-xs italic text-gray-300 flex items-center gap-1">
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
        </div>
      </div>
    </div>
  );
};

export default AllReviewsPage;
