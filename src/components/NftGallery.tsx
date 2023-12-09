// src/components/NftGallery.tsx

import React from 'react';

interface NftGalleryProps {
    heroImageUrl: string;
    openseaLink: string;
}

const NftGallery: React.FC<NftGalleryProps> = ({ heroImageUrl, openseaLink }) => {
    return (
        <div>
            <img src={heroImageUrl} alt="Hero NFT" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
            <a href={openseaLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '20px', display: 'inline-block' }}>
                View Collection on OpenSea
            </a>
        </div>
    );
}

export default NftGallery;
