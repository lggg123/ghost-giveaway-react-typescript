// src/App.tsx

import React from 'react';
import './App.css';

import { useMediaQuery } from 'react-responsive';
import SignupForm from './components/signUpForm';

function App() {
  const heroImageUrl = process.env.PUBLIC_URL + '/cover_image.png';
  const heroImageUrlMobile = process.env.PUBLIC_URL + '/cover_image_mobile.png';
  // const openseaLink = 'https://opensea.io/collection/your-collection';
  const isMobile = useMediaQuery({ query: '(max-width: 768px'})

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-image">
          <img src={isMobile ? heroImageUrlMobile : heroImageUrl} alt="Hero" />
        </div>
      </header>
      <main>
      <p>Sign Up for your free Ghosterz NFT airdrop which drops January 20th!</p>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
