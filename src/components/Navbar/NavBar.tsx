import React, { useRef, useState } from 'react';

import './NavBar.css';

const NavBar: React.FC = () => {
    const navbarLinks = useRef<HTMLDivElement>(null)!;

    const toggleActiveClassName = () => {
        navbarLinks?.current?.classList.toggle('active');
    }

    return (
        <nav className='navbar'>
            <div className='title'>Pokedex</div>
            <a href='#' className='toggle-button' onClick={toggleActiveClassName}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links' ref={navbarLinks}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Pokemons</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;