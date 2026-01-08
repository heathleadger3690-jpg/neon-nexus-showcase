import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import SetupsScreen from "@/components/SetupsScreen";
import PricingScreen from "@/components/PricingScreen";
import TournamentsScreen from "@/components/TournamentsScreen";
import AboutScreen from "@/components/AboutScreen";

type TabType = "home" | "setups" | "pricing" | "tournaments" | "about";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("home");

  const handleContinue = () => {
    setShowSplash(false);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "setups":
        return <SetupsScreen />;
      case "pricing":
        return <PricingScreen />;
      case "tournaments":
        return <TournamentsScreen />;
      case "about":
        return <AboutScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <SplashScreen onContinue={handleContinue} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            {/* Status Bar Simulation */}
            <div className="sticky top-0 z-40 h-12 glass-panel-strong flex items-center justify-center border-b border-border/30 rounded-none">
              <span className="font-gaming text-sm font-bold text-gradient-neon">NEON NEXUS</span>
            </div>

            {/* Screen Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
