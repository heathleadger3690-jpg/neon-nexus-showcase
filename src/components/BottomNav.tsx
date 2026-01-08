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
      className="fixed bottom-0 left-0 right-0 z-50 glass-panel-strong border-t border-border/50 rounded-none"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="flex justify-around items-center py-2 px-2 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`nav-item relative ${activeTab === item.id ? "active" : "text-muted-foreground"}`}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <item.icon className={`w-5 h-5 relative z-10 transition-colors ${activeTab === item.id ? "text-primary" : ""}`} />
            <span className={`text-xs relative z-10 transition-colors ${activeTab === item.id ? "text-primary font-medium" : ""}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
      {/* Safe area padding for mobile */}
      <div className="h-safe-area-inset-bottom" />
    </motion.nav>
  );
};

export default BottomNav;
