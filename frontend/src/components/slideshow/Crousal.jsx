import React, { useState } from "react";
import "./Crousal.css";

const Crousal = () => {
  const [image, setImage] = useState("");

  return (
    <div className="crousal_main_div">
      <div className="crousal_main">
        <div className="medium_div_no1"></div>
        <div className="big_div_no2"></div>
        <div className="biggest_div_no3">
          <img className="main_image" src={image} alt="#" />
          
        </div>
      </div>
    </div>
  );
};

export default Crousal;
