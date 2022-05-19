import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const ToggleContext = createContext();

function UseCartToggle({ children }) {
  // toggle for cart
  const [show, setShow] = useState(false);
  return (
    <CartContext.Provider value={show}>
      <ToggleContext.Provider value={setShow}>
        <div>{children}</div>
      </ToggleContext.Provider>
    </CartContext.Provider>
  );
}

export { UseCartToggle, CartContext, ToggleContext };
