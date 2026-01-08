import { motion } from "framer-motion";
import { 
  Cpu, Wifi, Armchair, Shield, Users, Gamepad2, 
  MapPin, Phone, Mail, Instagram, Twitter, MessageCircle
} from "lucide-react";

const features = [
  { icon: Cpu, title: "Ultra High-End PCs", desc: "RTX 4070/4080, i7/i9 processors" },
  { icon: Wifi, title: "Low Latency Internet", desc: "Fiber optic, <5ms ping" },
  { icon: Armchair, title: "Premium Chairs", desc: "Ergonomic gaming chairs" },
  { icon: Shield, title: "Safe Environment", desc: "Clean, secure, AC facility" },
  { icon: Users, title: "Gaming Community", desc: "Meet fellow gamers" },
  { icon: Gamepad2, title: "Latest Games", desc: "All popular titles available" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: MessageCircle, label: "Discord", url: "#" },
];

const AboutScreen = () => {
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-xl font-bold mb-2">About Us</h1>
        <p className="text-muted-foreground text-sm">Your premium gaming destination</p>
      </motion.div>

      {/* Brand Story */}
      <motion.div
        className="glass-panel p-5 mb-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-neon-cyan/20 to-transparent rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <h2 className="font-gaming text-lg font-bold mb-3 text-gradient-neon">Our Story</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-semibold">NEON NEXUS</span> is a next-generation gaming lounge built for serious gamers, 
            streamers, and esports enthusiasts. We combine premium hardware, a vibrant community, 
            and competitive events to create the ultimate gaming experience in Bangalore.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-gaming text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Why Choose Us
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-panel p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <feature.icon className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-gaming text-xs font-bold mb-1">{feature.title}</h4>
              <p className="text-muted-foreground text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="glass-panel p-5 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-gaming text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Contact & Location
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">Koramangala, Bangalore</p>
              <p className="text-muted-foreground text-xs">Karnataka, India 560034</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-medium text-sm">+91 98765 43210</p>
              <p className="text-muted-foreground text-xs">Open 10 AM - 12 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-sm">hello@neonnexus.gg</p>
              <p className="text-muted-foreground text-xs">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.url}
            className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Demo Disclaimer */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground text-xs">Demo App – For Presentation Only</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutScreen;
