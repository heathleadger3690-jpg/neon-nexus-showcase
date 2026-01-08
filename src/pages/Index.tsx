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
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Ambient Background Glows */}
      <div className="ambient-glow" />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <SplashScreen onContinue={handleContinue} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-md mx-auto relative z-10"
          >
            {/* Status Bar Simulation - Enhanced */}
            <motion.div 
              className="sticky top-0 z-40 glass-panel-strong border-b border-border/20 rounded-none"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-12 flex items-center justify-center relative overflow-hidden">
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-8 bg-primary/10 blur-xl rounded-full" />
                </div>
                <span className="font-gaming text-sm font-bold text-gradient-neon relative z-10 tracking-wider">
                  NEON NEXUS
                </span>
              </div>
            </motion.div>

            {/* Screen Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
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