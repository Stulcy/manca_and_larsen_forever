import { motion } from "framer-motion";
import { Heart, ArrowRight, Users, Camera } from "lucide-react";
interface PhotoGalleryPageProps {
  onNext: () => void;
}
const PhotoGalleryPage = ({ onNext }: PhotoGalleryPageProps) => {
  const couplePhotos = [
    {
      id: 1,
      alt: "Couple photo 1",
      src: "a.png",
    },
    {
      id: 2,
      alt: "Couple photo 2",
      src: "b.png",
    },
    // {
    //   id: 3,
    //   alt: "Wedding photo",
    //   src: "c.png",
    // },
  ];
  const friendGroupPhotos = [
    {
      id: 1,
      alt: "Friend group photo 1",
      src: "c.png",
    },
    {
      id: 2,
      alt: "Friend group photo 2",
      src: "d.jpg",
    },
    {
      id: 3,
      alt: "Friend group photo 3",
      src: "e.jpeg",
    },
  ];
  return (
    <div className="h-full flex flex-col px-6 py-8 overflow-y-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center mb-8"
      >
        <h2
          className="text-3xl font-light text-gray-800 mb-2"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Spominčki
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Couple Photos Section */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-6"
      >
        <div className="grid grid-cols-1 gap-4 mb-4">
          {couplePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.4,
              }}
              className="aspect-video bg-gradient-to-br from-amber-50 to-cream-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Friend Group Photos Section */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-6"
      >
        <div className="grid grid-cols-2 gap-3">
          {friendGroupPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.4,
              }}
              className="aspect-square bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.4,
        }}
        className="text-center mb-6"
      ></motion.div>

      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.4,
        }}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={onNext}
        className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-auto"
      >
        <span>There's more</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};
export default PhotoGalleryPage;
