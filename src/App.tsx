// src/App.tsx

import React from 'react';
import './App.css';
import NftGallery from './components/NftGallery'; // Import NftGallery component
import Header from './components/Header';
import ClaimNFTs from './components/claimNFT';

function App() {
  const heroImageUrl = process.env.PUBLIC_URL + './cover_image.png';  // Replace with your actual hero image URL
  const openseaLink = "https://opensea.io/collection/your-collection"; // Replace with your OpenSea collection link
  const title = "Ghosterz NFT Collection Giveaway Coming Soon!"
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title}></Header>
        <NftGallery heroImageUrl={heroImageUrl} openseaLink={openseaLink} />
      </header>
      <main>
        <ClaimNFTs />
      </main>
    </div>
  );
}

export default App;
