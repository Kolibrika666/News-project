import React from "react";
import { ImageType } from "./models/bunner";

const Image = (props: ImageType) => {
  return (
    <picture>{props ? <img src={props.image} alt="news"></img> : null}</picture>
  );
};

export default Image;
