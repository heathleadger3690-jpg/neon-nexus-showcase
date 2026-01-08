import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  blur: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const FloatingParticles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const particles = useMemo<Particle[]>(() => {
    const colors = [
      "hsla(185, 100%, 50%, 0.18)",
      "hsla(270, 91%, 65%, 0.15)",
      "hsla(328, 100%, 54%, 0.12)",
      "hsla(185, 100%, 50%, 0.1)",
      "hsla(270, 91%, 65%, 0.1)",
      "hsla(220, 100%, 60%, 0.12)",
    ];

    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 50,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 18 + 20,
      delay: Math.random() * -25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  const orbs = useMemo<Orb[]>(() => {
    const orbColors = [
      "hsla(185, 100%, 50%, 0.08)",
      "hsla(270, 91%, 65%, 0.06)",
      "hsla(328, 100%, 54%, 0.05)",
      "hsla(185, 100%, 60%, 0.07)",
    ];

    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 40,
      size: Math.random() * 80 + 60,
      duration: Math.random() * 30 + 40,
      delay: Math.random() * -20,
      color: orbColors[Math.floor(Math.random() * orbColors.length)],
      blur: Math.random() * 30 + 40,
    }));
  }, []);

  // Sparkle generator
  useEffect(() => {
    const sparkleColors = [
      "hsla(185, 100%, 70%, 1)",
      "hsla(270, 91%, 75%, 1)",
      "hsla(328, 100%, 70%, 1)",
      "hsla(45, 100%, 70%, 1)",
      "hsla(0, 0%, 100%, 0.9)",
    ];

    const createSparkle = () => {
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 80 + 10,
        size: Math.random() * 4 + 3,
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 600);
    };

    // Create sparkles at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        createSparkle();
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large slow-moving orbs for depth */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            y: [0, -80, -160, -80, 0],
            x: [0, 30, 0, -30, 0],
            opacity: [0.3, 0.6, 0.8, 0.6, 0.3],
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, Math.random() * 50 - 25, Math.random() * 80 - 40],
            opacity: [0, 0.9, 0],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Medium glowing particles for mid-layer */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`mid-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80 + 40}%`,
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            background: `hsla(${185 + Math.random() * 85}, 100%, 50%, ${0.1 + Math.random() * 0.1})`,
            filter: `blur(${Math.random() * 2 + 1}px)`,
            boxShadow: `0 0 ${10 + Math.random() * 10}px hsla(185, 100%, 50%, 0.2)`,
          }}
          animate={{
            y: [0, -250, -500],
            x: [0, Math.random() * 60 - 30],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * -30,
            ease: "linear",
          }}
        />
      ))}

      {/* Sparkle flashes */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180] }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Four-point star sparkle */}
            <svg
              width={sparkle.size * 4}
              height={sparkle.size * 4}
              viewBox="0 0 24 24"
              style={{
                filter: `drop-shadow(0 0 ${sparkle.size}px ${sparkle.color}) drop-shadow(0 0 ${sparkle.size * 2}px ${sparkle.color})`,
              }}
            >
              <path
                d="M12 0L13.5 9L24 12L13.5 15L12 24L10.5 15L0 12L10.5 9L12 0Z"
                fill={sparkle.color}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingParticles;