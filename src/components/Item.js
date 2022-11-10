import React, { useState } from "react";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";

const Item = (props) => {
  const [availableQty, setAvailableQty] = useState(props.totalQuantity);
  const [selectedQty, setSelectedQty] = useState(0);

  let imageType =
    props.type === "veg" ? (
      <img src={veg} alt="veg" width="15px" />
    ) : (
      <img src={nonveg} alt="nonveg" width="15px" />
    );

  const addToCartClickHandler = () => {
    if (availableQty > 0) {
      setAvailableQty(availableQty - 1);
      setSelectedQty(selectedQty + 1);
      const cart = {
        key: props.id,
        name: props.name,
        price: props.price,
        quantity: selectedQty + 1,
        type: props.type,
      };
      props.onAddingItem(cart);
      console.log(cart);
    }
  };

  const decrementHandler = () => {
    setAvailableQty(availableQty + 1);
    setSelectedQty(selectedQty - 1);
    const cart = {
      key: props.id,
      name: props.name,
      price: props.price,
      quantity: selectedQty + 1,
      type: props.type,
    };
    props.onRemovingItem(cart);
  };

  let buttonEl =
    selectedQty === 0 ? (
      <button
        className="btn btn-primary mt-1 fs-7"
        type="button"
        onClick={addToCartClickHandler}
      >
        Add to Cart
      </button>
    ) : (
      <div className="d-flex g-2 align-items-center">
        <button
          className="btn btn-primary mt-1 fs-7"
          onClick={decrementHandler}
        >
          -
        </button>
        <span className="px-2">{selectedQty}</span>
        <button
          className="btn btn-primary mt-1 fs-7"
          onClick={addToCartClickHandler}
        >
          +
        </button>
      </div>
    );

  return (
    <div className="container-fluid  p-4 border-bottom border-2 border-danger">
      <div className="row">
        <div className="col-lg-8">
          {imageType}
          <h5 className="fs-6">{props.name}</h5>
          <p className="fs-7 mb-0">&#8377; {props.price}</p>
          <p className="fs-7 mt-3 text-black-50">{props.description}</p>
          <p className="fs-7 mt-3">
            Available Qty : <strong>{availableQty}</strong> no's.
          </p>
        </div>
        <div className="col-lg-4 text-center d-flex flex-column align-items-center justify-content-center ">
          <img src={props.image} alt="cb" width="100px" height="70px" d-block />
          {buttonEl}
        </div>
      </div>
    </div>
  );
};

export default Item;
