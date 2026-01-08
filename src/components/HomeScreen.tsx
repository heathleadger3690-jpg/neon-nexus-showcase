import { motion } from "framer-motion";
import { Monitor, Gamepad, Sparkles, MapPin, ChevronRight } from "lucide-react";

const stats = [
  { icon: Monitor, value: "12", label: "PCs Available", color: "text-primary" },
  { icon: Gamepad, value: "6", label: "Consoles Ready", color: "text-secondary" },
  { icon: Sparkles, value: "3", label: "Active Offers", color: "text-accent" },
];

const HomeScreen = () => {
  const handleViewLocation = () => {
    window.open("https://maps.google.com/?q=12.9716,77.5946", "_blank");
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted-foreground text-sm mb-1">Welcome to</p>
        <h1 className="font-gaming text-2xl font-bold">
          <span className="text-gradient-neon">NEON NEXUS</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-2">Your premium gaming destination</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-3 gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <p className="font-gaming text-xl font-bold">{stat.value}</p>
            <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Banner */}
      <motion.div
        className="glass-panel p-6 mb-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-purple/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-neon-cyan/20 to-transparent rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <span className="badge-offer mb-3 inline-block">Limited Time</span>
          <h2 className="font-gaming text-lg font-bold mb-2">Gaming Combo Pack</h2>
          <p className="text-muted-foreground text-sm mb-4">6 hours of non-stop gaming for just ₹500</p>
          <div className="flex items-center gap-2">
            <span className="font-gaming text-2xl font-bold text-primary">₹500</span>
            <span className="price-crossed">₹900</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-gaming text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Quick Actions</h3>
        
        <motion.button
          className="w-full glass-panel p-4 flex items-center justify-between group"
          onClick={handleViewLocation}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold">View Cafe Location</p>
              <p className="text-muted-foreground text-sm">Bangalore, Karnataka</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.button>
      </motion.div>

      {/* Why Choose Us Preview */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="font-gaming text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Why Gamers Choose Us</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { emoji: "⚡", text: "Ultra-fast PCs" },
            { emoji: "🎮", text: "Latest Consoles" },
            { emoji: "🌐", text: "Low Latency Net" },
            { emoji: "🪑", text: "Premium Chairs" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass-panel p-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            >
              <span className="text-2xl mb-1 block">{item.emoji}</span>
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeScreen;
