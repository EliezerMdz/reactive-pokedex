import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Pokemons from './components/Pokemons';
import NavBar from './components/Navbar';
import Home from './components/Home/Home';


function App() {
    return (
        <div>
            <header>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/pokemons' element={<Pokemons />} />
                    <Route path='/about' element={<Pokemons />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
