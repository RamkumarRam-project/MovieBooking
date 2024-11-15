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
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  
      // Add ticket price safely to total amount
      setTotalAmount((prevTotal) => {
        const numericPrice = parseFloat(item.ticketPrice.replace(/[^\d.-]/g, ""));
        return prevTotal + numericPrice;
      });
  
      toast.success(`${item.title} Added!`);
    } else {
      increaseQty(item.id);
    }
  };
  
  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  
    // Update total amount after increasing quantity
    setTotalAmount((prevTotal) => {
      const item = cartItems.find((item) => item.id === id);
  
      if (item) {
        const numericPrice = parseFloat(item.ticketPrice.replace(/[^\d.-]/g, ""));
        return prevTotal + numericPrice;
      }
  
      return prevTotal;
    });
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
  setTotalAmount((prevTotal) => {
    const item = cartItems.find((item) => item.id === id);

    if (item) {
      const numericPrice = parseFloat(item.ticketPrice.replace(/[^\d.-]/g, ""));
      return Math.max(0, prevTotal - numericPrice);
    }

    return prevTotal;
  });
};

// Remove item from cart
const removeFromCart = (itemId) => {
  const itemToRemove = cartItems.find((item) => item.id === itemId);
  if (itemToRemove) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

    // Update total amount after removing the item
    setTotalAmount((prevTotal) => {
      const numericPrice = parseFloat(itemToRemove.ticketPrice.replace(/[^\d.-]/g, ""));
      return Math.max(0, prevTotal - numericPrice);
    });

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
