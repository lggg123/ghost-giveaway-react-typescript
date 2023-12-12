// Import necessary libraries
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers'; // Updated import statement
import ArtCollectible from './ArtCollectible.json'; // Make sure to provide the correct path

// Define the contract address for Polygon Mumbai
const contractAddress = '0x765676292b9D1E789250B29BF61AACCf4a9ECe48';

const ClaimNFTs: React.FC = () => {
  const [tokenId, setTokenId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  const [transactionHash, setTransactionHash] = useState<string>('');

  const claimNFT = async () => {
    try {
      // Connect to the Polygon Mumbai provider
      const provider: JsonRpcProvider = new ethers.providers.JsonRpcProvider("https://sly-white-energy.matic-testnet.quiknode.pro/d20feac5fd286b5c19ff6bc82c9b63aa2fa6352e/");

      // Get the signer (account) from the provider
      const signer = provider.getSigner();

      // Connect to the contract using the ABI and address
      const contract = new ethers.Contract(contractAddress, ArtCollectible.abi, signer);

      // Call the mint function on the contract
      const tx = await contract.mint(tokenId, amount);

      // Wait for the transaction to be mined
      await tx.wait();

      // Set the transaction hash for display
      setTransactionHash(tx.hash);
    } catch (error) {
      console.error('Error claiming NFT:', error.message);
    }
  };

  return (
    <div>
      <h1>Claim NFTs</h1>
      <div>
        <label>Token ID:</label>
        <input
          type="number"
          value={tokenId}
          onChange={(e) => setTokenId(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button onClick={claimNFT}>Claim NFT</button>
      {transactionHash && (
        <div>
          <p>Transaction Hash: {transactionHash}</p>
        </div>
      )}
    </div>
  );
};

export default ClaimNFTs;
