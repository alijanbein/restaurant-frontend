import React from "react";
import "./BranchCard.css";
import { IoRestaurant } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BranchCard = ({ branchName, id }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("nav");

    navigate(`/menu/${id}`);
  };

  return (
    <div onClick={clickHandler} className="branch-card">
      <IoRestaurant size={30} />
      <h3>{branchName}</h3>
    </div>
  );
};

export default BranchCard;
