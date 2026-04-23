import { motion } from 'framer-motion';
import { Bell, CheckCircle2, Clock, AlertCircle, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Card } from '@/components/ui/card';
import { mockNotifications } from '@/data/mockData';

export default function NotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return CheckCircle2;
      case 'reminder':
        return Calendar;
      case 'update':
        return Bell;
      case 'delay':
        return AlertCircle;
      default:
        return Bell;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'bg-green-100 text-green-600';
      case 'reminder':
        return 'bg-blue-100 text-blue-600';
      case 'update':
        return 'bg-purple-100 text-purple-600';
      case 'delay':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Notifications" />

      <div className="container mx-auto px-4 py-6">
        {/* Unread Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            New
          </h2>
          <div className="space-y-3">
            {mockNotifications
              .filter(n => !n.read)
              .map((notification, index) => {
                const Icon = getIcon(notification.type);
                const colorClass = getColor(notification.type);

                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-4 rounded-2xl border-0 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Read Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Earlier
          </h2>
          <div className="space-y-3">
            {mockNotifications
              .filter(n => n.read)
              .map((notification, index) => {
                const Icon = getIcon(notification.type);
                const colorClass = getColor(notification.type);

                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="p-4 rounded-2xl border-0 opacity-60 hover:opacity-100 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Empty State (if no notifications) */}
        {mockNotifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-gray-600">We'll notify you when something important happens</p>
          </motion.div>
        )}
      </div>

      <MobileNav />
    </div>
  );
}
