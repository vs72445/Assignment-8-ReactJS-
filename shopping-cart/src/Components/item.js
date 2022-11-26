import React from 'react'
import './item.css'

const item = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <div className='item'>
        <div className="image_box">
            <img src={img} alt="product image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>Price : {price}</p>
            <button onClick={() => handleClick(item)}>Add to cart</button>
        </div>
    </div>
  )
}

export default item