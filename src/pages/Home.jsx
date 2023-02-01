import React, { useContext, useState } from "react";

import Navbar from "../components/Header";

import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductContext } from "../contexts/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import Rating from '@mui/material/Rating';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sidebar from '../components/Sidebar'
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { yellow } from "@mui/material/colors";
import ProductOverview from "../components/PorductOverview";
import { CartContext } from "../contexts/CartContext";


function Home() {
  const [open, setOpen] = useState(false);
  const [CartOpen, setCartOpen] = useState(false)
  const [choosedProduct, setchoosedProduct] = useState(null);

  const { products } = useContext(ProductContext);
  const {addToCart}=useContext(CartContext)


  const setCart=(product,id)=>{
    setCartOpen(!CartOpen)
    addToCart(product,id)
  }

  
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative       w-full h-full flex flex-col justify-centerv border p-2"
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
                <div className="absolute top-2 right-3 z-5 cursor-pointer"  onClick={()=>console.log('liked')}>
                  {/* <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      /> */}
                  <FavoriteRoundedIcon  />
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
                  <Button variant="contained" onClick={()=>setCart(product,product.id,true)} sx={{ backgroundColor: yellow }}>
                    Buy Now
                  </Button>
                  <Button variant="outlined" onClick={() => addToCart(product,product.id)}>
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
      
      { <Sidebar open={CartOpen} setOpen={setCartOpen}/>}
      {/* { <ProductOverview open={open} setOpen={setOpen} choosedProduct={choosedProduct}/>} */}
    </>

    // <div className='py-16'>
    //   <section >
    //     <div className="container_mx_auto">
    //       <div>
    //       {products.map((pro)=>{
    //        return <div className='full h-[300px]'>

    //          <p>{pro.title}</p>
    //        </div>
    //       })}
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Home;
