import "./App.css";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import Home from "./views/home/home";
import { Product } from "./views/product/product";
import { ThemeProvider } from "@mui/material";
import Miuitheme from "./muitheme/muitheme";
function App() {
  return (
    <ThemeProvider theme={Miuitheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
