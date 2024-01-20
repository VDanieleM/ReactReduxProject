import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
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
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
