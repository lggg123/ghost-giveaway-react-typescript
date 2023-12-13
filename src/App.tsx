// src/App.tsx

import React from 'react';
import './App.css';
import NftGallery from './components/NftGallery';
import SignupForm from './components/signUpForm';

function App() {
  const heroImageUrl = process.env.PUBLIC_URL + '/cover_image.png';
  const openseaLink = 'https://opensea.io/collection/your-collection';
  const title = 'GHOSTERZ';

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-image">
          <img src={heroImageUrl} alt="Hero" />
        </div>
      </header>
      <main>
      <p>Sign Up for your free Ghosterz NFT airdrop</p>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
