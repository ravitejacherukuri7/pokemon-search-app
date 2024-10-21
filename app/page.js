"use client";
import { useEffect, useState } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonCard from './components/PokemonCard';
import { fetchTypes, fetchPokemons } from './utils/fetchPokemons';

const HomePage = () => {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getTypesAndPokemons = async () => {
      const typesData = await fetchTypes();
      const pokemonsData = await fetchPokemons();
      setTypes(typesData);
      setPokemons(pokemonsData);
    };
    getTypesAndPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    (selectedType ? pokemon.type === selectedType : true) &&
    (searchTerm ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Pokémon Search App</h1>
      <PokemonFilter 
        types={types} 
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;