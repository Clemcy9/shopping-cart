import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/loading";
import Nav from "./views/navBar";
import Hero from "./views/hero";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);

  function increaseCart() {
    setCartItems((previous) => previous + 1);
  }

  function decreaseCart() {
    setCartItems((previous) => {
      if (previous <= 0) {
        return (previous = 0);
      }
      return (previous -= 1);
    });
  }

  function emptyCart() {
    setCartItems(0);
  }

  return (
    <div>
      <Nav cartItems={cartItems} emptyCart={emptyCart}></Nav>
      <Hero
        increaseCart={increaseCart}
        decreaseCart={decreaseCart}
        emptyCart={emptyCart}
        cartItems={cartItems}
      ></Hero>
      {/* <Loading></Loading> */}
    </div>
  );
}

export default App;
