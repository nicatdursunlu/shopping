import React, { useState, useEffect, createContext } from 'react';

export const productsContext = createContext();

export const ProductsContextProvider = ({ children }) => {

  // json-server products.json --port 3000

  // const [products, setProducts] = useState([]);
  // const getProducts = async () => {
  //     const res = await fetch('http://localhost:3000/products');
  //     const data = await res.json();
  //     setProducts(data);
  // }
  // useEffect(() => {
  //     getProducts();
  // }, [])

  const [data, setData] = useState({ products: [] });
  console.log(data);

  const getData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      products: [...data.products, ...newData.products]
    }));
    console.log(data);
  };

  useEffect(() => {
    getData('./products.json')
  }, []);

  return (
    <productsContext.Provider value={data.products}>
      {children}
    </productsContext.Provider>
  )
}