import React, { useContext, useState } from "react";

import Navbar from "../components/Header";

import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductContext } from "../contexts/ProductContext";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Sidebar from "../components/Sidebar";
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import { hover } from "@testing-library/user-event/dist/hover";
import ProductOverview from "../components/PorductOverview";
import { useEffect } from "react";

function Wishlist({  }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = useState(false);
  const [CartOpen, setCartOpen] = useState(false);
  const [choosedProduct, setchoosedProduct] = useState(null);
  // const [Wished, setWished] = useState([]);

  const { wish } = useContext(WishContext);
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(WishContext);

  return (
    <>
   
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24  lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {wish?.map((product) => (
          <div
            key={product.id}
            className="group relative       w-full h-full flex flex-col justify-centerv border p-2 rounded-md"
          >
            <div className="mx-auto flex justify-center item center w-[200px] max-h-52">
              <img
                src={product.image}
                alt={product.imageAlt}
                
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="absolute top-0 right-0 z-5 cursor-pointer">
              {wish.find((val) => val.id === product.id) ? (
                <Checkbox
                  icon={<Favorite />}
                  checkedIcon={<Favorite />}
                  onClick={() => {
                    addToWish(product, product.id);
                  }}
                />
              ) : (
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onClick={() => addToWish(product, product.id)}
                />
              )}
            </div>
            <div
              className="mt-4 flex justify-between mb-12"
              onClick={() => {
                setOpen(!open);
                setchoosedProduct(product);
              }}
            >
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.color}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
            <div className="button flex gap-2 absolute bottom-2 left-2">
              {/* <Button variant="contained " onClick={()=>setCart(product,product.id,true)} sx={{bgcolor:'secondary.main',fontSize:'12px'}}>
          Buy Now
        </Button> */}
              <Button
                variant="outlined"
                onClick={() => addToCart(product, product.id)}
                sx={{
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  fontSize: "12px",
                }}
              >
                Add to cart{" "}
              </Button>

              {/* <IconButton color="primary" aria-label="add to shopping cart">
<AddShoppingCartIcon />
</IconButton> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    
      
      {
        <ProductOverview
          open={open}
          setOpen={setOpen}
          choosedProduct={choosedProduct}
        />
      }
      {<Sidebar open={CartOpen} setOpen={setCartOpen} />}
    </>
  );
}

export default Wishlist;
