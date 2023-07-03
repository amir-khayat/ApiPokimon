import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemonData(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (
    <div className="App">
      <h1>PokeMon Api</h1>
      {pokemonData.map((pokemon, index) => {
        return (<div key={index}>{pokemon.name}</div>)
      })}
      
    </div>
  );
}

export default App;
