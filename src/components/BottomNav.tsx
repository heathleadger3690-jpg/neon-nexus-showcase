import { motion } from "framer-motion";
import { Home, Monitor, Tag, Trophy, Info } from "lucide-react";

type TabType = "home" | "setups" | "pricing" | "tournaments" | "about";

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const navItems = [
  { id: "home" as TabType, icon: Home, label: "Home" },
  { id: "setups" as TabType, icon: Monitor, label: "Setups" },
  { id: "pricing" as TabType, icon: Tag, label: "Pricing" },
  { id: "tournaments" as TabType, icon: Trophy, label: "Events" },
  { id: "about" as TabType, icon: Info, label: "About" },
];

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      {/* Glassmorphic Background */}
      <div 
        className="absolute inset-0 rounded-t-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsla(222, 30%, 10%, 0.85) 0%, hsla(222, 30%, 6%, 0.95) 100%)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        }}
      >
        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Inner light reflection */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      <div className="relative flex justify-around items-center py-2 px-2 max-w-md mx-auto">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`nav-item relative ${activeTab === item.id ? "active" : "text-muted-foreground"}`}
            whileTap={{ scale: 0.92 }}
          >
            {activeTab === item.id && (
              <>
                {/* Active tab glow */}
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, hsla(185, 100%, 50%, 0.15) 0%, transparent 70%)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
                {/* Active tab background */}
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsla(185, 100%, 50%, 0.12) 0%, hsla(185, 100%, 50%, 0.05) 100%)',
                    border: '1px solid hsla(185, 100%, 50%, 0.2)',
                    boxShadow: '0 0 20px hsla(185, 100%, 50%, 0.15), inset 0 1px 0 hsla(255, 255%, 255%, 0.05)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              </>
            )}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-1"
              animate={{ 
                y: activeTab === item.id ? -1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <item.icon 
                className={`w-5 h-5 transition-all duration-300 ${
                  activeTab === item.id 
                    ? "text-primary drop-shadow-[0_0_8px_hsla(185,100%,50%,0.5)]" 
                    : ""
                }`} 
              />
              <span 
                className={`text-[10px] tracking-wide transition-all duration-300 ${
                  activeTab === item.id 
                    ? "text-primary font-semibold" 
                    : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        ))}
      </div>
      {/* Safe area padding for mobile */}
      <div className="h-safe-area-inset-bottom bg-transparent" />
    </motion.nav>
  );
};

export default BottomNav;