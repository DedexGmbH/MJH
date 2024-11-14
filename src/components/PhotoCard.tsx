import { useState } from 'react';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  src: string;
  alt: string;
  date?: string;
  caption?: string;
}

export const PhotoCard = ({ src, alt, date, caption }: PhotoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="photo-card group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={alt} 
          className={`transition-all duration-500 ${isHovered ? 'scale-105 brightness-100' : 'brightness-50'}`}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {caption && (
            <p className="text-lg font-light mb-1">{caption}</p>
          )}
          {date && (
            <p className="text-sm text-gray-200">{date}</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};