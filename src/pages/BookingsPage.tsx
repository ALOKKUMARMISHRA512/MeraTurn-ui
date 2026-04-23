import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockBookings } from '@/data/mockData';

export default function BookingsPage() {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'active':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return Clock;
      case 'completed':
        return CheckCircle2;
      case 'cancelled':
        return XCircle;
      case 'active':
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');
  const completedBookings = mockBookings.filter(b => b.status === 'completed');
  const cancelledBookings = mockBookings.filter(b => b.status === 'cancelled');

  const BookingCard = ({ booking, index }: { booking: typeof mockBookings[0]; index: number }) => {
    const StatusIcon = getStatusIcon(booking.status);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Card
          onClick={() => booking.status === 'upcoming' && navigate('/queue')}
          className={`p-5 rounded-2xl border-0 ${
            booking.status === 'upcoming' ? 'cursor-pointer hover:shadow-xl' : ''
          } transition-all`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {booking.organizationName}
              </h3>
              <p className="text-sm text-gray-600">{booking.service}</p>
            </div>
            <Badge className={getStatusColor(booking.status)}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {booking.status}
            </Badge>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{booking.time}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500">Token Number</p>
              <p className="text-lg font-bold text-blue-600">{booking.tokenNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Fee</p>
              <p className="text-lg font-semibold text-gray-900">₹{booking.fee}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const EmptyState = ({ message }: { message: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Calendar className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings found</h3>
      <p className="text-gray-600">{message}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="My Bookings" showNotification />

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-white rounded-2xl p-1 shadow-sm">
            <TabsTrigger value="upcoming" className="rounded-xl">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="rounded-xl">
              Completed
            </TabsTrigger>
            <TabsTrigger value="cancelled" className="rounded-xl">
              Cancelled
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking, index) => (
                <BookingCard key={booking.id} booking={booking} index={index} />
              ))
            ) : (
              <EmptyState message="You don't have any upcoming appointments" />
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedBookings.length > 0 ? (
              completedBookings.map((booking, index) => (
                <BookingCard key={booking.id} booking={booking} index={index} />
              ))
            ) : (
              <EmptyState message="No completed appointments yet" />
            )}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {cancelledBookings.length > 0 ? (
              cancelledBookings.map((booking, index) => (
                <BookingCard key={booking.id} booking={booking} index={index} />
              ))
            ) : (
              <EmptyState message="No cancelled appointments" />
            )}
          </TabsContent>
        </Tabs>
      </div>

      <MobileNav />
    </div>
  );
}
