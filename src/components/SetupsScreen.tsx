import { motion } from "framer-motion";
import { Monitor, Gamepad2, Glasses, Cpu, Zap } from "lucide-react";

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
  },
];

const SetupsScreen = () => {
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-xl font-bold mb-2">Gaming Setups</h1>
        <p className="text-muted-foreground text-sm">Premium equipment for the ultimate experience</p>
      </motion.div>

      {/* Setups Grid */}
      <div className="space-y-4">
        {setups.map((setup, index) => (
          <motion.div
            key={setup.id}
            className="glass-panel overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Gradient Header */}
            <div className={`h-2 bg-gradient-to-r ${setup.color}`} />
            
            <div className="p-4">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${setup.color} p-[1px] flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <setup.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-gaming text-base font-bold">{setup.title}</h3>
                    <span className="badge-available flex-shrink-0">
                      {setup.available}/{setup.total}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{setup.description}</p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {setup.specs.map((spec, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-md text-xs"
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

      {/* Info Note */}
      <motion.div
        className="mt-6 glass-panel p-4 flex items-start gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-muted-foreground text-sm">
          All setups include high-speed internet, gaming peripherals, and comfortable seating. 
          Walk-in or book your slot in advance!
        </p>
      </motion.div>
    </div>
  );
};

export default SetupsScreen;
