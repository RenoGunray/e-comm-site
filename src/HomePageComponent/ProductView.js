import { Link, useParams } from "react-router-dom";
import React from "react";
import styles from "../main.module.css";
import products from "../productData";
import { useState } from "react";
import AddToCart from "./AddToCartComponent";

const ProductView = ({cartList, setCartList}) => {
  const {productID} = useParams();
  const product = products.find((prod) => prod.id === parseInt(productID));

  const productPrice = parseInt(product.price);
  const [counter, setCounter] = useState(1);
  const [priceTotal, setPriceTotal] = useState(productPrice);

  // const handleChange = (event) => {
  //   setCounter(event.target.value);
  // }

  const Increment = (event) => {
    event.preventDefault();
    setCounter(counter+1);

    setPriceTotal(priceTotal+productPrice);
  }

  const Decrement = (event) => {
    event.preventDefault();
    setCounter(counter-1);

    setPriceTotal(priceTotal-productPrice);
    if (counter <= 1 && priceTotal <= productPrice) {
      setCounter(1);
      setPriceTotal(productPrice);
    }
  }
  
  const img = "assets/images/items/" + product.image;
  return (<>
    <div className="container">
      <div className="row">
        <figure className="card card-product-grid col-lg-6 col-md-6 col-sm-6">
          <div className=""> 
            <img src={img} className={styles.img} />
          </div>
        </figure>

        <figcaption className="info-wrap border-top pt-5 ps-5 col-lg-6 col-md-6 col-sm-6">
          <h3 className="title mb-4"> Name: <span> {product.name} </span> - {product.color}</h3>
          <div className="price-wrap">
              <h5> Price: <span className="price"> ${product.price} </span></h5>  <br />
          </div>
           
          <p> <span className="fw-bolder text-dark"> Description: </span> {product.description} </p>

          <IncrementDecrement value={counter} onIncrement={Increment} onDecrement={Decrement} priceTotal={priceTotal} />

          {/* <CartComponent counter={counter} priceTotal={priceTotal} productName={product.name} /> */}

          {/* <div className="mt-5 d-flex">
            <div className="me-2 mt-2"> Amount: ${priceTotal} | {counter} </div>
            <button href="#" className="btn btn-light btn-icon"> <i className="fa fa-shopping-cart"></i> </button>
          </div> */}

          <div className="mt-5 d-flex">
            <div className="me-2 mt-2"> <span className="fw-bolder">Amount: ${priceTotal.toLocaleString('en-US')}</span>  | <span className="fw-bold">{counter}</span>  </div>
            {/* <button href="#" onClick={addToCart} className="btn btn-light btn-icon"> <i className="fa fa-shopping-cart"></i> </button> */}
            <AddToCart cartList={cartList} setCartList={setCartList} product={product} priceTotal={priceTotal} counter={counter} />
          </div>
        </figcaption>
      </div> 
    </div>
  </>)
}

const IncrementDecrement = ({ value, onIncrement, onDecrement}) => {

  

  return (
    <div className="mt-4">
    <div className="d-flex">
      <button className="btn btn-light me-1" onClick={onIncrement}>+</button> 
      <div className="p-2 pe-4 ps-4 counter-div me-1"> {value} </div>
      {/* <div className="me-2 counter">{counter}</div> */}
      <button className="btn btn-light" onClick={onDecrement}>-</button>
    </div>

    {/* <div className="mt-5 d-flex">
      <div className="me-2 mt-2"> Amount: ${priceTotal} | {value} </div>
      <button href="#" onClick={addToCart} className="btn btn-light btn-icon"> <i className="fa fa-shopping-cart"></i> </button>
      <AddToCart cartList={cartList} setCartList={setCartList} product={product} />
    </div> */}

    </div>
    )
}

export default ProductView;