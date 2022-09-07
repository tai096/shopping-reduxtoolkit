import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductsDetail />} />
            <Route component={Error} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
