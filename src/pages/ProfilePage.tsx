import { motion } from 'framer-motion';
import {
  Phone, Mail, Users, History, CreditCard,
  Settings, HelpCircle, LogOut, ChevronRight, Edit
} from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockUser, mockBookings } from '@/data/mockData';

export default function ProfilePage() {
  const completedBookings = mockBookings.filter(b => b.status === 'completed').length;
  const totalSpent = mockBookings.reduce((sum, b) => sum + b.fee, 0);

  const menuItems = [
    {
      icon: Users,
      label: 'Saved Members',
      description: 'Manage family members',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: History,
      label: 'Appointment History',
      description: `${completedBookings} completed`,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: CreditCard,
      label: 'Payment History',
      description: `₹${totalSpent} total spent`,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'App preferences',
      color: 'bg-gray-100 text-gray-600',
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'Get assistance',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Profile" showNotification />

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 rounded-3xl border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-semibold">
                  {mockUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{mockUser.name}</h2>
                <p className="text-gray-600">{mockUser.mobile}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Edit className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{mockBookings.length}</p>
                <p className="text-xs text-gray-600 mt-1">Total Bookings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{completedBookings}</p>
                <p className="text-xs text-gray-600 mt-1">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">₹{totalSpent}</p>
                <p className="text-xs text-gray-600 mt-1">Total Spent</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Contact Information
          </h3>
          <Card className="p-4 rounded-2xl border-0 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">{mockUser.mobile}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{mockUser.email}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Account
          </h3>
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <Card className="p-4 rounded-2xl border-0 cursor-pointer hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.label}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-4 rounded-2xl border-0 cursor-pointer hover:shadow-lg transition-all bg-red-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <LogOut className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-red-600">Logout</h4>
                <p className="text-sm text-red-600/70">Sign out of your account</p>
              </div>
              <ChevronRight className="w-5 h-5 text-red-400" />
            </div>
          </Card>
        </motion.div>

        {/* App Version */}
        <div className="text-center text-sm text-gray-500 pt-4">
          MeraTurn v1.0.0
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
