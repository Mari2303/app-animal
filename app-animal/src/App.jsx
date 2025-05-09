import React from 'react';
import AnimalList from './components/AnimalList';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Adopt your best friend!</h1>
        <p>Find your perfect partner for every adventure.</p>
      </header>
      <main>
        <AnimalList />
      </main>
      
    </div>
  );
}

export default App;
