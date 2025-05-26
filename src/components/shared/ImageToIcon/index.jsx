import React from "react";

const ImageToIcon = ({
  src,
  alt = "",
  width = "20px",
  height = "20px",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width: width, height: height }}    />
  );
};

export default ImageToIcon;
