import React, { useEffect, useState } from "react";
import { ApiResponse } from "../../types";
import { Pokemon } from "../Pokemon";
import { Loader } from "../Loader";
import { IPokemon, PokemonList } from "../../models";

// @ts-ignore
import styles from "./Pokemons.css";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadMorePokemons = (event: Event) => {
      const window = event.currentTarget as Window;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (Math.floor(window.scrollY) === scrollable) {
        setOffset((prevOffset: number) => {
          return prevOffset + 20;
        });
      }
    };

    const getInitialPokemonList = async (limit?: number, offset?: number) => {
      setLoading(true);
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      return await fetch(url)
        .then((res) => res.json())
        .then((data: ApiResponse<PokemonList>) => data.results);
    };

    const getFullPokemonInfo = async (limit: number, offset: number) => {
      const halfwayPokemons = await getInitialPokemonList(limit, offset);
      const promises = halfwayPokemons.map((pmkn) =>
        fetch(pmkn.url).then((res) => res.json())
      );
      const pokemonsToDisplay = await Promise.all(promises);

      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsToDisplay]);
      setLoading(false);
    };

    getFullPokemonInfo(limit, offset).catch((reason) => {
      console.error(`Error fetching pokemons: ${reason}`);
      setLoading(false);
    });

    window.addEventListener("scroll", loadMorePokemons);
    return () => {
      window.removeEventListener("scroll", loadMorePokemons);
    };
  }, [offset]);

  return (
    <div className={styles.container}>
      <Loader showLoader={loading} />
      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Pokemons;
