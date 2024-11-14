import { motion } from 'framer-motion';
import { PhotoCard } from '../components/PhotoCard';
import { VideoPlayer } from '../components/VideoPlayer';

const Index = () => {
  // Sample data - replace with your actual photos and videos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Together",
      date: "June 15, 2023",
      caption: "Our first date"
    },
    {
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      alt: "Memories",
      date: "July 4, 2023",
      caption: "Summer picnic"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Love",
      date: "August 20, 2023",
      caption: "Beach sunset"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        <div className="relative text-center text-white space-y-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A collection of our precious moments
          </motion.p>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Captured Moments
        </motion.h2>
        
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 md:px-8 bg-white/80">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Videos
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <VideoPlayer 
            src="/path-to-your-video.mp4" 
            poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;