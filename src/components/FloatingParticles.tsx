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

const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      "hsla(185, 100%, 50%, 0.15)",
      "hsla(270, 91%, 65%, 0.12)",
      "hsla(328, 100%, 54%, 0.1)",
      "hsla(185, 100%, 50%, 0.08)",
      "hsla(270, 91%, 65%, 0.08)",
    ];

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            filter: `blur(${particle.size / 2}px)`,
          }}
          animate={{
            y: [0, -150, -300],
            x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;