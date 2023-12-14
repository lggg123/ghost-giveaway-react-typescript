// src/App.tsx

import React from 'react';
import './App.css';
import NftGallery from './components/NftGallery';
import SignupForm from './components/signUpForm';
import { useMediaQuery } from 'react-responsive';

function App() {
  const heroImageUrl = process.env.PUBLIC_URL + '/cover_image.png';
  const heroImageUrlMobile = process.env.PUBLIC_URL + '/cover_image_mobile.png';
  const openseaLink = 'https://opensea.io/collection/your-collection';
  const title = 'GHOSTERZ';
  const isMobile = useMediaQuery({ query: '(max-width: 768px'})

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-image">
          <img src={isMobile ? heroImageUrlMobile : heroImageUrl} alt="Hero" />
        </div>
      </header>
      <main>
      <p>Sign Up for your free Ghosterz NFT airdrop which drops December 24</p>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
