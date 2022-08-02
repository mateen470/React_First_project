import React, { useState } from "react";
import "./Crousal.css";
import ImageSlider from "./Slider";

const Crousal = () => {
  const slides = [
    {
      url: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  ];
  return (
    <div className="crousal_main_div">
      <div className="crousal_main">
        <div className="medium_div_no1"></div>
        <div className="big_div_no2"></div>
        <div className="biggest_div_no3">
          <div className="containerStyles">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;
