import { Character } from '../api/rickAndMortyApi';

// Tipos del estado y las acciones
type State = {
  characters: Character[];
  page: number;
};

export type Action = 
  | { type: 'SET_CHARACTERS'; payload: Character[] }
  | { type: 'SET_PAGE'; payload: number };

// Reducer
export const CharacterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
