import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product/Product";
import Single from "./components/single/Single";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
