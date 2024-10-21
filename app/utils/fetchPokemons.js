export const fetchTypes = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/type');
  const data = await res.json();
  return data.results;
};

export const fetchPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();
  return data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
  }));
};

export const fetchPokemonDetails = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};