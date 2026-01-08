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
    shadowColor: "neon-glow-cyan",
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
    shadowColor: "neon-glow-purple",
  },
];

const PricingScreen = () => {
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-xl font-bold mb-2">Pricing & Offers</h1>
        <p className="text-muted-foreground text-sm">Affordable rates for premium gaming</p>
      </motion.div>

      {/* Limited Time Badge */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="badge-offer inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Limited Time Gaming Offer
          <Sparkles className="w-4 h-4" />
        </span>
      </motion.div>

      {/* Pricing Cards */}
      <div className="space-y-6">
        {pricingData.map((category, catIndex) => (
          <motion.div
            key={category.id}
            className="glass-panel overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIndex * 0.15 }}
          >
            {/* Header */}
            <div className={`p-4 bg-gradient-to-r ${category.color} flex items-center gap-3`}>
              <category.icon className="w-6 h-6 text-primary-foreground" />
              <h2 className="font-gaming text-lg font-bold text-primary-foreground">{category.title}</h2>
            </div>

            {/* Prices */}
            <div className="p-4 space-y-3">
              {category.prices.map((price, priceIndex) => (
                <motion.div
                  key={price.duration}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + priceIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{price.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="price-crossed">₹{price.regular}</span>
                    <span className="font-gaming text-xl font-bold text-primary">₹{price.offer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Combo Pack */}
      <motion.div
        className="mt-6 border-gradient-neon rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-[1px]">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                <Package className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-gaming text-lg font-bold">Combo Pack</h3>
              <p className="text-muted-foreground text-sm">Best Value Deal</p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">6 Hours of Gaming</span>
              <div className="flex items-center gap-2">
                <span className="price-crossed">₹900</span>
                <span className="font-gaming text-2xl font-bold text-gradient-neon">₹500</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Mix PC & Console sessions as you like!</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Save up to 45%</span>
          </div>
        </div>
      </motion.div>

      {/* Note */}
      <motion.p
        className="mt-6 text-center text-muted-foreground text-xs"
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
