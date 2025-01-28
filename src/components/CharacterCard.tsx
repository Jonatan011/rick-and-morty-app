import React from 'react';
import { Character } from '../api/rickAndMortyApi';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500">
      {/* Imagen */}
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{character.name}</h3>
        <p className="text-gray-600 mt-2">{character.status} - {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
