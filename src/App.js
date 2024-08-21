import React, { useState } from "react";
import Kamala from "../src/assets/kamala.jpg";
import Trump from "../src/assets/trump.jpg";
import Header from "./components/Header";
import ConnectButton from "./components/Wallet";
import { PLACEBET } from "./integration";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleImageClick = (name) => {
    setSelectedImage(name);
    setSelectedName(name);
  };

  const handleClick = async () => {
    try {
      const tokenId = await PLACEBET({ candidate: selectedName });
      console.log("tokenID:", tokenId);
    } catch (error) {
      console.error("Error placing bet:", error);
    }
  };

  
  

  return (
    <div className="flex justify-center items-center mx-auto bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <div className="items-center space-y-6">
        <Header />
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold text-white">
            Choose
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <div>
            <img
              className={` h-[180px] md:h-[250px] rounded w-auto hover:border-4 border-blue-500 hover:scale-105 transition-transform duration-150 cursor-pointer ${
                selectedImage === "kamala"
                  ? "border-4 border-blue-500 transition-transform duration-150 scale-105"
                  : ""
              }`}
              src={Kamala}
              onClick={() => handleImageClick("kamala")}
            />
          </div>
          <div>
            <img
              className={` h-[180px] md:h-[250px] rounded w-auto hover:border-4 border-blue-500 hover:scale-105 transition-transform duration-150 cursor-pointer ${
                selectedImage === "trump"
                  ? "border-4 border-blue-500 transition-transform duration-150 scale-105"
                  : ""
              }`}
              src={Trump}
              onClick={() => handleImageClick("trump")}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
             onClick={handleClick}
            className="text-white w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px]"
          >
            Bet{" "}
            {selectedName &&
              `on ${
                selectedName.charAt(0).toUpperCase() + selectedName.slice(1)
              }`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
