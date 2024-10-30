import React from 'react';
import AnimalList from './components/AnimalList';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>¡Adopta a tu mejor amigo!</h1>
        <p>Encuentra tu aliado perfecto para cada aventura.</p>
      </header>
      <main>
        <AnimalList />
      </main>
      
    </div>
  );
}

export default App;
