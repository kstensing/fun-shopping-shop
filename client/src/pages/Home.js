import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import ErrorBoundary from "./Error";

const Home = () => {
  return (
    <div className="container">
      <ErrorBoundary>
        <CategoryMenu />
        <ProductList />
        <Cart />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
