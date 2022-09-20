import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import Cart from "./components/Cart";
import "./App.scss";
import CreateProduct from "./components/CreateProducts/CreateProducts";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/product/:productId" element={<ProductsDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
