import { motion } from "framer-motion";
import { Monitor, Gamepad2, Package, Clock, Sparkles } from "lucide-react";

const pricingData = [
  {
    id: 1,
    title: "PC Gaming",
    icon: Monitor,
    prices: [
      { duration: "1 Hour", offer: 100, regular: 150 },
      { duration: "3 Hours", offer: 250, regular: 400 },
      { duration: "6 Hours", offer: 450, regular: 800 },
    ],
    color: "from-neon-cyan to-neon-blue",
    glowColor: "hsla(185, 100%, 50%, 0.1)",
  },
  {
    id: 2,
    title: "Console Gaming",
    icon: Gamepad2,
    prices: [
      { duration: "1 Hour", offer: 150, regular: 200 },
      { duration: "3 Hours", offer: 400, regular: 550 },
      { duration: "6 Hours", offer: 700, regular: 1000 },
    ],
    color: "from-neon-purple to-secondary",
    glowColor: "hsla(270, 91%, 65%, 0.1)",
  },
];

const PricingScreen = () => {
  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-2xl font-black mb-2 tracking-tight">Pricing & Offers</h1>
        <p className="text-muted-foreground text-sm tracking-wide">Affordable rates for premium gaming</p>
      </motion.div>

      {/* Limited Time Badge - Enhanced */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.span 
          className="badge-offer inline-flex items-center gap-2 px-5 py-2"
          animate={{ 
            boxShadow: [
              '0 0 20px hsla(328, 100%, 54%, 0.35)',
              '0 0 30px hsla(328, 100%, 54%, 0.5)',
              '0 0 20px hsla(328, 100%, 54%, 0.35)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" />
          Limited Time Gaming Offer
          <Sparkles className="w-4 h-4" />
        </motion.span>
      </motion.div>

      {/* Pricing Cards - Enhanced */}
      <div className="space-y-6">
        {pricingData.map((category, catIndex) => (
          <motion.div
            key={category.id}
            className="glass-panel overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIndex * 0.15 }}
          >
            {/* Header with gradient and glow */}
            <div className={`p-5 bg-gradient-to-r ${category.color} flex items-center gap-3 relative overflow-hidden`}>
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <category.icon className="w-6 h-6 text-primary-foreground relative z-10" />
              <h2 className="font-gaming text-lg font-bold text-primary-foreground relative z-10 tracking-tight">{category.title}</h2>
            </div>

            {/* Prices */}
            <div className="p-5 space-y-3">
              {category.prices.map((price, priceIndex) => (
                <motion.div
                  key={price.duration}
                  className="flex items-center justify-between p-4 rounded-xl relative overflow-hidden group"
                  style={{
                    background: 'hsla(222, 30%, 12%, 0.5)',
                    border: '1px solid hsla(0, 0%, 100%, 0.04)',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + priceIndex * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: category.glowColor }}
                  />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'hsla(222, 30%, 18%, 0.8)',
                        border: '1px solid hsla(0, 0%, 100%, 0.05)',
                      }}
                    >
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="font-medium tracking-tight">{price.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="price-crossed">₹{price.regular}</span>
                    <span className="font-gaming text-xl font-black text-primary">₹{price.offer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Combo Pack - Enhanced */}
      <motion.div
        className="mt-8 border-gradient-neon rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div 
          className="p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsla(222, 30%, 10%, 0.95) 0%, hsla(222, 47%, 6%, 0.98) 100%)',
          }}
        >
          {/* Ambient glows */}
          <div 
            className="absolute top-0 right-0 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.1) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(270, 91%, 65%, 0.1) 0%, transparent 70%)',
              filter: 'blur(25px)',
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-card/90 backdrop-blur-sm flex items-center justify-center">
                  <Package className="w-7 h-7 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-gaming text-xl font-bold tracking-tight">Combo Pack</h3>
                <p className="text-muted-foreground text-sm">Best Value Deal</p>
              </div>
            </div>

            <div 
              className="rounded-xl p-5 mb-5"
              style={{
                background: 'hsla(222, 30%, 12%, 0.5)',
                border: '1px solid hsla(0, 0%, 100%, 0.04)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground">6 Hours of Gaming</span>
                <div className="flex items-center gap-3">
                  <span className="price-crossed">₹900</span>
                  <span className="font-gaming text-3xl font-black text-gradient-neon">₹500</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Mix PC & Console sessions as you like!</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-medium">Save up to 45%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Note */}
      <motion.p
        className="mt-8 text-center text-muted-foreground text-xs tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        *Prices are subject to change. Offers valid for limited time only.
      </motion.p>
    </div>
  );
};

export default PricingScreen;