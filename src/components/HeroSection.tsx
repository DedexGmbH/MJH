import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(y => {
      if (y > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>
      
      <div className="relative text-center text-white space-y-12">
        <motion.h1 
          className="text-7xl md:text-9xl font-light"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.5 
          }}
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="block mb-4"
          >
            Hazar
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            Majura
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};