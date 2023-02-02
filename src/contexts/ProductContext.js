import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductPro = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setproducts(data);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductPro;
