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
    <div className="min-h-screen pb-28 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-2xl font-black mb-2 tracking-tight">About Us</h1>
        <p className="text-muted-foreground text-sm tracking-wide">Your premium gaming destination</p>
      </motion.div>

      {/* Brand Story - Enhanced */}
      <motion.div
        className="glass-panel p-6 mb-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Ambient glows */}
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(270, 91%, 65%, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.15) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="relative z-10">
          <h2 className="font-gaming text-lg font-bold mb-4 text-gradient-neon tracking-tight">Our Story</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-semibold">NEON NEXUS</span> is a next-generation gaming lounge built for serious gamers, 
            streamers, and esports enthusiasts. We combine premium hardware, a vibrant community, 
            and competitive events to create the ultimate gaming experience in Bangalore.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us - Enhanced */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="section-heading">Why Choose Us</h3>

        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-panel p-4 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <feature.icon className="w-6 h-6 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-gaming text-xs font-bold mb-1 tracking-tight">{feature.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info - Enhanced */}
      <motion.div
        className="glass-panel p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="section-heading mb-5">Contact & Location</h3>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="icon-container w-12 h-12 flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm tracking-tight">Koramangala, Bangalore</p>
              <p className="text-muted-foreground text-sm mt-0.5">Karnataka, India 560034</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="icon-container icon-container-secondary w-12 h-12 flex-shrink-0">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-medium text-sm tracking-tight">+91 98765 43210</p>
              <p className="text-muted-foreground text-sm mt-0.5">Open 10 AM - 12 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="icon-container icon-container-accent w-12 h-12 flex-shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-sm tracking-tight">hello@neonnexus.gg</p>
              <p className="text-muted-foreground text-sm mt-0.5">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links - Enhanced */}
      <motion.div
        className="flex justify-center gap-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.url}
            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: 'hsla(222, 30%, 12%, 0.6)',
              border: '1px solid hsla(0, 0%, 100%, 0.05)',
            }}
            whileHover={{ 
              scale: 1.08,
              background: 'hsla(185, 100%, 50%, 0.1)',
              borderColor: 'hsla(185, 100%, 50%, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </motion.div>

      {/* Demo Disclaimer - Enhanced */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
          style={{
            background: 'hsla(222, 30%, 12%, 0.5)',
            border: '1px solid hsla(0, 0%, 100%, 0.05)',
          }}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ 
              opacity: [1, 0.4, 1],
              scale: [1, 0.9, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-muted-foreground text-xs tracking-wide">Demo App – For Presentation Only</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutScreen;