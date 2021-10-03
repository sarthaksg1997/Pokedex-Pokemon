import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    //  console.log(data);

    setLoadMore(data.next);

    data.results.map(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      console.log(data);
      setAllPokemons((allPokemons) => [...allPokemons, data]);
    });
    // console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div className="body">
        <h1 className="pokedex">POKEDEX</h1>
        <div className="container">
          {allPokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                key={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.other.dream_world.front_default}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
              />
            );
          })}
        </div>
        <button className="btn " onClick={getAllPokemons}>
          Load More
        </button>
      </div>
    </>
  );
};

export default Pokemon;
