import React, { createContext, useReducer, ReactNode } from 'react';
import { Character } from '../api/rickAndMortyApi';
import { CharacterReducer } from './CharacterReducer';
import { Action } from './CharacterReducer'; 

// Definir el tipo del contexto
interface CharacterContextType {
  characters: Character[];
  page: number;
  dispatch: React.Dispatch<Action>;
}

// Tipo para los props de CharacterProvider
interface CharacterProviderProps {
  children: ReactNode;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// Componente proveedor para el contexto
export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(CharacterReducer, { characters: [], page: 1 });

  return (
    <CharacterContext.Provider value={{ characters: state.characters, page: state.page, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext };
