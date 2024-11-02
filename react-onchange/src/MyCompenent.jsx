import React, { useState } from "react";

function MyComponent() {


  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommnentChange(event) {
    setComment(event.target.value);
  }

  function handelePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (

    <>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name} </p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity} </p>

      <textarea value={comment} onChange={handleCommnentChange}></textarea>
      <p>Comment: {comment} </p>

      <select value={payment} onChange={handelePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment: {payment} </p>

      <label>
        <input type="radio" value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <label>
        <input type="radio" value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping: {shipping} </p>
    </>

  );

}

export default MyComponent