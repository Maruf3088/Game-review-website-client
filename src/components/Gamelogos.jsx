import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../assets/pc-game.png";
import logo2 from "../assets/ps5.png";
import logo3 from "../assets/r-star.png";
import logo4 from "../assets/xbox.png";

const Gamelogos = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-4xl font-bold">🎮 GameVerse</h1>
        <p className="text-center text-gray-600 mt-2">
          Step into the world where every pixel tells a story.
        </p>
      </div>
      <div data-aos="fade-up" className="container mx-auto py-4">
        <Marquee gradient={true} speed={50}>
          {[logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="w-32 h-32 object-contain mx-6 "
              />
            )
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default Gamelogos;
