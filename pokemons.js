import axios from "axios";
import fs from "fs";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const obtenerDatos = () => {
  const read = fs.readFileSync("datosPokemon.txt", "utf-8");
  const datos = JSON.parse(read);

  return datos;
};

const getRandomPokemon = () => {
  const pokemons = obtenerDatos();
  const index = Math.floor(Math.random() * (pokemons.length - 0));
  const pokemon = pokemons[index];

  axios
    .get(URL + pokemon)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
};

getRandomPokemon();
