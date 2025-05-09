import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Players = () => {
  const players = [
    {
      name: "ShadowKnight",
      game: "Valorant",
      avatar: avatar1,
      rank: "Diamond III",
      country: "USA",
    },
    {
      name: "PixelHunter",
      game: "Fortnite",
      avatar: avatar2,
      rank: "Champion League",
      country: "UK",
    },
    {
      name: "ArcadeQueen",
      game: "PUBG",
      avatar: avatar3,
      rank: "Conqueror",
      country: "India",
    },
  ];

  return (
    <div
      className="my-10  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhbWVzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="bg-black/70 w-full h-full px-4 py-14">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          🌟 Player Spotlight
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Meet the Legends. Witness the Skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {players.map((player, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 400}
              className="rounded-2xl backdrop-blur-lg bg-white/10 border border-white/10 shadow-xl p-6 flex flex-col items-center min-h-[320px] transition-transform hover:scale-105"
            >
              <img
                src={player.avatar}
                alt={player.name}
                className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                {player.name}
              </h3>
              <p className="text-indigo-300">{player.game}</p>
              <p className="text-sm text-gray-200 mt-2">
                🏆 Rank: {player.rank}
              </p>
              <p className="text-sm text-gray-200">
                🌍 Country: {player.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
