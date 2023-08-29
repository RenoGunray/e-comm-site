import React from "react"

const CartItems = ({productName, price, count, pImage, cartList, setCartList, itemId}) => {

  const removeItem = (event) => {
    setCartList(cartList.filter((fitem) => fitem.id !== itemId));
  }

  //console.log(cartList);
  // const existingItem = cartList.find((cItem) => cItem.id === itemId);

  // console.log(existingItem.productName);

  const image = "assets/images/items/" + pImage;

  return <>
    <figure className="itemside mb-4">
      <div className="aside">
      <img src={image} className="border img-sm rounded" />
      </div>
      <figcaption className="info">
      <button onClick={removeItem} className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></button>
      <p> {productName} </p>
      <span className="text-muted">{count} x ${price.toLocaleString('en-US')} </span> <br />
      <strong className="price"> ${price.toLocaleString('en-US')} </strong>
      </figcaption>
    </figure>
  </>
}

export default CartItems