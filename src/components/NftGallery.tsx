// src/components/NftGallery.tsx

import React from 'react';

interface NftGalleryProps {
    heroImageUrl: string;
}

const NftGallery: React.FC<NftGalleryProps> = ({ heroImageUrl }) => {
    return (
        <div>
            <img src={heroImageUrl} alt="Hero NFT" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
        </div>
    );
}

export default NftGallery;
