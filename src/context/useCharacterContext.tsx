import { useContext } from 'react';
import { CharacterContext } from './CharacterContext'; 

// Hook personalizado para acceder al contexto
export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
};
