import React, { useContext } from 'react';
import { CartContext } from './addcard';



const CartView = () => {
  const { cartItems, totalAmount, count, removeFromCart ,increaseQty,decreaseQty} = useContext(CartContext);

  

  return (
    <div className="container payment text-center py-4">
    <p className="text-info fs-5">Total Items: {count}</p>
    <h3 className="text-danger fs-4 mb-4">Total Amount: ${totalAmount}</h3>
    
    <div className="row gy-4">
      {cartItems.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="card cart-card shadow-sm p-3">
            <div className="row g-4 align-items-center">
              {/* Image Section */}
              <div className="col-sm-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "250px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
  
              {/* Details Section */}
              <div className="col-sm-7">
                <div className="text-start">
                  <h4 className="text-primary mb-3">{item.title}</h4>
                  <p className="mb-2">
                    <span className="text-dark fw-bold">Price:</span> ${item.ticketPrice}
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    {/* Quantity Control */}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="fw-bold fs-5">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => increaseQty(item.id)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </button>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
    
  );
};

export default CartView;
