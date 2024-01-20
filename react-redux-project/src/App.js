import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route
              path="/products/:productId"
              exact
              element={<ProductDetail />}
            />
            <Route path="/Cart" exact element={<Cart />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
