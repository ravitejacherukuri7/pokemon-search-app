import React from 'react';

const PokemonFilter = ({ types, selectedType, setSelectedType, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mb-4">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded mb-2 md:mb-0"
      >
        <option value="">Select Pokémon Type</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default PokemonFilter;