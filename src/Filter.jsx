import { useState } from "react";
import data from "./data/pokemons.json";

function Filter() {
  const [pokemons, setPokemons] = useState(data);
  const [selectType, setSelectType] = useState("All");

  const handleFilter = (type) => {
    if (type === "All") {
      setPokemons(data);
    } else {
      const filterPokemons = data.filter((pokemons) =>
        pokemons.types.includes(type),
      );
      setPokemons(filterPokemons);
    }
  };

  return (
    <div className="container-filter">
      <section className="selection-cards">
        <h2>Counter Filter</h2>
        <p>filter by type</p>
        <select
          name="types"
          id="types"
          onChange={(e) => {
            setSelectType(e.target.value);
            handleFilter(e.target.value);
          }}
        >
          <option value="All">All types</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Bug">Bug</option>
          <option value="Water">Water</option>
          <option value="Poison">Poison</option>
          <option value="Flying">Flying</option>
          <option value="Normal">Normal</option>
        </select>
      </section>
      <div>
        <ul className="cards">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className="card">
              <img src={pokemon.image_url} alt={pokemon.name} />
              <div>
                <h3>{pokemon.name}</h3>
                <p>{pokemon.types.join(", ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
