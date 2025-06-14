import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
interface GiftDetailsPageProps {
  onNext: () => void;
}
const GiftDetailsPage = ({ onNext }: GiftDetailsPageProps) => {
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
          ✨ Od nas za vas! ✨
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

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
        {/* Gift image placeholder */}
        <div className="w-full aspect-[16/9] rounded-2xl mb-6 overflow-hidden">
          <img
            src="background.png"
            alt="Gift background"
            className="w-full h-full object-cover"
          />
        </div>

        <h3
          className="text-2xl font-semibold text-gray-800 mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Something Cool
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Ful bo fino. Oblubmo!
        </p>

        {/* Gift details */}
        <div className="space-y-4">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.4,
            }}
            className="flex items-center text-gray-700"
          >
            <MapPin className="text-amber-500 mr-3" size={20} />
            <span>Location details will be provided</span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.4,
            }}
            className="flex items-center text-gray-700"
          >
            <Calendar className="text-amber-500 mr-3" size={20} />
            <span>Valid for 12 months from your wedding date</span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.4,
            }}
            className="flex items-center text-gray-700"
          >
            <Clock className="text-amber-500 mr-3" size={20} />
            <span>Flexible booking arrangements</span>
          </motion.div>
        </div>
      </motion.div>

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
          delay: 1.2,
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
        <span>Še kaj?</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};
export default GiftDetailsPage;
