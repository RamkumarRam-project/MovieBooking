import React, { useContext } from 'react';
import { CartContext } from './addcard';


const CartView = () => {
  const { cartItems, totalAmount, count, removeFromCart } = useContext(CartContext);

  return (
   <div className='container-fluid payment'style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg)"}}>
    <div className='row'>
    <h2>Shopping Cart</h2>
    <p>Total Items: {count}</p>
      
        {cartItems.map((item) => (
          <div className='col-sm-6  col-lg-4  border border-2 my-3  p-3'> 
          <li key={item.id}>
            <p className='fs-3' style={{color:"darkred"}}>{item.name}</p>
            <p className='text-success fs-3'>Price: ${item.ticketprice}</p>
            <button className='btn bg-danger text-white' onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
          </div>
        ))}
      
      <h3 style={{color:"red"}}>Total Amount: ${totalAmount}</h3>
    </div>
    </div>
    
  );
};

export default CartView;
