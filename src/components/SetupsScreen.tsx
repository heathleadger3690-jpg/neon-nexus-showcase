import { motion } from "framer-motion";
import { Monitor, Gamepad2, Glasses, Cpu, Zap } from "lucide-react";
import setupsBg from "@/assets/setups-bg.jpg";

const setups = [
  {
    id: 1,
    title: "High-End Gaming PCs",
    description: "RTX 4070/4080 GPUs, Intel i7/i9, 240Hz monitors, mechanical keyboards",
    icon: Monitor,
    specs: ["NVIDIA RTX 4080", "32GB DDR5 RAM", "240Hz Display"],
    available: 8,
    total: 12,
    color: "from-neon-cyan to-neon-blue",
    glowColor: "hsla(185, 100%, 50%, 0.15)",
  },
  {
    id: 2,
    title: "PlayStation 5 Zone",
    description: "Latest PS5 consoles with 4K HDR displays and premium sound",
    icon: Gamepad2,
    specs: ["PS5 Console", "4K HDR TV", "DualSense Controller"],
    available: 3,
    total: 4,
    color: "from-neon-purple to-secondary",
    glowColor: "hsla(270, 91%, 65%, 0.15)",
  },
  {
    id: 3,
    title: "Xbox Series X Arena",
    description: "Xbox Game Pass Ultimate with hundreds of games ready to play",
    icon: Gamepad2,
    specs: ["Xbox Series X", "Game Pass Ultimate", "Elite Controller"],
    available: 2,
    total: 2,
    color: "from-green-500 to-emerald-600",
    glowColor: "hsla(142, 76%, 36%, 0.15)",
  },
  {
    id: 4,
    title: "VR Gaming Zone",
    description: "Meta Quest 3 and PSVR2 for immersive virtual reality experiences",
    icon: Glasses,
    specs: ["Meta Quest 3", "PSVR2", "Full Body Tracking"],
    available: 2,
    total: 3,
    color: "from-neon-pink to-accent",
    glowColor: "hsla(328, 100%, 54%, 0.15)",
  },
];

const SetupsScreen = () => {
  return (
    <div className="min-h-screen pb-28 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={setupsBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        {/* Soft blur overlay for depth */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-2xl font-black mb-2 tracking-tight">Gaming Setups</h1>
        <p className="text-muted-foreground text-sm tracking-wide">Premium equipment for the ultimate experience</p>
      </motion.div>

      {/* Setups Grid */}
      <div className="space-y-4">
        {setups.map((setup, index) => (
          <motion.div
            key={setup.id}
            className="glass-panel overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            {/* Gradient Header with glow */}
            <div className={`h-1.5 bg-gradient-to-r ${setup.color} relative`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${setup.color} blur-sm opacity-70`} />
            </div>
            
            <div className="p-5 relative">
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top left, ${setup.glowColor} 0%, transparent 50%)` }}
              />
              
              <div className="flex items-start gap-4 relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${setup.color} p-[1.5px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  <div className="w-full h-full rounded-[10px] bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <setup.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-gaming text-base font-bold tracking-tight">{setup.title}</h3>
                    <span className="badge-available flex-shrink-0">
                      {setup.available}/{setup.total}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{setup.description}</p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {setup.specs.map((spec, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: 'hsla(222, 30%, 15%, 0.6)',
                          border: '1px solid hsla(0, 0%, 100%, 0.05)',
                        }}
                      >
                        <Cpu className="w-3 h-3 text-primary" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Note - Enhanced */}
      <motion.div
        className="mt-8 glass-panel p-5 flex items-start gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="icon-container w-10 h-10 flex-shrink-0">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All setups include high-speed internet, gaming peripherals, and comfortable seating. 
          Walk-in or book your slot in advance!
        </p>
      </motion.div>
      </div>
    </div>
  );
};

export default SetupsScreen;