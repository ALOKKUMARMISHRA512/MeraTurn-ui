import { motion } from 'framer-motion';
import { Hospital, Building2, School, Landmark, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import SearchBar from '@/components/home/SearchBar';
import CategoryCard from '@/components/home/CategoryCard';
import OrganizationCard from '@/components/home/OrganizationCard';
import { Card } from '@/components/ui/card';
import { mockOrganizations, mockBookings } from '@/data/mockData';

export default function HomePage() {
  const navigate = useNavigate();
  const upcomingBooking = mockBookings.find(b => b.status === 'upcoming');

  const categories = [
    { icon: Hospital, label: 'Hospitals', color: 'bg-red-500' },
    { icon: Building2, label: 'Clinics', color: 'bg-green-500' },
    { icon: School, label: 'Schools', color: 'bg-yellow-500' },
    { icon: Landmark, label: 'Government', color: 'bg-purple-500' },
    { icon: Building, label: 'Banks', color: 'bg-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header showNotification notificationCount={2} />

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back! 👋</h1>
          <p className="text-gray-600">Find and book your appointments</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SearchBar />
        </motion.div>

        {/* Upcoming Appointment */}
        {upcomingBooking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              onClick={() => navigate('/queue')}
              className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer hover:shadow-xl transition-all rounded-2xl border-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">Upcoming Appointment</p>
                  <h3 className="font-semibold text-lg mb-1">{upcomingBooking.organizationName}</h3>
                  <p className="text-sm opacity-90">
                    {upcomingBooking.date} • {upcomingBooking.time}
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <p className="text-xs opacity-90">Token</p>
                    <p className="text-2xl font-bold">{upcomingBooking.tokenNumber}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Nearby Organizations</h2>
            <button className="text-sm text-blue-600 font-medium">See All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockOrganizations.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <OrganizationCard
                  organization={org}
                  onClick={() => navigate(`/organization/${org.id}`)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recently Visited */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recently Visited</h2>
          <div className="space-y-3">
            {mockOrganizations.slice(0, 2).map((org) => (
              <Card
                key={org.id}
                onClick={() => navigate(`/organization/${org.id}`)}
                className="p-4 cursor-pointer hover:shadow-lg transition-all rounded-2xl border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">{org.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{org.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Wait time</p>
                    <p className="text-sm font-semibold text-blue-600">{org.estimatedWait}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
}
