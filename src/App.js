import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PRivateRoute from "./components/PrivateRoute/PRivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<OrderReview />} />
            <Route path="/inventory" element={<PRivateRoute><Inventory /></PRivateRoute>} />
            <Route path="/shipping" element={<PRivateRoute><Shipping /></PRivateRoute>} />
            <Route path="/placeorder" element={<PRivateRoute><PlaceOrder /></PRivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
