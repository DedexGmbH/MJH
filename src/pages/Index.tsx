import { motion } from 'framer-motion';
import { PhotoCard } from '../components/PhotoCard';
import { VideoPlayer } from '../components/VideoPlayer';
import { YouTubeEmbed } from '../components/YouTubeEmbed';

const Index = () => {
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
        </div>
      </motion.section>

      {/* Photo Gallery with Swing Animation */}
      <section className="py-20 px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Moments
        </motion.h2>
        
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.2
              }}
            >
              <PhotoCard {...photo} />
            </motion.div>
          ))}
        </div>
      </section>

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