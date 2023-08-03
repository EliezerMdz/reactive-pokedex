import React from "react";
// @ts-ignore
import classes from "./image-slider.module.css";

const ImageSlider: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes["slider-wrapper"]}></div>
    </section>
  );
};

export default ImageSlider;
