import React from "react";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No products found. Add some products to display here.</p>;
  }

  return (
    <div>
      <h3>Product List</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
