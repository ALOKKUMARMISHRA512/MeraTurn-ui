import { Home, Calendar, Clock, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Calendar, label: 'Bookings', path: '/bookings' },
  { icon: Clock, label: 'Queue', path: '/queue' },
  { icon: Bell, label: 'Alerts', path: '/notifications' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-t border-white/20 dark:border-slate-700/50 shadow-xl shadow-purple-500/5 dark:shadow-purple-500/10 z-50 md:hidden">
      <div className="flex justify-around items-center h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center flex-1 h-full"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all',
                  isActive && 'bg-gradient-to-br from-purple-500 to-blue-600'
                )}
              >
                <Icon className={cn(
                  'w-5 h-5 transition-colors',
                  isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                )} />
                <span className={cn(
                  'text-xs font-medium transition-colors',
                  isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                )}>
                  {item.label}
                </span>
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
