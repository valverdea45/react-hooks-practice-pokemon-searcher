import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPokemon }) {

  const [pokemonName, setPokemonName] = useState("")
  const [pokemonHp, setPokemonHp] = useState(0)
  const [pokemonFrontImg, setPokemonFrontImg] = useState("")
  const [pokemonBackImg, setPokemonBackImg] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    const objToBeSent = {
      name: pokemonName,
      hp: pokemonHp,
      sprites: {
        front: pokemonFrontImg,
        back: pokemonBackImg
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToBeSent)
    })
    .then((data) => data.json())
    .then((newPokemon) => handleNewPokemon(newPokemon))

    setPokemonName("")
    setPokemonHp(0)
    setPokemonFrontImg("")
    setPokemonBackImg("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokemonHp} onChange={(e) => setPokemonHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemonFrontImg}
            onChange={(e) => setPokemonFrontImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemonBackImg}
            onChange={(e) => setPokemonBackImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
