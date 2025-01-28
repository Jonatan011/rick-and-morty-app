import React from 'react';
import { CharacterProvider } from './context/CharacterContext';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <HomePage />
    </CharacterProvider>
  );
};

export default App;
