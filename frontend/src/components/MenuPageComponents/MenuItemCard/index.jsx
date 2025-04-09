import React from 'react';
import ImageToIcon from '../../shared/ImageToIcon';
function MenuItemCard({idx=0,myImage="",name="not found",description="not found.",price = 0}) {
  return (
    <div className="menu-item" key={idx}>
    <ImageToIcon src={myImage} className="image-icon"/>
    <div>
      <div className="menu-item-name">{name}</div>
      <div className="menu-item-description">{description}</div>
    </div>
    <div className="menu-item-price">{price}</div>
  </div>
  )
}

export default MenuItemCard