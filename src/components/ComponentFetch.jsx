import React, { useState, useEffect } from "react";

export const ComponentFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromApi().then((data) => setProducts(data));
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const getProductsFromApi = async () => {
    try {
      await delay(2000);
      const res = await fetch("https://dummyjson.com/products/search?q=phone");
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.log(error);
    }
  };

  if (!products || products.length === 0) {
    return (
      <>
        <h2>Phones form Api</h2>
        <div>Loading...</div>
      </>
    );
  } else {
    return (
      <div>
        <h2>Phones form Api</h2>
        <div>Products: {products.length}</div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};
