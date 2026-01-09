import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Gamepad, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Monitor, value: 12, label: "PCs Available", color: "text-primary", glowColor: "hsla(185, 100%, 50%, 0.2)" },
  { icon: Gamepad, value: 6, label: "Consoles Ready", color: "text-secondary", glowColor: "hsla(270, 91%, 65%, 0.2)" },
  { icon: Sparkles, value: 3, label: "Active Offers", color: "text-accent", glowColor: "hsla(328, 100%, 54%, 0.2)" },
];

// Animated number component
const AnimatedNumber = ({ value, delay }: { value: number; delay: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(eased * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return <>{displayValue}</>;
};

const HomeScreen = () => {
  const handleViewLocation = () => {
    window.open("https://maps.google.com/?q=12.9716,77.5946", "_blank");
  };

  return (
    <div className="min-h-screen pb-28 relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        {/* Additional cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
      </div>
      
      <div className="relative z-10 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted-foreground text-sm mb-1.5 tracking-wide">Welcome to</p>
        <h1 className="font-gaming text-3xl font-black tracking-tight">
          <span className="text-gradient-neon">NEON NEXUS</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-3 tracking-wide">Your premium gaming destination</p>
      </motion.div>

      {/* Stats Cards - Enhanced */}
      <motion.div 
        className="grid grid-cols-3 gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            {/* Background glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${stat.glowColor} 0%, transparent 70%)` }}
            />
            
            <div className="relative z-10">
              <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color} transition-transform duration-300 group-hover:scale-110`} />
              <p className="font-gaming text-2xl font-black tracking-tight">
                <AnimatedNumber value={stat.value} delay={0.3 + index * 0.15} />
              </p>
              <p className="text-muted-foreground text-[10px] mt-1.5 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Banner - Enhanced */}
      <motion.div
        className="glass-panel p-6 mb-8 relative overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Animated background glows */}
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(270, 91%, 65%, 0.25) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.2) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
          animate={{ 
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <div className="relative z-10">
          <span className="badge-offer mb-4 inline-block">Limited Time</span>
          <h2 className="font-gaming text-xl font-bold mb-2 tracking-tight">Gaming Combo Pack</h2>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">6 hours of non-stop gaming for just ₹500</p>
          <div className="flex items-center gap-3">
            <span className="font-gaming text-3xl font-black text-primary drop-shadow-[0_0_10px_hsla(185,100%,50%,0.4)]">₹500</span>
            <span className="price-crossed text-base">₹900</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions - Enhanced */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="section-heading">Quick Actions</h3>
        
        <motion.button
          className="w-full glass-panel p-5 flex items-center justify-between group"
          onClick={handleViewLocation}
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center gap-4">
            <div className="icon-container w-14 h-14 group-hover:border-primary/30 transition-all duration-300">
              <MapPin className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-base tracking-tight">View Cafe Location</p>
              <p className="text-muted-foreground text-sm mt-0.5">Bangalore, Karnataka</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </motion.button>
      </motion.div>

      {/* Why Choose Us Preview - Enhanced */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="section-heading">Why Gamers Choose Us</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { emoji: "⚡", text: "Ultra-fast PCs" },
            { emoji: "🎮", text: "Latest Consoles" },
            { emoji: "🌐", text: "Low Latency Net" },
            { emoji: "🪑", text: "Premium Chairs" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass-panel p-4 text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span className="text-2xl mb-2 block transition-transform duration-300 group-hover:scale-110">{item.emoji}</span>
              <span className="text-sm font-medium tracking-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;