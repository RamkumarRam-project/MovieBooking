import  { createContext, useState } from 'react';
import{ toast} from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  

  let count = cartItems.length;
  
  // Add item to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (!isItemInCart) {
      // If item is not in cart, add it with a quantity of 1
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 }
      ]);
      setTotalAmount((prevTotal) => prevTotal + item.ticketprice);
  
      // Show toast notification for adding to cart
      toast.success(`${item.name} added to cart!`);
    } else {
      // If item is already in cart, increase quantity match the and not inculude
      increaseQty(item.id);
    }
  };
  //increment decrement function
  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    // Update total amount after increasing quantity
    setTotalAmount((prevTotal) =>
      prevTotal + cartItems.find((item) => item.id === id).ticketprice
    );
  };
  
  // Decrement quantity of a specific product in cart
  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
    // Update total amount after decreasing quantity
    const item = cartItems.find((item) => item.id === id);
  setTotalAmount((prevTotal) =>
    Math.max(0, prevTotal - item.ticketprice)
  );
};
  
  // Remove item from cart
  const removeFromCart = (itemId) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      setTotalAmount((prevTotal) => prevTotal - itemToRemove.ticketprice);
      // Show toast notification for removing from cart
      toast.error(`Deleted`);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, count, addToCart,increaseQty,decreaseQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
