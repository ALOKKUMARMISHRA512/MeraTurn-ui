import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, Bell } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockQueueStatus, mockBookings } from '@/data/mockData';

export default function QueuePage() {
  const activeBooking = mockBookings.find(b => b.status === 'upcoming');
  const queue = mockQueueStatus;
  const progress = ((parseInt(queue.currentToken.split('-')[1]) / parseInt(queue.yourToken.split('-')[1])) * 100);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Queue Status" showNotification />

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Alert */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl border-0">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6" />
              <div>
                <p className="font-semibold">Your turn is approaching!</p>
                <p className="text-sm opacity-90">Please be ready in 15 minutes</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Current Token Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 text-center rounded-3xl border-0 shadow-xl">
            <p className="text-gray-600 mb-2">Your Token Number</p>
            <div className="text-6xl font-bold text-blue-600 mb-4">{queue.yourToken}</div>
            <Badge className="bg-blue-100 text-blue-700 text-sm px-4 py-1">
              {activeBooking?.organizationName}
            </Badge>
          </Card>
        </motion.div>

        {/* Queue Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          <Card className="p-4 text-center rounded-2xl border-0">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{queue.currentToken}</p>
            <p className="text-xs text-gray-600 mt-1">Current</p>
          </Card>

          <Card className="p-4 text-center rounded-2xl border-0">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{queue.peopleAhead}</p>
            <p className="text-xs text-gray-600 mt-1">Ahead</p>
          </Card>

          <Card className="p-4 text-center rounded-2xl border-0">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{queue.estimatedWait}</p>
            <p className="text-xs text-gray-600 mt-1">Minutes</p>
          </Card>
        </motion.div>

        {/* Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 rounded-2xl border-0">
            <h3 className="font-semibold text-gray-900 mb-4">Queue Progress</h3>
            
            <div className="relative">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">Start</span>
                <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
                <span className="text-gray-600">Your Turn</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { token: 'A-12', status: 'current', label: 'Currently Serving' },
                { token: 'A-13', status: 'next', label: 'Next in Line' },
                { token: 'A-14', status: 'waiting', label: 'Waiting' },
                { token: 'A-15', status: 'waiting', label: 'Waiting' },
                { token: 'A-16', status: 'waiting', label: 'Waiting' },
                { token: 'A-17', status: 'waiting', label: 'Waiting' },
                { token: 'A-18', status: 'you', label: 'Your Turn' },
              ].map((item, index) => (
                <motion.div
                  key={item.token}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    item.status === 'you'
                      ? 'bg-blue-50 border-2 border-blue-600'
                      : item.status === 'current'
                      ? 'bg-green-50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      item.status === 'you'
                        ? 'bg-blue-600 text-white'
                        : item.status === 'current'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {item.token.split('-')[1]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.token}</p>
                    <p className="text-xs text-gray-600">{item.label}</p>
                  </div>
                  {item.status === 'you' && (
                    <Badge className="bg-blue-600 text-white">You</Badge>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Appointment Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 rounded-2xl border-0">
            <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service</span>
                <span className="font-medium">{activeBooking?.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">{activeBooking?.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time</span>
                <span className="font-medium">{activeBooking?.time}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-600">Fee</span>
                <span className="font-semibold text-blue-600">₹{activeBooking?.fee}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
}
