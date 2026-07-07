import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductFilter from "./components/ProductFilter";
import EmployeeSearch from "./components/EmployeeSearch";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductFilter />} />
        <Route path="/employees" element={<EmployeeSearch />} />
      </Routes>
    </>
  );
}

export default App;
