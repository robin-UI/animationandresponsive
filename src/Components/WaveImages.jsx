import React from "react";
import "./style.css";

const WaveImages = ({ image, color, bgColor, rotate = 0 }) => {
  return (
    <div className="rippleContainerImage" style={{ rotate: rotate + "deg" }}>
      <div className="rippleHover">
        <div className="rotaingcontainer">
          <div className="ripplecontaivp" style={{ backgroundColor: bgColor }}>
            <img
              src={image}
              alt=""
              className="no-rotate"
              style={{ rotate: "-" + rotate + "deg" }}
            />
          </div>

          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.925194 20.6192C0.925193 21.0041 1.34186 21.2447 1.67519 21.0522L18.3509 11.4245C18.6842 11.2321 18.6842 10.751 18.3509 10.5585L1.67519 0.930797C1.34186 0.738348 0.925192 0.97891 0.925193 1.36381L0.925194 20.6192Z"
              fill={color}
              stroke="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
WaveImages.defaultProps = {
  rotate: 0, // default value for rotate
  // You can add other default values here if needed
};

export default WaveImages;
