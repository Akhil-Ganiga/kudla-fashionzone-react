import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/kudla-fashionzone-react/" element={<Shop />} />
          <Route
            path="/kudla-fashionzone-react/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/kudla-fashionzone-react/kudla-fashionzone-react/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kudla-fashionzone-react/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/kudla-fashionzone-react/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/kudla-fashionzone-react/cart" element={<Cart />} />
          <Route
            path="/kudla-fashionzone-react/login"
            element={<LoginSignup />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
