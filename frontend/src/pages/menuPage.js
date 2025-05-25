import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import Categories from "../Categories";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import LanguageSelect from "../components/MenuPageComponents/langaugeSelect";
const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const id = useParams().id;

  const url = "http://localhost:3000";

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${url}/category/by_branch_id/${id}`);
      if (!response.ok) {
        console.log("error");
        return;
      }
      const categoriesData = await response.json();

      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const response = await fetch(
        `${url}/menuItem/by_category_id/${selectedCategory}`
      );
      const json = await response.json();

      if (response.ok) {
        setMenuItems(json);
        setIsLoading(false);
      }
      if (!response.ok) {
        console.log("error fetching");
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  const filterItems = (category) => {
    setSelectedCategory(category.id);
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
          <span className="lang">
            <LanguageSelect setSelectedLanguage={setSelectedLanguage} />
          </span>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} lang={selectedLanguage} />
      </section>
    </motion.main>
  );
};

export default MenuPage;
