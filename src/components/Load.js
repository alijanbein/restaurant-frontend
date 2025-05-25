import { jellyTriangle } from "ldrs";
import ControllerImage from "../styles/fast_food.webp";

jellyTriangle.register();

const Load = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          // backgroundImage: `url(${ControllerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2",
        }}
      ></div>
      <div
        style={{
          opacity: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <l-jelly-triangle
          size="50"
          speed="1.75"
          color="#00678b"
        ></l-jelly-triangle>
      </div>
    </>
  );
};

export default Load;
