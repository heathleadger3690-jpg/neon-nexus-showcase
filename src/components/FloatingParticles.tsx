import { motion } from "framer-motion";
import { useMemo } from "react";

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

const FloatingParticles = () => {
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
    </div>
  );
};

export default FloatingParticles;