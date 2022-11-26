import React from 'react'
import './navbar.css'

const Navbar = ({ setShow, size , title}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          {title}
        </span>
        <div className="cart" >
          <span onClick={() => setShow(true)} >
            Home
          </span>
          <span onClick={() => setShow(false)}>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar