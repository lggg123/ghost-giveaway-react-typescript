import React from 'react';
import logo from './logo.svg';
import './App.css';
import NftGallery from './components/NftGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghost NFT Giveaway</h1>
      </header>
      <main>
        <NftGallery />
      </main>
    </div>
  );
}

export default App;
