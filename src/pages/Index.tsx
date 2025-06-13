
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomePage from "@/components/WelcomePage";
import RevealPage from "@/components/RevealPage";
import GiftDetailsPage from "@/components/GiftDetailsPage";
import PhotoGalleryPage from "@/components/PhotoGalleryPage";
import PersonalMessagePage from "@/components/PersonalMessagePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    <WelcomePage key="welcome" onNext={() => setCurrentPage(1)} />,
    <RevealPage key="reveal" onNext={() => setCurrentPage(2)} />,
    <GiftDetailsPage key="gift" onNext={() => setCurrentPage(3)} />,
    <PhotoGalleryPage key="photos" onNext={() => setCurrentPage(4)} />,
    <PersonalMessagePage key="message" onRestart={() => setCurrentPage(0)} />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-yellow-50 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-screen"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
