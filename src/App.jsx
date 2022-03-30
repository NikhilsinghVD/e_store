import React from "react";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from './pages/Product';
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/products/:category" caseSensitive={false} element={<ProductList />} />
        <Route path="/product/:id" caseSensitive={false} element={<Product />} />
        <Route path="/cart" caseSensitive={false} element={<CartPage />} />
        <Route path="/login" caseSensitive={false} element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" caseSensitive={false} element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/" caseSensitive={true} element={<Home />} />
      </Routes>
    </Router>

  );

}

export default App;