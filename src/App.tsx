import * as React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import NavBar from './components/Navbar';

function App() {
    return (
        <div>
            <header>
                <NavBar />
                <Pokemons />
            </header>
        </div>
    );
}

export default App;
