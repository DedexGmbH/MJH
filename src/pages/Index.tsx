import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { VideoPlayer } from '../components/VideoPlayer';
import { YouTubeEmbed } from '../components/YouTubeEmbed';

const Index = () => {
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

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Together",
      date: "First Date",
      caption: "Where it all began"
    },
    {
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      alt: "Memories",
      date: "Special Day",
      caption: "Our adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Love",
      date: "Summer",
      caption: "Beach day"
    },
    {
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
      alt: "Together",
      date: "Autumn",
      caption: "Coffee date"
    },
    {
      src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a",
      alt: "Adventure",
      date: "Winter",
      caption: "First snow"
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      alt: "Love",
      date: "Spring",
      caption: "Park walk"
    },
    {
      src: "https://images.unsplash.com/photo-1503516459261-40c66117780a",
      alt: "Together",
      date: "Summer",
      caption: "Sunset view"
    },
    {
      src: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f",
      alt: "Love",
      date: "Winter",
      caption: "Holiday season"
    },
    {
      src: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb",
      alt: "Adventure",
      date: "Spring",
      caption: "Garden visit"
    },
    {
      src: "https://images.unsplash.com/photo-1516589091380-5d8e21be1ce9",
      alt: "Together",
      date: "Summer",
      caption: "Beach sunset"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section with Names Animation */}
      <motion.section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        <motion.div 
          className="relative text-center text-white space-y-12"
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="block mb-4"
            >
              Hazar
            </motion.span>
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="block"
            >
              Majura
            </motion.span>
          </motion.h1>
        </motion.div>
      </motion.section>

      {/* Photo Gallery with Swing Animation */}
      <section className="py-20 px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: index * 0.1
              }}
            >
              <PhotoCard {...photo} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* GIF Section */}
      <section className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          <img 
            src="https://media.giphy.com/media/l4Ki4biBSwhjyrS48/giphy.gif" 
            alt="Romantic hearts"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Romantic Message Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 bg-white/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-r from-rose-100/50 to-rose-50/50 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-light text-rose-600 mb-6">Our Love Story</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              "Every moment spent with you is like a beautiful dream come true. You make my heart smile in ways no one else can. Here's to our journey together, filled with love, laughter, and countless precious memories."
            </p>
            <div className="mt-6">
              <motion.div
                className="inline-block"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ❤️
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* YouTube Videos Section */}
      <section className="py-20 px-4 md:px-8 bg-white/80">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Songs
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <YouTubeEmbed 
              videoId="REPLACE_WITH_YOUR_YOUTUBE_VIDEO_ID_1" 
              title="Our Song 1" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <YouTubeEmbed 
              videoId="REPLACE_WITH_YOUR_YOUTUBE_VIDEO_ID_2" 
              title="Our Song 2" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;