import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without errors', () => {
    const { getByText } = render(<App />);

    // Assert that the text content is rendered
    expect(getByText(/Sign Up for your free Ghosterz NFT airdrop/i)).toBeInTheDocument();
  });
});