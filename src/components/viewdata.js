import React, { useContext } from 'react';
import { CartContext } from './addcard';



const CartView = () => {
  const { cartItems, totalAmount, count, removeFromCart ,increaseQty,decreaseQty} = useContext(CartContext);

  

  return (
   <div className='container payment'>
     <h2>Shopping Cart</h2>
     <p>Total Items: {count}</p>
     <h3 style={{color:"red"}}>Total Amount: ${totalAmount}</h3>
    <div className='row'>
   
      
        {cartItems.map((item) => (
          
        <div className='viewcard-page col-sm-12'>
          <p key={item.id} > </p>
          
            <div className='row border-bottom border-3 '>
              <div className='col-sm-6 viewcard-secomd'>
            <div className='card border-0 bg-transparent cards-item'>
               <img src={item.image} alt='view' height={"300px"}/>
               </div>
              </div>
            
              <div className='col-sm-6 viewcard-secomd '>
            <p className='fs-3' style={{color:"darkblue"}}>{item.name}</p>
            <p style={{color:"darkblue"}}>Price: ${item.ticketprice}</p>
          <div className='view-icon'>
            <button className='btn bg-danger text-white' onClick={() => removeFromCart(item.id)}><i class="fa-solid fa-trash-can"></i></button>
            <button className='view-up' onClick={()=>decreaseQty(item.id)}><span ><i class="fa-solid fa-angle-down"></i></span></button>
             <p className='fw-bold quantity-show'>{item.quantity}</p>
           <button className='view-up' onClick={()=>increaseQty(item.id)}><i class="fa-solid fa-angle-up"></i></button>
           </div>
              <button className='view-btn'>Booking</button>
          </div>
        </div>
       </div>
         
       
      
          
        ))}
      
      
    </div>
    </div>
    
    
  );
};

export default CartView;
