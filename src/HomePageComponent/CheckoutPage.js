import React from "react";
import CheckoutPageCartItems from "./CheckoutPageCartItems";
import PriceTotal from "./PriceTotal";

const Checkout = ({cartList}) => {

    return <>
        <section className="p-2 mt-3">
            <div className="container w-75">
                <div className="text-center">
                    <h1 className="m-4">Checkout Form</h1>
                    <p className="">Thank you for shopping with us!!</p>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3 className="mt-4">Your Cart <span className="border badge text-dark ms-5">{cartList.length}</span> </h3>
                            <ul className="list-group mt-5">
                                {cartList.map((item)=>(
                                    <CheckoutPageCartItems key={item.id} name={item.productName} description={item.description} price={item.price} />
                                ))}
                                <li className="list-group-item">
                                    Total (USD): <PriceTotal cartList={cartList} />
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <form className="p-3">
                                <h3 className="mt-4">Billing Address</h3>
                                <div className="row mt-4">
                                    <div className="from-group col-lg-6">
                                        <label>First Name</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-6">
                                        <label>last Name</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-12 mt-4">
                                        <label>Email Address</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-12 mt-4">
                                        <label>Address 1</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-12 mt-4">
                                        <label>Address 2</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-4 mt-4">
                                        <label>Country</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-4 mt-4">
                                        <label>City/State</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-4 mt-4">
                                        <label>zip</label>
                                        <input className="form-control"></input>
                                    </div>

                                    <hr className="mt-4" />
                                    
                                    <h3 className="mt-2">Payment</h3>

                                    <div className="form-check mt-3">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Visa
                                    </label>
                                    </div>
                                    <hr className="mt-3" />

                                    <div className="from-group col-lg-6 mt-4">
                                        <label>Name on Card</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-6 mt-4">
                                        <label>Card Number</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-3 mt-4">
                                        <label>Expiration</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="from-group col-lg-3 mt-4">
                                        <label>CVV</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <hr className="mt-4" />
                                    <div className="from-group col-lg-12 mt-2">
                
                                        <button className="form-control btn btn-primary">Continue to Checkout </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Checkout