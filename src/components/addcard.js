import  { createContext, useState } from 'react';
import{ toast} from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  let count = cartItems.length;
  
  // Add item to cart
  const addToCart = (item) => { 
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (!isItemInCart) {
      setCartItems((prevItems) => [...prevItems, item]);
      setTotalAmount((prevTotal) => prevTotal + item.ticketprice); 
      
      // Show toast notification for adding to cart
      toast.success(` added to cart!`);
    } else {
      // Optional: Show a toast if the item is already in the cart
      toast.error(`is already in the cart`);
    }
  };
  
  // Remove item from cart
  const removeFromCart = (itemId) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      setTotalAmount((prevTotal) => prevTotal - itemToRemove.ticketprice);
      
      // Show toast notification for removing from cart
      toast.success (`removed from cart`);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
