import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { SiNike } from "react-icons/si";
import Swal from "sweetalert2";

const url = "https://restaurant-backend-kyo9.onrender.com/";

const Menu = ({ items, lang }) => {
  const [ingredients, setIngredients] = useState([]);
  const [details, setDetails] = useState(null);
  const [objectToShow, setObjectToShow] = useState(null);
  // const fetchIngredients = async (id) => {
  //   try {
  //     const response = await fetch(`${url}/menu-item-ingredient/${id}`);
  //     if (!response.ok) {
  //       setIngredients([]);
  //       console.log("ingredients response error");
  //       return;
  //     }
  //     const data = await response.json();
  //     if (data) {
  //       setIngredients(data);
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  const handleViewMore = async (id, objectToShow, setDetails) => {
    // let info = "";
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
    let info = `<div style="text-align: left; font-family: Arial, sans-serif; max-width: 400px;">`;

    // Ingredients List
    info += `<h3 style="color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px;">Ingredients</h3>`;
    info += `<ul style="margin: 0; padding-left: 20px;">`;

    data.data.forEach((element) => {
      info += `<li style="margin-bottom: 5px;">
    <strong>${element.weight_grams} ${element.ingredient.unit}</strong> - ${element.ingredient.name_en}
  </li>`;
    });

    info += `</ul>`;

    // Dish Details
    info += `<h3 style="color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 15px;">Dish Info</h3>`;
    info += `<div style="margin-left: 10px;">`;
    objectToShow?.calories
      ? (info += `<p><strong>Calories:</strong> ${objectToShow?.calories}</p>`)
      : "";

    objectToShow?.spice_level
      ? (info += `<p><strong>Spice Level:</strong> ${objectToShow?.spice_level}</p>`)
      : "";
    objectToShow?.is_vegetarian
      ? (info += `<p><strong>Vegetarian:</strong> ${
          objectToShow?.is_vegetarian ? "✔" : ""
        }</p>`)
      : "";
    objectToShow?.is_vegan
      ? (info += `<p><strong>Vegan:</strong> ${
          objectToShow?.is_vegan ? "✔" : ""
        }</p>`)
      : "";
    objectToShow?.is_gluten_free
      ? (info += `<p><strong>Gluten-Free:</strong> ${
          objectToShow?.is_gluten_free ? "✔" : ""
        }</p>`)
      : "";
    // objectToShow?.available
    //   ? (info += `<p><strong>Available:</strong> ${
    //       objectToShow?.available ? " ✅" : ""
    //     }</p>`)
    //   : "";
    info += `</div>`;
    info += `</div>`;

    Swal.fire({
      title: "Dish Details",
      html: info,
      showCloseButton: true,
      showConfirmButton: false,
      background: "#f8f9fa",
      width: "500px",
      padding: "20px",
      customClass: {
        popup: "custom-swal-popup",
      },
    });
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
          calories,
          is_vegetarian,
          is_vegan,
          is_gluten_free,
          spice_level,
          available,
          price_usd,
        } = menuItem;
        let description = "";
        let name = "";
        let obj = {};
        obj.calories = calories;
        obj.is_vegetarian = is_vegetarian;
        obj.is_vegan = is_vegan;
        obj.is_gluten_free = is_gluten_free;
        obj.spice_level = spice_level;
        obj.available = available;
        // setObjectToShow(obj);

        if (lang === "en") {
          description = description_en;
          name = name_en;
        } else if (lang === "ar") {
          description = description_ar;
          name = name_ar;
        } else if (lang === "fr") {
          description = description_fr;
          name = name_fr;
        }
        return (
          <article key={id} className="menu-item">
            <img
              src={`https://restaurant-backend-kyo9.onrender.com/${menuItem.image_url}`}
              alt={name_en}
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                {/* <h4 className="price">${price_usd}</h4> */}
                <FcInfo
                  style={{ cursor: "pointer" }}
                  onClick={() => handleViewMore(id, obj, setDetails)}
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
