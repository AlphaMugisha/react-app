import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./data/Products"; 
import "./App.css";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);

  return (
    <>
      <Header />
      <Hero />

      <button
        className="special-btn"
        onClick={() => setShowSpecial(!showSpecial)}
      >
        {showSpecial ? "Hide Today's Special" : "Show Today's Special"}
      </button>

      {showSpecial && <ProductCard product={products[0]} />}

      <Footer />
    </>
  );
}

export default App;