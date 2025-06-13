import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
interface RevealPageProps {
  onNext: () => void;
}
const RevealPage = ({
  onNext
}: RevealPageProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(onNext, 2000);
  };
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      <motion.h2 initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="text-2xl font-light text-gray-800 mb-12" style={{
      fontFamily: "'Playfair Display', serif"
    }}>Ready?</motion.h2>

      <div className="relative">
        {/* Gift box container */}
        <motion.div className="relative" animate={isRevealed ? {
        scale: 1.1
      } : {
        scale: 1
      }} transition={{
        duration: 0.5
      }}>
          {/* Gift box */}
          <motion.div whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleReveal} style={{
          cursor: isRevealed ? 'default' : 'pointer'
        }} className="backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative overflow-hidden bg-cream-200 px-[126px] py-[85px]">
            {/* Ribbon horizontal */}
            <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-to-b from-amber-400 to-yellow-500" animate={isRevealed ? {
            scaleY: 0,
            opacity: 0
          } : {
            scaleY: 1,
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} />
            
            {/* Ribbon vertical */}
            <motion.div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 bg-gradient-to-r from-amber-400 to-yellow-500" animate={isRevealed ? {
            scaleX: 0,
            opacity: 0
          } : {
            scaleX: 1,
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} />

            {/* Bow */}
            <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 text-amber-500" animate={isRevealed ? {
            scale: 0,
            rotate: 180,
            opacity: 0
          } : {
            scale: 1,
            rotate: 0,
            opacity: 1
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }}>
              
            </motion.div>

            {/* Gift icon or revealed content */}
            
          </motion.div>
        </motion.div>

        {/* Reveal instruction */}
        {!isRevealed && <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5,
        duration: 0.6
      }} className="text-gray-500 mt-8 text-lg">Tap the gift to unwrap! </motion.p>}

        {/* Revealed message */}
        {isRevealed && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1,
        duration: 0.8
      }} className="mt-8">
            <h3 className="text-2xl font-light text-gray-800 mb-2" style={{
          fontFamily: "'Playfair Display', serif"
        }}>
              Congratulations!
            </h3>
            <p className="text-gray-600">Your special experience awaits...</p>
          </motion.div>}
      </div>
    </div>;
};
export default RevealPage;