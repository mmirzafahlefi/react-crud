import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Navbar";
import UserCreate from "./UserCreate";
import Users from "./Users";
import UserUpdate from "./UserUpdate";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <switch>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/create" element={<UserCreate />} />
            <Route path="/update/:id" element={<UserUpdate />} />
          </Routes>
        </switch>
      </div>
    </Router>
  );
}
