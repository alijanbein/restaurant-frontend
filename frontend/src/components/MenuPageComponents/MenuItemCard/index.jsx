import React from 'react';
import ImageToIcon from '../../shared/ImageToIcon';

function MenuItemCard({idx=0,myImage="",name="not found",description="not found.",price = 0,onShowSpecial = () => {}}) {
  return (
    <div className="menu-item" key={idx}>
    <ImageToIcon src={myImage} className="image-icon"/>
    <div className='menu-item-info'>
      <div className="menu-item-name">{name}</div>
      <div className="menu-item-description">{description}</div>
    <div className="menu-item-price">{price}</div>
    </div>
    <div onClick={onShowSpecial} className='menu-special'>
      <p>More Info</p>
    </div>
    <div className="card flex justify-content-center">
   
</div>
  </div>
  )
}

export default MenuItemCard