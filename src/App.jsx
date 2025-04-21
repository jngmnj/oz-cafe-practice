import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
