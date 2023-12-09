// src/App.tsx

import React from 'react';
import './App.css';
import NftGallery from './components/NftGallery'; // Import NftGallery component

function App() {
  const heroImageUrl = process.env.PUBLIC_URL + '/cover_image.jpg';  // Replace with your actual hero image URL
  const openseaLink = "https://opensea.io/collection/your-collection"; // Replace with your OpenSea collection link

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghosts NFT Giveaway</h1>
        <img src={heroImageUrl} alt="Hero" />
      </header>
      <main>
        <NftGallery heroImageUrl={heroImageUrl} openseaLink={openseaLink} />
      </main>
    </div>
  );
}

export default App;
