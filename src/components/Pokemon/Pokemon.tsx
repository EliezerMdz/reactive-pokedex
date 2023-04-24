import React from "react";
import { IPokemon } from "../../models";

// @ts-ignore
import styles from "./Pokemon.css";

interface Props {
  pokemon: IPokemon;
}
const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.banner}></div>
      <img
        className={styles.pkmnImg}
        alt="Pkmn"
        src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <h1 className={styles.name}>{`${pokemon.name
        .charAt(0)
        .toUpperCase()}${pokemon.name.slice(1)}`}</h1>
    </div>
  );
};

export default PokemonCard;
