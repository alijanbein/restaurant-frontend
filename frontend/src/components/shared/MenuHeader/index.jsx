import React from "react";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
const lang = ["En","Fr","Ar"]
const MenuHeader = ({changeLanguageHandler =() => {},currentLanguage = "En"}) => {
    console.log(currentLanguage);
    
  return (
    <div className="flex justify-content-end align-items-center p-3 shadow-2 bg-white ">
        <Dropdown value={currentLanguage}  options={lang} onChange={(e) => {
            changeLanguageHandler(e.value)
        }} optionLabel="name" 
    placeholder="Select language" className="w-7rem md:w-14rem" />
    </div>
  );
};

export default MenuHeader;
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};