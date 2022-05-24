# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot


![laptop view](./screenshots/laptop.jpg)


![Mobile view](./screenshots/mobile.jpg)



### Links

- Solution URL: [@clemcy9](https://github.com/Clemcy9/shopping-cart#screenshot)
- Live Site URL: [ecommerce-cart](https://frontendmentor-ecommerce-cart.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
Learnt how to use context api. 

1.created a context api jsx file and exported it


```js
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
```

2.imported the custom created context api and used in app component

```js
<UseCartToggle>
      <Nav cartItems={cartItems} emptyCart={emptyCart}></Nav>
      <Hero
        increaseCart={increaseCart}
        decreaseCart={decreaseCart}
        emptyCart={emptyCart}
        cartItems={cartItems}
      ></Hero>
      {/* <Loading></Loading> */}
    </UseCartToggle>
```

Learnt to implement sytling in styled components using props

```js
  const MenuIcon = styled.div`
    background-image: url(${(props) => (props.show ? close : menu)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 25px;
    height: 25px;
    cursor: pointer;
    /* background-color: red; */
  `
```
Also learnt how to use useRef to add window event listener
```js
const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        toggleShow(!show);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleShow]);
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

** How to implement css modal in react**
** How to add media queries on react internal style object**
** How to add window event listener in react**

## Author

- Linkedin - [Clement Idemud](https://www.linkedin.com/in/clement-clement-idemudo)


## Acknowledgments

I acknowledge the grace of God that abounded throughout the period of this project. Being able to code in a constrained environment where power (electricity)dampens your coding-time by a great and noticeable factor.
In all we'ev become better!
I also want to acknowledge sir Whyte of smartHub for his technical supports
