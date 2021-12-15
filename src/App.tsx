import "./App.css";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import Home from "./views/home/home";
import { Product } from "./views/product/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
