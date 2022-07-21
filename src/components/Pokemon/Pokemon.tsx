import React from "react";
import type { IPokemon } from "../Pokemons";

import './Pokemon.css';

const PokemonCard: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="banner"></div>
      <img className="pkmnImg"
        alt="Pkmn"
        src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <h1 className="name">{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}</h1>
    </div>
  );
};

export default PokemonCard;
