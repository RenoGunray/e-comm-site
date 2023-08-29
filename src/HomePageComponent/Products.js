import React from "react";
import ProductList from "./ProductList";
import { useState } from "react";
import products from "../productData";

const Products = ({cartList, setCartList}) => {
  const [productsL, setProducts] = useState(products);
  return <>
    {productsL.map((product) => (
      <ProductList key={product.id} product={product} cartList={cartList} setCartList={setCartList} />
    ))}
  </>
}

export default Products;