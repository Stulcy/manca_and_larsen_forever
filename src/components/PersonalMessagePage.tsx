import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
interface PersonalMessagePageProps {
  onRestart: () => void;
}
const PersonalMessagePage = ({ onRestart }: PersonalMessagePageProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-8 text-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-md mx-auto"
      >
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
          }}
          className="mb-6"
        >
          <Heart
            size={48}
            className="text-amber-500 mx-auto"
            fill="currentColor"
          />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="text-2xl font-light text-gray-800 mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Od vajine izbrane družinice
        </motion.h2>

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
            delay: 0.7,
            duration: 0.6,
          }}
          className="text-gray-700 leading-relaxed space-y-4"
        >
          <p className="italic">
            Poti življenja je nešteto, ampak samo ena je samo vajina.
            <br />
            ~Ula & Žiga~
          </p>

          <p>
            Verjemita v nekaj – pa naj bo to v drug drugega.
            <br />
            Hvaležen sem, da sem vaju lahko tako dobro spoznal v relativno
            kratkem času, a hkrati imam občutek, kot da se poznamo že veliko
            dlje. Sta par, vreden občudovanja – pravi dynamic duo. Lahko sta za
            zgled, tako skupaj kot vsak zase. Iskreno vama želim, da se vajina
            pot nadaljuje v ljubezni, sreči in uspehu, ter da se naše poti čim
            večkrat križajo.
            <br />
            ~Anze~
          </p>

          <p>
            Mal je ljudi za katere bi šla na drug konc sveta. Za vaju zmer. Za
            popotnico pa: Centa čas k ga mata en z drugim, spoštujta se,
            zaupajta si, pa bodta potrpežljiva en z drugim. Love you forever. 💛
            <br />~ Nika & Rok~
          </p>
        </motion.div>
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
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onRestart}
        className="mt-8 bg-white/60 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
      >
        <RotateCcw size={16} />
        <span>Go again</span>
      </motion.button>
    </div>
  );
};
export default PersonalMessagePage;
