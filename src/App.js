import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Home from "./Views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
