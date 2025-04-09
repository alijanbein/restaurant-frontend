import React, { useState, useEffect } from "react";
import "./MenuPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { menuData } from "../../DEMO/menuData";
import myImage from "../../assets/icons/restaurent_icon.png";
import MenuItemCard from "../../components/MenuPageComponents/MenuItemCard";
import NavButton from "../../components/MenuPageComponents/NavButton";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filtered = menuData.filter((item) => item.category === selectedCategory);
    setItems(filtered);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderMenuItems = () =>
    items.map((item, idx) => {
      if (item.type === "separator") {
        return (
          <div className="menu-separator" key={idx}>
            {item.description}
          </div>
        );
      } else if (item.type === "food" || item.type === "drink") {
        return (
          <MenuItemCard
            key={idx}
            myImage={myImage}
            idx={idx}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      }
      return null;
    });

  return (
    <div className="container">
      <div className="header">
        <div className="title">Menu</div>
      </div>

      <div className="navi">
        <div >
          <button className="nav-button" onClick={() => handleCategoryClick("starters")}>
            <div className="navi-icon"><i className="fas fa-seedling"></i></div>
            <div className="navi-text">Starters</div>
          </button>
        </div>
        <div>
          <button className="nav-button" onClick={() => handleCategoryClick("mains")}>
            <div className="navi-icon"><i className="fas fa-pizza-slice"></i></div>
            <div className="navi-text">Mains</div>
          </button>
        </div>
        <div>
          <button className="nav-button" onClick={() => handleCategoryClick("desserts")}>
            <div className="navi-icon"><i className="fas fa-ice-cream"></i></div>
            <div className="navi-text">Desserts</div>
          </button>
        </div>
        <div >
          <button className="nav-button" onClick={() => handleCategoryClick("drinks")}>
            <div className="navi-icon"><i className="fas fa-wine-glass-alt"></i></div>
            <div className="navi-text">Drinks</div>
          </button>
        </div>
        {/* <div >
          <button className="nav-button" onClick={() => handleCategoryClick("sides")}>
            <div className="navi-icon"><i className="fas fa-utensils"></i></div>
            <div className="navi-text">Sides</div>
          </button>
        </div> */}
        <NavButton handleCategoryClick={handleCategoryClick} icon={
          <i className="fas fa-utensils"></i>
        } categoryName="Sides" />
        <div >
          <button className="nav-button" onClick={() => handleCategoryClick("specials")}>
            <div className="navi-icon"><i className="fas fa-star"></i></div>
            <div className="navi-text">Specials</div>
          </button>
        </div>
        <div >
          <button className="nav-button" onClick={() => handleCategoryClick("specials")}>
            <div className="navi-icon"><i className="fas fa-star"></i></div>
            <div className="navi-text">Specials</div>
          </button>
        </div>
    
      </div>

      <div className="menu">{renderMenuItems()}</div>
    </div>
  );
};

export default MenuPage;
