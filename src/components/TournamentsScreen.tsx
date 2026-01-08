import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Coins, ChevronRight, Swords, Target, Crosshair } from "lucide-react";

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
    gradient: "from-red-500 to-orange-500",
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
    gradient: "from-green-500 to-emerald-600",
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
    gradient: "from-yellow-500 to-amber-600",
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
    gradient: "from-neon-purple to-secondary",
  },
];

const TournamentsScreen = () => {
  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-gaming text-xl font-bold mb-2">Tournaments & Events</h1>
        <p className="text-muted-foreground text-sm">Compete, win prizes, become a legend</p>
      </motion.div>

      {/* Featured Tournament */}
      <motion.div
        className="mb-6 border-gradient-neon rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-card p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">Featured Event</span>
            </div>
            
            <h2 className="font-gaming text-xl font-bold mb-2">{tournaments[0].title}</h2>
            <p className="text-primary font-gaming text-sm mb-4">{tournaments[0].game}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <Coins className="w-5 h-5 mx-auto text-yellow-500 mb-1" />
                <p className="font-gaming text-lg font-bold">{tournaments[0].prizePool}</p>
                <p className="text-muted-foreground text-xs">Prize Pool</p>
              </div>
              <div className="text-center">
                <Calendar className="w-5 h-5 mx-auto text-primary mb-1" />
                <p className="font-gaming text-sm font-bold">{tournaments[0].date}</p>
                <p className="text-muted-foreground text-xs">{tournaments[0].time}</p>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 mx-auto text-secondary mb-1" />
                <p className="font-gaming text-lg font-bold">{tournaments[0].slots}</p>
                <p className="text-muted-foreground text-xs">Slots</p>
              </div>
            </div>

            <motion.button
              className="w-full btn-neon-primary font-gaming text-sm tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Upcoming Tournaments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-gaming text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Upcoming Events
        </h3>

        <div className="space-y-3">
          {tournaments.slice(1).map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="glass-panel p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tournament.gradient} p-[1px] flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <tournament.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary uppercase">{tournament.game}</span>
                    {tournament.status === "coming_soon" && (
                      <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">Coming Soon</span>
                    )}
                  </div>
                  <h4 className="font-gaming text-sm font-bold truncate">{tournament.title}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
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
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Host Your Tournament */}
      <motion.div
        className="mt-6 glass-panel p-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Trophy className="w-8 h-8 mx-auto text-secondary mb-2" />
        <p className="font-gaming text-sm font-bold mb-1">Want to host your tournament?</p>
        <p className="text-muted-foreground text-xs">Contact us to organize custom esports events</p>
      </motion.div>
    </div>
  );
};

export default TournamentsScreen;
