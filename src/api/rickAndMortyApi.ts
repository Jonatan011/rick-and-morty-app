import axios from 'axios';

// URL de la API
const API_URL = 'https://rickandmortyapi.com/api/character';

// Tipos de las respuestas que esperamos de la API
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

// Función para obtener los personajes
export const fetchCharacters = async (page: number = 1): Promise<CharacterResponse> => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching characters'+error);
  }
};
