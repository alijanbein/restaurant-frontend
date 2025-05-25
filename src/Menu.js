import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import Swal from "sweetalert2";

const url = "http://localhost:3000";

const handleViewMore = async (id, details, setDetails) => {
  let info = "";
  const response = await fetch(`${url}/menu-item-ingredient/${id}`);
  const data = await response.json();
  if (!response.ok) {
    Swal.fire({
      title: "Oops",
      text: data.message,
      icon: "error",
    });
    return;
  }
  data.data.forEach((element) => {
    info +=
      element.weight_grams +
      " " +
      element.ingredient.unit +
      " " +
      element.ingredient.name_en +
      " ";
  });
  setDetails(info);

  Swal.fire({
    title: "Ingredients",
    text: info,
    icon: "info",
    draggable: true,
  });
};

const Menu = ({ items, lang }) => {
  const [ingredients, setIngredients] = useState([]);
  const [details, setDetails] = useState(null);
  const fetchIngredients = async (id) => {
    try {
      const response = await fetch(`${url}/menu-item-ingredient/${id}`);
      if (!response.ok) {
        setIngredients([]);
        console.log("ingredients response error");
        return;
      }
      const data = await response.json();
      if (data) {
        setIngredients(data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const {
          id,
          name_en,
          name_ar,
          name_fr,
          image_url,
          description_en,
          description_ar,
          description_fr,
          price_usd,
        } = menuItem;
        let description = "";

        if (lang === "en") {
          description = description_en;
        } else if (lang === "ar") {
          description = description_ar;
        } else if (lang === "fr") {
          description = description_fr;
        }
        return (
          <article key={id} className="menu-item">
            <img
              src={`http://localhost:3000${menuItem.image_url}`}
              alt={name_en}
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{name_en}</h4>
                {/* <h4 className="price">${price_usd}</h4> */}
                <MdExpandMore
                  style={{ cursor: "pointer" }}
                  onClick={() => handleViewMore(id, details, setDetails)}
                />
              </header>
              <p className="item-text">{description}</p>
              <footer className="price">{price_usd}$</footer>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
