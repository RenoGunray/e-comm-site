import React from "react";

const PriceTotal = ({cartList}) => {

  let sum = 0;

  cartList.map((item) => (
    sum += parseInt(item.price)
  ));

  return <>
    <span className="mb-3 text-center"><strong className="text-danger">${sum.toLocaleString('en-US')}</strong>  </span>
  </>
}

export default PriceTotal;

