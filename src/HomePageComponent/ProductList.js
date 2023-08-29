import React from "react";
import { Link, UseParams } from "react-router-dom";
import AddToCart from "./AddToCartComponent";

const ProductList = ({product, cartList, setCartList}) => {
  const image = "assets/images/items/" + product.image

  return <>
    <div className="col-lg-3 col-md-6 col-sm-6">
    <figure className="card card-product-grid">
        <div className="img-wrap"> 
        <img src={image} /> 
        </div>
        <figcaption className="info-wrap border-top">
        <div className="price-wrap">
            <span className="price">${product.price.toLocaleString('en-US')}  </span>
        </div>
        <p className="title mb-2">{product.name} - {product.color}</p>
        
        <Link to={`/${product.id}`} className="btn btn-primary"> View Details </Link>
        {/* <a href="/product" className="btn btn-primary">View Details</a> */}
        {/* <button onClick={addToCart} className="btn btn-light btn-icon"> <i className="fa fa-shopping-cart"></i> </button> */}
        <AddToCart  cartList={cartList} setCartList={setCartList} product={product} />
        </figcaption>
    </figure>
    </div> 
  </>
}

export default ProductList;