import React from "react";

const CheckoutPageCartItems = ({name, description, price}) => {

return <>
    
<li className="list-group-item">
    <div className="d-flex justify-content-between">
        <h6>{name}</h6>
        <p>${price.toLocaleString('en-US')}</p>
    </div>
    <p>{description}</p>
</li>
</>

}

export default CheckoutPageCartItems