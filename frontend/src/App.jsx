import "./App.css";
import { Router,Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content-container">
          <Routes>
            <Route path="/cart" element={Cart} />
            <Route path="/not-found" element={NotFound} />
            <Route path="/" exact element={Home} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
