import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

interface SplashScreenProps {
  onContinue: () => void;
}

const SplashScreen = ({ onContinue }: SplashScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Icon */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-[2px]">
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
              <Gamepad2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink opacity-30 blur-xl rounded-2xl -z-10" />
        </motion.div>

        {/* Logo Text */}
        <motion.h1 
          className="font-gaming text-4xl md:text-5xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-gradient-neon">NEON</span>
        </motion.h1>
        <motion.h1 
          className="font-gaming text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-foreground">NEXUS</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          className="text-muted-foreground text-lg md:text-xl text-center mb-12 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Level Up Your Gaming Experience
        </motion.p>

        {/* Continue Button */}
        <motion.button
          className="btn-neon-primary font-gaming text-sm tracking-wider uppercase"
          onClick={onContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Nexus
        </motion.button>
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </div>
  );
};

export default SplashScreen;
