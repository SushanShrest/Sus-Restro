import React from "react";
import { Carousel } from "antd";

interface SliderProps {
  images: string[];
}

const divStyle: React.CSSProperties = {
  placeItems: "center",
  width: "100%",
  boxSizing: "border-box",
};
const imgStyle: React.CSSProperties = {
  height: "400px",
  margin: "0 auto",
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "contain",
  padding: "5px",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Carousel autoplay>
      {images.map((src, i) => (
        <div key={i} style={divStyle}>
          <img src={src} alt={`slide-${i}`} style={imgStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
