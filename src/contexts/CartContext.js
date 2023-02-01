import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setcart] = useState([]);

  const addToCart = (product,id) => {
    let NewcartItem = { ...product, amount: 1 ,total:product.price};
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(NewcartItem);
    if (cartItem) {
      const NewItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1, total: cartItem.total+item.price};
        } else {
          return item;
        }
      });
      setcart(NewItem);
    } else {
      setcart([...cart, NewcartItem]);
    }
  };
  // console.log(cart);

  const removeProduct =(id)=>{
    const newCart = cart.filter((item)=>{
      return item.id !== id
    })
    setcart(newCart)
  }

  const increment =(id)=>{
    const item = cart.find(item =>item.id===id)
    addToCart(item,id)
    // console.log(`${id} addedd`)
  }

  const decrement =(id)=>{
    const cartItem = cart.find((item)=>{
      return item.id === id
    })
    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id===id){
          return {...item,amount:cartItem.amount -1, total: cartItem.total-item.price}
        }else{
          return item
        }
      })
      setcart(newCart)
    }

      if(cartItem.amount<2){
        removeProduct(id)
      }
    
  }

  return (
    <CartContext.Provider value={{addToCart,cart,removeProduct,increment,decrement }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
