import React from "react";

function NavButton({
    handleCategoryClick = ()=>{},icon = null, categoryName = "null" 
}) {
  return (
    <div>
      <button
        className="nav-button"
        onClick={() => handleCategoryClick(categoryName)}
      >
        <div className="navi-icon">
          {/* <i className="fas fa-utensils"></i> */}
          {icon}
        </div>
        <div className="navi-text">{categoryName}</div>
      </button>
    </div>
  );
}

export default NavButton;
