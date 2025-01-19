import React, { useState } from "react";

const AddProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (!name.trim() || !price.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (products.some((product) => product.name.toLowerCase() === name.toLowerCase())) {
      alert("Product with the same name already exists.");
      return;
    }

    setProducts([...products, { name: name.trim(), price: parseFloat(price).toFixed(2) }]);
    setName("");
    setPrice("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
