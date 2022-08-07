import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

// @ts-ignore
import styles from './NavBar.css';

const NavBar: React.FC = () => {
    const navbarLinks = useRef<HTMLDivElement>(null)!;

    const toggleActiveClassName = () => {
        navbarLinks?.current?.classList.toggle('active');
    }

    return (
        <nav className={styles.navbar}>
            <div>
                <Link to='home' className={styles.title}>Pokedex</Link>
            </div>
            <a href='#' className={styles.toggleButton} onClick={toggleActiveClassName}>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </a>
            <div className={styles.navbarLinks} ref={navbarLinks}>
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