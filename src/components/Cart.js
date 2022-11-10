import React from "react";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";

const Cart = (props) => {
  return (
    <>
      <h4 className="p-3">Cart</h4>
      {props.cartItems.map((item) => {
        const imageType =
          item.type === "veg" ? (
            <img src={veg} alt="veg" width="15px" height="15px" />
          ) : (
            <img src={nonveg} alt="nonveg" width="15px" height="15px" />
          );
        console.log(item.quantity);
        return (
          <>
            <div className="d-flex justify-content-around fs-7">
              {imageType}
              <p className="flex-grow-1 mx-2 w-50">{item.name}</p>
              <p className="flex-grow-1 mx-2">{item.quantity}</p>
              <p className="flex-grow-1 mx-2">
                &#8377; {item.price * item.quantity}
              </p>
            </div>
          </>
        );
      })}
    </>
  );

  // <div className="position-fixed p-3">
  //   <h3>Cart</h3>
  //   <div>
  //     <p>{props.name}</p>
  //     <p>{props.quantity}</p>
  //     <p>{props.price}</p>
  //   </div>
  // </div>
};

export default Cart;
