import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [showFront, setShowFront] = useState(true)

  function handleClick() {
    setShowFront((showFront) => !showFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {showFront ? 
          <img onClick={handleClick} src={pokemon.sprites.front} alt={pokemon.name}/> 
          : 
          <img onClick={handleClick} src={pokemon.sprites.back} alt={pokemon.name} />}
          
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
