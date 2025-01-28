import { useState, useEffect } from 'react';
import { fetchCharacters, CharacterResponse } from '../api/rickAndMortyApi';

interface UseCharactersResult {
  data: CharacterResponse | null;
  loading: boolean;
  error: string | null;
}

export const useCharacters = (page: number): UseCharactersResult => {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const result = await fetchCharacters(page);
        setData(result);
        setError(null);  // Reset error state
      } catch (err) {
        setError('Error fetching characters'+err);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [page]);

  return { data, loading, error };
};
