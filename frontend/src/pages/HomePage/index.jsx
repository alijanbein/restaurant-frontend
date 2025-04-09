import React from "react";
import "./HomePage.css";
import ImageToIcon from "../../components/shared/ImageToIcon";
import restaurenICon from "../../assets/icons/restaurent_icon.png";
import Spacer from "../../components/shared/Spacer";
import BranchCard from "../../components/HomePageComponents/BranchCard";
function HomePage() {
  return (
    <div className="home">
      <ImageToIcon
        className="image-icon"
        local
        width={"20%"}
        height={"35%"}
        src={restaurenICon}
      />
      <Spacer color="#858585" thickness="1px" margin="32px 0" />
      <p>choose a branch</p>
      <BranchCard branchName="Beirut" />
      <BranchCard branchName="Beqaa" />
      <BranchCard branchName="Jnoub" />
    </div>
  );
}

export default HomePage;
