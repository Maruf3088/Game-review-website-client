import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user?.email) return;

    fetch(
      `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/reviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/reviews/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              setMyReviews(myReviews.filter((r) => r._id !== id));
              Swal.fire("Deleted!", "The review has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdateClick = (review) => {
    setSelectedReview(review);
    document.getElementById("update_modal").showModal();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedReview = {
      title: form.title.value,
      genre: form.genre.value,
      year: form.year.value,
      rating: form.rating.value,
      cover: form.cover.value,
      description: form.description.value,
    };

    fetch(
      `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/reviews/${selectedReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Update local state
          const updatedList = myReviews.map((r) =>
            r._id === selectedReview._id ? { ...r, ...updatedReview } : r
          );
          setMyReviews(updatedList);
          Swal.fire("Success!", "Review updated successfully.", "success");
        }
        document.getElementById("update_modal").close();
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[80vh]">
      <h1 data-aos="fade-up" className="text-2xl font-bold mb-6">
        My Reviews: {myReviews.length}
      </h1>

      <div data-aos="fade-up" data-aos-delay="200" className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Sl.</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review, index) => (
              <tr
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="hover:bg-gray-100 font-semibold"
                key={review._id}
              >
                <td className="font-semibold">
                  {myReviews.indexOf(review) + 1}
                </td>
                <td className="font-semibold">{review.title}</td>
                <td>{review.genre}</td>
                <td>{review.rating}</td>
                <td className="flex gap-2 flex-wrap">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => handleUpdateClick(review)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {myReviews.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">
            Update Review
          </h3>
          {selectedReview && (
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              {["title", "genre", "year", "rating", "cover", "description"].map(
                (field) => (
                  <div key={field}>
                    <label className="label">
                      <span className="label-text font-semibold capitalize">
                        {field === "cover" ? "Cover Image URL" : field}
                      </span>
                    </label>
                    {field === "description" ? (
                      <textarea
                        name={field}
                        defaultValue={selectedReview[field]}
                        className="textarea textarea-bordered w-full min-h-[100px]"
                        placeholder={`Write your ${field}`}
                        required
                      />
                    ) : (
                      <input
                        type={field === "rating" ? "number" : "text"}
                        name={field}
                        defaultValue={selectedReview[field] || ""}
                        className="input input-bordered w-full"
                        placeholder={
                          field === "cover"
                            ? "https://example.com/image.jpg"
                            : field
                        }
                        min={field === "rating" ? "1" : undefined}
                        max={field === "rating" ? "5" : undefined}
                        required={field !== "cover"} // Optional
                      />
                    )}
                  </div>
                )
              )}

              <div className="modal-action flex justify-between items-center">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
                <form method="dialog">
                  <button className="btn btn-outline">Cancel</button>
                </form>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default MyReviews;
