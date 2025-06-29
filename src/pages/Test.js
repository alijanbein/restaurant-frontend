import React, { useEffect, useState } from "react";
import CardComponent from "../components/HomePageComponents/Card";
import { useNavigate } from "react-router-dom";

function Test() {
  const [branches, setBranches] = useState([]);
  const url = "https://restaurant-backend-kyo9.onrender.com";
  const id = 1;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/branch/by_restaurant_id/${id}`);
        if (!response.ok) {
          console.log("Error fetching data");
          return;
        }
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = (id) => {
    navigate(`/menu/${id}`);
  };
  return (
    <div
      style={{
        maxHeight: "50vh",
        maxWidth: "250vw",
        marginTop: "30vh",
        marginLeft: "10vw",
      }}
    >
      {branches.map((branch) => {
        return (
          <div
            onClick={() => handleClick(branch.id)}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              padding: "20px",
            }}
          >
            <CardComponent key={branch.id} branch={branch} />
          </div>
        );
      })}
    </div>
  );
}

export default Test;
