import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import products from "./data/Products"; // ⚠️ lowercase
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [showSpecial, setShowSpecial] = useState(false);

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

      <button
        className="special-btn"
        onClick={() => setShowSpecial(!showSpecial)}
      >
        {showSpecial ? "Hide Today's Special" : "Show Today's Special"}
      </button>

      {showSpecial && (
        <ProductCard
          product={products[0]}
          onAddToCart={handleAddToCart}
        />
      )}

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </>
  );
}

export default App;