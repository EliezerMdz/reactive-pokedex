import React from "react";
import { Routes, Route } from "react-router-dom";

import Pokemons from "./components/Pokemons";
import NavBar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/about" element={<Pokemons />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
