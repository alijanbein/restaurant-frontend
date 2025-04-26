import React, { useEffect, useState } from "react";
import "./HomePage.css";
import ImageToIcon from "../../components/shared/ImageToIcon";
import restaurenICon from "../../assets/icons/restaurent_icon.png";
import Spacer from "../../components/shared/Spacer";
import BranchCard from "../../components/HomePageComponents/BranchCard";
import UseHttp from "../../hooks/httpHook";
function HomePage() {
  const [branches, setBranches] = useState([
    {
      id: "12d2dd",
      name: "beirut",
    },
    {
      id: "12d2dv3vw",
      name: "beqaa",
    },
    {
      id: "12d23wvd",
      name: "jnoub",
    },
  ]);

  const [isLoading, error, sendRequest] = UseHttp();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest("branch");
      setBranches(data)
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <ImageToIcon
        className="image-icon"
        width={"20%"}
        height={"35%"}
        src={restaurenICon}
      />
      <Spacer color="#858585" thickness="1px" margin="32px 0" />
      <p>choose a branch</p>
      {branches.map((item) => (
        <BranchCard key={item.id} id={item.id} branchName={item.location} />
      ))}
    </div>
  );
}

export default HomePage;
