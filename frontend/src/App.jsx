import { useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
