import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/cartSystem';

import "./CartItem.css";

const CartItem = (props) => {
  const dispatch=useDispatch()
  return (

    <div>
      <table>
        <tr>

          <th>
            <td>Product</td>
            <td>Details</td>
          </th>
        </tr>
        <tr>
          <tbody>

            <td>
              <td>
                <img src={props.image} id='cartItemImage' /><span id='cartItemName'>{props.name}</span>
              <h5 id='quantity'>Qty:{props.Qty} </h5>
              </td>
            </td>
            <td><h3 style={{color:"black"}}>{props.price}</h3></td>
            <button id='remove' onClick={(item)=>{dispatch(removeFromCart(item))}} >remove</button>

          </tbody>
        </tr>


      </table>

    </div>
  )
}

export default CartItem