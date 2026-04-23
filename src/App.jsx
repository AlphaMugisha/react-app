import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/Products";
import "./App.css";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [search, setSearch] = useState("");

  const handleAddToCart = (product) => {
    console.log("Added:", product.name);
  };

  // 🔍 filter products (case-insensitive)
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

      <button
        className="special-btn"
        onClick={() => setShowSpecial(!showSpecial)}
      >
        {showSpecial ? "Hide Today's Special" : "Show Today's Special"}
      </button>

      {showSpecial && (
        <ProductCard
          product={filteredProducts[0]}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </>
  );
}

export default App;