import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* set default rout */}
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
