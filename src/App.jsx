import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./data/Products";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <ProductCard product={products[0]} />

      <Footer />
    </>
  );
}

export default App;