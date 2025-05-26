  import { motion } from "framer-motion";
  import React, { useEffect, useState } from "react";
  import "./HomePage.css";
  import ImageToIcon from "../components/shared/ImageToIcon";
  import restaurenICon from "../assets/icons/restaurent_icon.png";
  import BranchCard from "../components/HomePageComponents/BranchCard";

  function HomePage() {
    const [branches, setBranches] = useState([]);

    const id = 1; // Replace with dynamic restaurant ID if needed

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
      <div className="page-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="content-container"
        >
          {/* Header Section */}
          <div className="header-section">
            <h1 className="page-title">Choose Your Branch</h1>
             <div className="underline"></div>
          </div>

          {/* Branches Section */}
          <div className="branches-section">
            <div className="branches-wrapper">
              {branches?.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 
                  }}
                  className="branch-item"
                >
                  <BranchCard 
                    id={item.id} 
                    branchName={item.location} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  export default HomePage;