import React from 'react';
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import "./Cart.css";
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector((item) => item.user);
  return (



    <div className='cartContainer'>
      <h3>Cart</h3>
      <Link to={"/Products"}> <img id="closeCart" src='https://static.thenounproject.com/png/6447-200.png' /></Link>
      <hr></hr>
      {cart?.map((item) => {
        return (

          <CartItem image={item.image}
            name={item.name}
            price={item.price}
            Qty={item.quantity}
          />
        )
      })}
      <Link to={"/address"}><button id='checkOut'>Checkout</button>
      </Link>

    </div>
  )
}

export default Cart