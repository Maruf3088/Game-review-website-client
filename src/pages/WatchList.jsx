import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/watchLists?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setWatchList(data))
      .catch((error) => console.error("Error fetching watch list:", error));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your watch list.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://game-reviews-server-7ud5ihzx7-maruf3088s-projects.vercel.app/watchLists/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              setWatchList(watchList.filter((item) => item._id !== id));
              Swal.fire(
                "Deleted!",
                "Item removed from your watch list.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[80vh]">
      <h1 data-aos="fade-up" className="text-3xl font-bold text-center mb-2">
        My Watch List
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-center text-gray-600 mb-6"
      >
        You have {watchList.length} {watchList.length === 1 ? "game" : "games"}{" "}
        in your list
      </p>

      <div className="overflow-x-auto">
        <table
          data-aos="fade-up"
          data-aos-delay="400"
          className="table table-zebra w-full text-sm"
        >
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>Game Name</th>
              <th>Genre</th>
              <th>Release Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchList.map((watch, index) => (
              <tr
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="hover:bg-gray-100 font-semibold"
                key={watch._id}
              >
                <td>{index + 1}</td>
                <td className="font-semibold">{watch.gameName}</td>
                <td>{watch.gameGenre}</td>
                <td>{watch.gameYear}</td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(watch._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {watchList.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No items in your watch list.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
