import React from "react";
import type { IPokemon } from "../Pokemons";

// @ts-ignore
import styles from './Pokemon.css';

console.log(styles);
const PokemonCard: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.banner}></div>
      <img className={styles.pkmnImg}
        alt="Pkmn"
        src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <h1 className={styles.name}>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}</h1>
    </div>
  );
};

export default PokemonCard;