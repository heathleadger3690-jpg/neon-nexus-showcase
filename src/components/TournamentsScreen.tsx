import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Coins, ChevronRight, Swords, Target, Crosshair } from "lucide-react";
import tournamentsBg from "@/assets/tournaments-bg.jpg";
import gameValorant from "@/assets/game-valorant.jpg";
import gameFifa from "@/assets/game-fifa.jpg";
import gameBgmi from "@/assets/game-bgmi.jpg";
import gameTekken from "@/assets/game-tekken.jpg";

const tournaments = [
  {
    id: 1,
    game: "VALORANT",
    title: "Neon Nexus Showdown",
    date: "Jan 15, 2026",
    time: "6:00 PM",
    prizePool: "₹25,000",
    slots: "32/64",
    status: "registering",
    icon: Crosshair,
    image: gameValorant,
    gradient: "from-red-500 to-orange-500",
    glowColor: "hsla(0, 84%, 60%, 0.15)",
  },
  {
    id: 2,
    game: "FIFA 24",
    title: "Football Masters Cup",
    date: "Jan 20, 2026",
    time: "4:00 PM",
    prizePool: "₹15,000",
    slots: "16/32",
    status: "registering",
    icon: Target,
    image: gameFifa,
    gradient: "from-green-500 to-emerald-600",
    glowColor: "hsla(142, 76%, 36%, 0.15)",
  },
  {
    id: 3,
    game: "BGMI",
    title: "Battle Royale Clash",
    date: "Jan 28, 2026",
    time: "7:00 PM",
    prizePool: "₹50,000",
    slots: "0/100",
    status: "coming_soon",
    icon: Swords,
    image: gameBgmi,
    gradient: "from-yellow-500 to-amber-600",
    glowColor: "hsla(45, 93%, 47%, 0.15)",
  },
  {
    id: 4,
    game: "TEKKEN 8",
    title: "Iron Fist Championship",
    date: "Feb 5, 2026",
    time: "5:00 PM",
    prizePool: "₹10,000",
    slots: "0/16",
    status: "coming_soon",
    icon: Swords,
    image: gameTekken,
    gradient: "from-neon-purple to-secondary",
    glowColor: "hsla(270, 91%, 65%, 0.15)",
  },
];

const TournamentsScreen = () => {
  return (
    <div className="min-h-screen pb-28 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={tournamentsBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-70" />
      </div>
      
      <div className="relative z-10 px-4 pt-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-gaming text-2xl font-black mb-2 tracking-tight">Tournaments & Events</h1>
          <p className="text-muted-foreground text-sm tracking-wide">Compete, win prizes, become a legend</p>
        </motion.div>

        {/* Featured Tournament - Enhanced with Image */}
        <motion.div
          className="mb-8 border-gradient-neon rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative overflow-hidden">
            {/* Featured Game Image */}
            <div className="absolute inset-0">
              <img 
                src={tournaments[0].image} 
                alt={tournaments[0].game}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            </div>
            
            <div className="p-6 relative z-10">
              {/* Ambient glow */}
              <motion.div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_hsla(45,93%,47%,0.5)]" />
                  <span className="text-yellow-500 text-sm font-semibold uppercase tracking-widest">Featured Event</span>
                </div>
                
                <h2 className="font-gaming text-2xl font-black mb-2 tracking-tight">{tournaments[0].title}</h2>
                <p className="text-primary font-gaming text-sm mb-5 tracking-wide">{tournaments[0].game}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center glass-panel p-3">
                    <Coins className="w-5 h-5 mx-auto text-yellow-500 mb-2 drop-shadow-[0_0_6px_hsla(45,93%,47%,0.4)]" />
                    <p className="font-gaming text-lg font-bold">{tournaments[0].prizePool}</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Prize Pool</p>
                  </div>
                  <div className="text-center glass-panel p-3">
                    <Calendar className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="font-gaming text-sm font-bold">{tournaments[0].date}</p>
                    <p className="text-muted-foreground text-xs">{tournaments[0].time}</p>
                  </div>
                  <div className="text-center glass-panel p-3">
                    <Users className="w-5 h-5 mx-auto text-secondary mb-2" />
                    <p className="font-gaming text-lg font-bold">{tournaments[0].slots}</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Slots</p>
                  </div>
                </div>

                <motion.button
                  className="w-full btn-neon-primary font-gaming text-sm tracking-widest"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Tournaments - Enhanced with Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-heading">Upcoming Events</h3>

          <div className="space-y-3">
            {tournaments.slice(1).map((tournament, index) => (
              <motion.div
                key={tournament.id}
                className="glass-panel overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <div className="flex relative">
                  {/* Game Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img 
                      src={tournament.image} 
                      alt={tournament.game}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient fade to card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card" />
                    {/* Colored overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tournament.gradient} opacity-20 mix-blend-overlay`} />
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 flex-1 relative">
                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at left center, ${tournament.glowColor} 0%, transparent 50%)` }}
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{tournament.game}</span>
                        {tournament.status === "coming_soon" && (
                          <span 
                            className="text-[10px] px-2 py-0.5 rounded-full text-muted-foreground uppercase tracking-wider"
                            style={{
                              background: 'hsla(222, 30%, 15%, 0.8)',
                              border: '1px solid hsla(0, 0%, 100%, 0.05)',
                            }}
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h4 className="font-gaming text-sm font-bold truncate tracking-tight">{tournament.title}</h4>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {tournament.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Coins className="w-3 h-3 text-yellow-500" />
                          {tournament.prizePool}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <ChevronRight className="w-5 h-5 text-muted-foreground relative z-10 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Host Your Tournament - Enhanced */}
        <motion.div
          className="mt-8 glass-panel p-6 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Subtle glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, hsla(270, 91%, 65%, 0.08) 0%, transparent 70%)',
            }}
          />
          
          <div className="relative z-10">
            <Trophy className="w-10 h-10 mx-auto text-secondary mb-3 drop-shadow-[0_0_10px_hsla(270,91%,65%,0.4)]" />
            <p className="font-gaming text-base font-bold mb-1.5 tracking-tight">Want to host your tournament?</p>
            <p className="text-muted-foreground text-sm">Contact us to organize custom esports events</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TournamentsScreen;
