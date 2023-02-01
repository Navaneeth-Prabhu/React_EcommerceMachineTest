import React, { useContext, useState } from "react";

import Navbar from "../components/Header";

import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductContext } from "../contexts/ProductContext";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import Rating from '@mui/material/Rating';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sidebar from "../components/Sidebar";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import { hover } from "@testing-library/user-event/dist/hover";
import ProductOverview from "../components/PorductOverview";

function Product({ products }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = useState(false);
  const [CartOpen, setCartOpen] = useState(false);
  const [choosedProduct, setchoosedProduct] = useState(null);
  const [Wished, setWished] = useState(false);

  const {wish} = useContext(WishContext)
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(WishContext);

  // console.log("wishhhhhh",wish)
  const setCart = (product, id) => {
    setCartOpen(!CartOpen);
    addToCart(product, id);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24  lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Customers also purchased
    </h2> */}

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative       w-full h-full flex flex-col justify-centerv border p-2 rounded-md"
              >
                {/* <div className="min-h-70 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"> */}
                <div className="mx-auto flex justify-center item center w-[200px]">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    // className="h-full w-full  object-center lg:h-full lg:w-full group-hover:scale-110 transition duration-300"
                    className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div
                  className="absolute top-2 right-3 z-5 cursor-pointer"
                >
                  {
                    wish.find(val => val.id === product.id) ?
                    <Checkbox  checkedIcon={<Favorite />}  onClick={() => addToWish(product,product.id)} />:<Checkbox icon={<FavoriteBorder />}   onClick={() => addToWish(product,product.id)} />
                  }
                  {/* {
                    
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  onClick={() => addToWish(product,product.id)} />
                  } */}
                </div>
                {/* <div className="mt-4 flex justify-between"> */}
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

export default Product;
