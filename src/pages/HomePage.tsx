import React, { useState, useEffect } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { useCharacterContext } from '../context/useCharacterContext';
import CharacterCard from '../components/CharacterCard';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useCharacters(page);
  const { dispatch } = useCharacterContext();

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_CHARACTERS', payload: data.results });
    }
  }, [data, dispatch]);

  return (
    <div className="bg-gray-900 min-h-screen text-white py-8">
      {/* Título */}
      <h1 className="text-5xl font-bold text-center text-indigo-500 mb-8">
        Rick and Morty Characters
      </h1>

      {/* Mensajes de carga y error */}
      {loading && (
        <div className="flex justify-center mb-8">
          <LoadingSpinner />
        </div>
      )}
      {error && <div className="text-center text-red-600 mb-4">{error}</div>}

      {/* Tarjetas de personajes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Paginación */}
      <div className="mt-8 flex justify-around items-center">
        {/* Botón Previous */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
        >
          Previous
        </button>
        {/* Botón Next */}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
