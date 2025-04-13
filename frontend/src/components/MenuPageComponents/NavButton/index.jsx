import React from "react";
import { Card } from 'primereact/card';
function NavButton({
    handleCategoryClick = ()=>{},icon = null, categoryName = "null",id = null 
}) {
  return (
    <Card>
      <button
        className="nav-button"
        onClick={() => handleCategoryClick(id)}
      >
        <div className="navi-icon">
          {icon}
        </div>
        <div className="navi-text">{categoryName}</div>
      </button>
    </Card>
  );
}

export default NavButton;
