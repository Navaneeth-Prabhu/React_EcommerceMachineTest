import React, { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Sidebar from "../components/Sidebar";
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import ProductOverview from "../components/PorductOverview";


function Product({ products }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = useState(false);
  const [CartOpen, setCartOpen] = useState(false);
  const [choosedProduct, setchoosedProduct] = useState(null);

  const { wish } = useContext(WishContext);
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(WishContext);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24  lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative       w-full h-full flex flex-col justify-centerv border p-2 rounded-md"
              >
                <div className="mx-auto flex justify-center item center  max-h-52">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute top-0 right-0 z-5 cursor-pointer">
                  {wish.find((val) => val.id === product.id) ? (
                    <Checkbox
                      icon={
                        <Favorite
                          sx={{
                            color: "white",
                            fill: "red",
                            borderRadius: "50%",
                          }}
                        />
                      }
                      checkedIcon={
                        <Favorite
                          sx={{
                            color: "white",
                            fill: "red",
                            borderRadius: "50%",
                          }}
                        />
                      }
                      onClick={() => {
                        addToWish(product, product.id);
                      }}
                    />
                  ) : (
                    <Checkbox
                      icon={
                        <FavoriteBorder
                          sx={{
                            color: "white",
                            fill: "gray",
                            borderRadius: "50%",
                          }}
                        />
                      }
                      checkedIcon={
                        <FavoriteBorder
                          sx={{
                            color: "white",
                            fill: "gray",
                            borderRadius: "50%",
                          }}
                        />
                      }
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
                    Rs.{product.price}
                  </p>
                </div>
                <div className="button flex gap-2 absolute bottom-2 left-2">
                  {/* <Button variant="contained " onClick={()=>setCart(product,product.id,true)} sx={{bgcolor:'secondary.main',fontSize:'12px'}}>
              Buy Now
            </Button> */}
                  {/* <Button
                    variant="outlined"
                    onClick={() => addToCart(product, product.id)}
                    sx={{
                      borderColor: "secondary.main",
                      color: "secondary.main",
                      fontSize: "12px",
                 
                    }}
                  >
                    Add to cart{" "}
                  </Button> */}
                  <button
                    className="mt-7 flex w-full items-center justify-center rounded-md border-2 border-yellow-500  py-2 px-4 text-small font-medium text-black  hover:bg-yellow-500  hover:text-white"
                    onClick={() => addToCart(product, product.id)}
                  >
                    Add to Cart
                  </button>
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
