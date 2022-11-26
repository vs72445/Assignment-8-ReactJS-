import React, { useState } from 'react'
import './App.css';

import Navbar from './Components/navbar'
import Shop from './Components/shop'
import Cart from './Components/cart'



const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, item])
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <React.Fragment>
      <Navbar title={"Vishal Shopping App"} setShow={setShow} size={cart.length} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {
        warning && <div className="warning">Item is already added to the cart.</div>
      }
    </React.Fragment>
  );
};

export default App;