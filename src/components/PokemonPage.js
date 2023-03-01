import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((data) => data.json())
    .then((allPokemons) => setPokemons(allPokemons))
  }, [])

  const filteredPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleNewPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
