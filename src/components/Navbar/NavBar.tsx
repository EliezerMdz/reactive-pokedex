import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
    const navbarLinks = useRef<HTMLDivElement>(null)!;

    const toggleActiveClassName = () => {
        navbarLinks?.current?.classList.toggle('active');
    }

    return (
        <nav className='navbar'>
            <div>
                <Link to='home' className='title'>Pokedex</Link>
            </div>
            <a href='#' className='toggle-button' onClick={toggleActiveClassName}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links' ref={navbarLinks}>
                <ul>
                    <li><NavLink to='home'>Home</NavLink></li>
                    <li><NavLink to='pokemons'>Pokemons</NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;