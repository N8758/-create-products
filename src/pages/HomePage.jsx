import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "../components/AddProductForm";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Task Management Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
          Logout
        </button>
      </div>
      <hr />
      <AddProductForm products={products} setProducts={setProducts} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
