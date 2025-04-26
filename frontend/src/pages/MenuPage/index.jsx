import React, { useState, useEffect } from "react";
import "./MenuPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { menuData } from "../../DEMO/menuData";
import myImage from "../../assets/icons/restaurent_icon.png";
import MenuItemCard from "../../components/MenuPageComponents/MenuItemCard";
import NavButton from "../../components/MenuPageComponents/NavButton";
import { useParams } from "react-router-dom";
import { categoreisDemo } from "../../DEMO/menuData";
import UseHttp from "../../hooks/httpHook";
import ImageToIcon from "../../components/shared/ImageToIcon";
import { Sidebar } from "primereact/sidebar";
import MenuHeader from "../../components/shared/MenuHeader";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [categoreis, setCategories] = useState(categoreisDemo);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("En");
  const id = useParams().id;
  console.log(id);
  
  const [isLoading, error, sendRequest] = UseHttp();
  useEffect(() => {
    const fetchData = async () => {
      const currentCategorie = await sendRequest(
        `menuItem/by_category_id/${selectedCategory}`
      );
      console.log(currentCategorie);

      setItems(currentCategorie);
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendRequest(`Category/by_branch_id/${id}`);
      setCategories(response);
      const defaultCategorie = await sendRequest(
        `menuItem/by_category_id/${response[0].id}`
      );
      setItems(defaultCategorie);
    };
    fetchData();
  }, []);

  const openSideBar = () => {
    Swal.fire({
      title: "Ingredients",
      text: `
    70g chicken ,

    barbcu sause  ,
    20g bread,
    5g pickle,
    
 `,
 footer:"430 kcal",
    });
  };

  const handleCategoryClick = (category_id) => {
    setSelectedCategory(category_id);
  };

  const changeLanguageHandler = (lang) => {
    setCurrentLanguage(lang);
  };
  console.log(currentLanguage);

  return (
    <>
      <MenuHeader
        currentLanguage={currentLanguage}
        changeLanguageHandler={changeLanguageHandler}
      />
      <div className="container">
        <div className="header">
          <div className="title">Menu</div>
        </div>

        <div className="navi">
          {categoreis.map((item, key) => (
            <NavButton
              key={key}
              id={item.id}
              handleCategoryClick={handleCategoryClick}
              icon={<ImageToIcon src={`http://localhost:3000${item.image_url}`} className="navi-icon" />}
              // icon={<ImageToIcon src={`http://localhost:3000/images/1745175024837-restaurant.png`} className="navi-icon" />}
              categoryName={item[`name_${currentLanguage.toLowerCase()}`]}
            />
          ))}
        </div>
        {/* <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h2>Ingridient</h2>
          <p>70g chicken</p>
          <br />
          <p> barbcu sause</p>
          <br />
          <p>20g bread</p>
          <br />
          <p>5g pickle</p>
          <br />
          <h2>Calories</h2>
          <p>430 kcal</p>
          <br />
        </Sidebar> */}

        <div className="menu">
          {items.map((item, idx) => {
            return (
              <MenuItemCard
                key={idx}
                myImage={myImage}
                idx={idx}
                name={item[`name_${currentLanguage.toLowerCase()}`]}
                description={
                  item[`description_${currentLanguage.toLowerCase()}`]
                }
                price={item.price_usd}
                onShowSpecial={openSideBar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
