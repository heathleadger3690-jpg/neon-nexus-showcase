import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

interface SplashScreenProps {
  onContinue: () => void;
}

const SplashScreen = ({ onContinue }: SplashScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Layered Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow - Purple */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle, hsla(270, 91%, 65%, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Secondary glow - Cyan */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            bottom: '5%',
            right: '5%',
            background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        {/* Accent glow - Pink */}
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, hsla(328, 100%, 54%, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{ 
            scale: [0.9, 1.1, 0.9],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Icon - Enhanced */}
        <motion.div
          className="mb-10 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Outer glow ring */}
          <motion.div 
            className="absolute -inset-4 rounded-3xl opacity-50"
            style={{
              background: 'linear-gradient(135deg, hsla(185, 100%, 50%, 0.3) 0%, hsla(270, 91%, 65%, 0.3) 50%, hsla(328, 100%, 54%, 0.3) 100%)',
              filter: 'blur(20px)',
            }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Icon container with gradient border */}
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-[2px] relative">
            <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
              <Gamepad2 className="w-14 h-14 text-primary drop-shadow-[0_0_15px_hsla(185,100%,50%,0.5)]" />
            </div>
          </div>
        </motion.div>

        {/* Logo Text - Enhanced Typography */}
        <motion.h1 
          className="font-gaming text-5xl md:text-6xl font-black text-center mb-1 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-gradient-neon">NEON</span>
        </motion.h1>
        <motion.h1 
          className="font-gaming text-5xl md:text-6xl font-black text-center mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-foreground">NEXUS</span>
        </motion.h1>

        {/* Tagline - Refined */}
        <motion.p 
          className="text-muted-foreground text-lg md:text-xl text-center mb-14 max-w-xs font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Level Up Your Gaming Experience
        </motion.p>

        {/* Continue Button - Enhanced */}
        <motion.button
          className="btn-neon-primary font-gaming text-sm tracking-widest uppercase px-10 py-4"
          onClick={onContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Enter the Nexus
        </motion.button>
      </motion.div>

      {/* Bottom Accent Line - Enhanced */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;