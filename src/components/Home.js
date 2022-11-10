import React, { useState } from "react";
import Cart from "./Cart";
import Item from "./Item";
import ItemsList from "./ItemsList";
import Navbar from "./Navbar";

const Home = () => {
  const [cartData, setCartData] = useState([]);
  const onSaveData = (enteredData) => {
    let flag = false;
    let arrayyy = [];
    cartData.map((cart) => {
      if (cart.name === enteredData.name) {
        flag = true;
        cart.quantity += 1;
      }
      arrayyy.push(cart);
    });
    if (flag) {
      setCartData(arrayyy);
    }
    if (!flag) {
      setCartData([...cartData, enteredData]);
    }
  };

  const onRemoveData = (enteredData) => {
    let arrayyy = [];
    cartData.map((cart) => {
      if (cart.name === enteredData.name) {
        cart.quantity -= 1;
        if (cart.quantity !== 0) {
          arrayyy.push(cart);
        }
      } else {
        arrayyy.push(cart);
      }
    });
    setCartData(arrayyy);
  };

  console.log(cartData.key);
  const createCard = (item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
        type={item.type}
        totalQuantity={item.totalQuantity}
        onAddingItem={onSaveData}
        onRemovingItem={onRemoveData}
      />
    );
  };
  return (
    <div>
      <Navbar />
      <div className="mt-5 row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 ">{ItemsList.map(createCard)}</div>
        <div className="col-lg-4 pt-4">
          <Cart cartItems={cartData} />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Home;
