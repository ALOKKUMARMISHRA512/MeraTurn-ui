import { motion } from 'framer-motion';
import { Hospital, Building2, School, Landmark, Building, Search, TrendingUp, Users, Clock as ClockIcon, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockOrganizations, mockBookings } from '@/data/mockData';

export default function HomePageNew() {
  const navigate = useNavigate();
  const upcomingBooking = mockBookings.find(b => b.status === 'upcoming');

  const categories = [
    { icon: Hospital, label: 'Hospitals', color: 'from-red-500 to-pink-500', count: 24 },
    { icon: Building2, label: 'Clinics', color: 'from-green-500 to-emerald-500', count: 18 },
    { icon: School, label: 'Schools', color: 'from-yellow-500 to-orange-500', count: 12 },
    { icon: Landmark, label: 'Government', color: 'from-purple-500 to-indigo-500', count: 8 },
    { icon: Building, label: 'Banks', color: 'from-blue-500 to-cyan-500', count: 15 },
  ];

  const getCrowdLevel = (wait: string) => {
    const mins = parseInt(wait);
    if (mins < 15) return { label: 'Low', color: 'from-green-500 to-emerald-500', dot: 'bg-green-500' };
    if (mins < 30) return { label: 'Medium', color: 'from-yellow-500 to-orange-500', dot: 'bg-yellow-500' };
    return { label: 'High', color: 'from-red-500 to-pink-500', dot: 'bg-red-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 pb-24">
      <Header showNotification notificationCount={2} />

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Premium Greeting Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Good Morning
            </span>
            <span className="ml-2">👋</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Find and book your appointments instantly</p>
        </motion.div>

        {/* Premium Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
              <Input
                type="text"
                placeholder="Search hospitals, clinics, banks..."
                className="pl-14 pr-4 h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-0 text-base rounded-3xl shadow-xl shadow-purple-500/10 focus:shadow-2xl focus:shadow-purple-500/20 transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Active Booking Card - Premium */}
        {upcomingBooking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => navigate('/queue')}
            className="mb-8 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 rounded-3xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 mb-3 px-4 py-1">
                    Active Booking
                  </Badge>
                  <h3 className="font-bold text-xl mb-1">{upcomingBooking.organizationName}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{upcomingBooking.service}</p>
                </div>
                <div className="text-right">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 px-5 py-3 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Token</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {upcomingBooking.tokenNumber}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <ClockIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{upcomingBooking.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">On track</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Premium Categories - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white">Categories</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 rounded-3xl w-40 shadow-xl hover:shadow-2xl transition-all">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-bold text-base mb-1 text-slate-900 dark:text-white">{category.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{category.count} nearby</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Featured Businesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Nearby Businesses</h2>
            <button className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
              See All
            </button>
          </div>

          <div className="space-y-4">
            {mockOrganizations.map((org, index) => {
              const crowd = getCrowdLevel(org.estimatedWait);
              
              return (
                <motion.div
                  key={org.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={() => navigate(`/organization/${org.id}`)}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-5 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                    <div className="flex gap-4 mb-4">
                      {/* Premium Business Image */}
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-violet-400 to-blue-500 rounded-2xl shadow-lg" />
                        <div className="absolute -top-2 -right-2">
                          <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Business Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1 truncate text-slate-900 dark:text-white">{org.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{org.rating}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">({org.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="truncate">{org.address}</span>
                        </div>
                        
                        {/* Status Indicators */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/50 px-3 py-1.5 rounded-full">
                            <div className={`w-2 h-2 rounded-full ${crowd.dot} animate-pulse`} />
                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{crowd.label}</span>
                          </div>
                          
                          <div className="flex items-center gap-1.5 bg-purple-100 dark:bg-purple-900/30 px-3 py-1.5 rounded-full">
                            <ClockIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">{org.estimatedWait}</span>
                          </div>
                          
                          <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{org.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Book Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full h-12 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative">Book Token</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
}
