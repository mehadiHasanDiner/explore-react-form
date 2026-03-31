import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setError("please provide a Product name");
      return;
    } else if (price.length === 0) {
      setError("please provide a price");
      return;
    } else if (price < 0) {
      setError("price cannot be negative value");
      return;
    } else if (quantity.length === 0) {
      setError("please provide a quantity");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ProductForm;
