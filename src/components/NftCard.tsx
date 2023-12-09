// src/components/NftCard.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface NftCardProps {
    imageUrl: string;
    title: string;
}

const NftCard: React.FC<NftCardProps> = ({ imageUrl, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
        </motion.div>
    );
}

export default NftCard;