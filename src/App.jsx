import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import products from "./data/Products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [showProducts, setShowProducts] = useState(false);

  const handleAddToCart = (product) => {
    console.log("Added:", product.name);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔥 TOGGLE BUTTON */}
      <button
        className="special-btn"
        onClick={() => setShowProducts(!showProducts)}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {/* 🛒 SHOW ALL PRODUCTS ONLY WHEN CLICKED */}
      {showProducts && (
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </>
  );
}

export default App;