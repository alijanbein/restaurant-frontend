import React from "react";

const ImageToIcon = ({
  src,
  alt = "",
  width = "40px",
  height = "40px",
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
