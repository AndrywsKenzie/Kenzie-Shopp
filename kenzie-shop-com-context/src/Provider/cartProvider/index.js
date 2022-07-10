import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@cart")) || []
  );
  const addQuantidade = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      product.qtde += 1;
      setCart([...cart]);
      localStorage.setItem("@cart", JSON.stringify(cart));
    } else {
      product.qtde = 1;
      setCart([...cart, product]);
      localStorage.setItem("@cart", JSON.stringify([...cart, product]));
    }
  };
  const removeQuantidade = (product) => {
    if (product.qtde === 1) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart([...newCart]);
      localStorage.setItem("@cart", JSON.stringify(newCart));
    } else {
      product.qtde -= 1;
      setCart([...cart]);
      localStorage.setItem("@cart", JSON.stringify([...cart]));
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addQuantidade,
        removeQuantidade,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
