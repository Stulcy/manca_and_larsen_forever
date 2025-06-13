
import { motion } from "framer-motion";
import { Heart, Gift } from "lucide-react";
interface WelcomePageProps {
  onNext: () => void;
}
const WelcomePage = ({
  onNext
}: WelcomePageProps) => {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center relative">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute text-amber-200" initial={{
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        rotate: 0,
        scale: 0.5
      }} animate={{
        y: -20,
        rotate: 360,
        scale: [0.5, 1, 0.5]
      }} transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 2
      }}>
            <Heart size={16 + Math.random() * 8} fill="currentColor" />
          </motion.div>)}
      </div>

      <motion.div initial={{
      scale: 0,
      rotate: -180
    }} animate={{
      scale: 1,
      rotate: 0
    }} transition={{
      duration: 1,
      ease: "easeOut",
      delay: 0.2
    }} className="mb-8">
        
      </motion.div>

      <motion.h1 initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.8,
      duration: 0.8
    }} className="text-4xl font-light text-gray-800 mb-4 leading-tight" style={{
      fontFamily: "'Playfair Display', serif"
    }}>
        <span className="text-amber-600">Manca &amp; Larsen</span>
      </motion.h1>

      <motion.p initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.2,
      duration: 0.6
    }} className="text-gray-600 text-lg mb-12 max-w-xs leading-relaxed">Wonderful fortune and great adventures await you ...</motion.p>

      <motion.button initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1.6,
      duration: 0.4
    }} whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={onNext} className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">💛 START HERE 💛</motion.button>

      
    </div>;
};
export default WelcomePage;
