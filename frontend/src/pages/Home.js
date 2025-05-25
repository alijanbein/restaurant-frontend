import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import ImageToIcon from "../components/shared/ImageToIcon";
import restaurenICon from "../assets/icons/restaurent_icon.png";
import Spacer from "../components/shared/Spacer";
import BranchCard from "../components/HomePageComponents/BranchCard";
function HomePage() {
  const [branches, setBranches] = useState([]);

  const id = 1;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`branch/by_restaurant_id/${id}`);
      if (!response.ok) {
        console.log("response error");
        return;
      }
      const data = await response.json();
      if (data) {
        setBranches(data);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home"
    >
      <ImageToIcon
        className="image-icon"
        width={"20%"}
        height={"35%"}
        src={restaurenICon}
      />
      <Spacer color="#858585" thickness="1px" margin="32px 0" />
      <p>choose a branch</p>
      {branches?.map((item) => (
        <BranchCard key={item.id} id={item.id} branchName={item.location} />
      ))}
    </motion.div>
  );
}

export default HomePage;
