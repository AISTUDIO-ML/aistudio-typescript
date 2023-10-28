import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/style.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Hosting from "./components/hosting/Hosting";
import PricingTable from "./components/pricingTable/PricingTable";
import { useUserStore } from "./store/user";

function App() {
  const user = useUserStore((state: any) => state.user);

  return (
    <div className="container">
      <Router>
        {!user ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="*"
              element={<h1 className="text-center my-5">Page Not Found!</h1>}
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Hosting />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<PricingTable />} />
            <Route
              path="*"
              element={<h1 className="text-center my-5">Page Not Found!</h1>}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
