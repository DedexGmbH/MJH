import { useState, useRef } from 'react';
import { Play, Pause, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full rounded-xl"
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <Maximize2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};