import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="border rounded p-4 mb-4 flex flex-col items-center">
      <h2 className="font-bold text-xl">{pokemon.name}</h2>
      <img src={`https://pokeapi.co/media/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} className="w-24 h-24"/>
    </Link>
  );
};

export default PokemonCard;