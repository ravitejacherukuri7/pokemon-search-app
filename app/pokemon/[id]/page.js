import { fetchPokemonDetails } from '../../utils/fetchPokemons';
import Link from 'next/link';

const PokemonDetail = async ({ params }) => {
  const pokemon = await fetchPokemonDetails(params.id);

  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link href="/">Home</Link> &gt; {pokemon.name}
      </nav>
      <h1 className="text-2xl font-bold">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <Link href="/" className="mt-4 inline-block text-blue-500">Back to Home</Link>
    </div>
  );
};

export default PokemonDetail;