import React from "react"
import { nanoid } from "nanoid";


const AddToCart = ({cartList, setCartList, product, priceTotal, counter}) => {

  const addToCart = (event) => {

    if (counter > 1) {
      //console.log(priceTotal);

      setCartList([...cartList, 
        {
          productName: product.name, 
          price: priceTotal,
          count: counter,
          image: product.image,
          id: nanoid(),
        }
      ]);

    } else {

      setCartList([...cartList, 
        {
          productName: product.name, 
          price: product.price,
          count: 1,
          image: product.image,
          id: nanoid(),
        }
      ]);

    }


    //const existingItem = cartList.find((cItem) => cItem.id === product.id);

  }


  return <>
      {/* <div className="me-2 mt-2"> Amount: ${priceTotal} | {counter} </div> */}
      <button onClick={addToCart} className="btn btn-light btn-icon"> <i className="fa fa-shopping-cart"></i> </button>
  </>
}

export default AddToCart;