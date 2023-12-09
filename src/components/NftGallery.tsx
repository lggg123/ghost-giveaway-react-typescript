// src/components/NftGallery.tsx

import React, { useState, useEffect } from 'react';
import NftCard from './NftCard';

interface Nft {
    id: string;
    title: string;
    imageUrl: string;
}

const NftGallery: React.FC = () => {
    const [nfts, setNfts] = useState<Nft[]>([]);

    useEffect(() => {
        fetch('https://your-api.com/nfts')
            .then(response => response.json())
            .then(data => setNfts(data));
    }, []);

    return (
        <div>
            {nfts.map(nft => (
                <NftCard key={nft.id} title={nft.title} imageUrl={nft.imageUrl} />
            ))}
        </div>
    );
}

export default NftGallery;