import { motion } from 'framer-motion';
import { Download, Share2, MapPin, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { mockBookings } from '@/data/mockData';

export default function TokenPage() {
  const navigate = useNavigate();
  const booking = mockBookings[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header showBack title="Digital Token" />

      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Success Message */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">Your token has been generated successfully</p>
          </div>

          {/* Token Card */}
          <Card className="p-8 rounded-3xl border-0 shadow-2xl mb-6">
            {/* QR Code Placeholder */}
            <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-300 mb-6">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-inner flex items-center justify-center">
                    <svg className="w-40 h-40" viewBox="0 0 100 100">
                      <rect width="100" height="100" fill="white"/>
                      <g fill="black">
                        <rect x="0" y="0" width="7" height="7"/>
                        <rect x="14" y="0" width="7" height="7"/>
                        <rect x="28" y="0" width="7" height="7"/>
                        <rect x="0" y="14" width="7" height="7"/>
                        <rect x="28" y="14" width="7" height="7"/>
                        <rect x="0" y="28" width="7" height="7"/>
                        <rect x="14" y="28" width="7" height="7"/>
                        <rect x="28" y="28" width="7" height="7"/>
                        <rect x="65" y="0" width="7" height="7"/>
                        <rect x="79" y="0" width="7" height="7"/>
                        <rect x="93" y="0" width="7" height="7"/>
                        <rect x="65" y="14" width="7" height="7"/>
                        <rect x="93" y="14" width="7" height="7"/>
                        <rect x="65" y="28" width="7" height="7"/>
                        <rect x="79" y="28" width="7" height="7"/>
                        <rect x="93" y="28" width="7" height="7"/>
                        <rect x="0" y="65" width="7" height="7"/>
                        <rect x="14" y="65" width="7" height="7"/>
                        <rect x="28" y="65" width="7" height="7"/>
                        <rect x="0" y="79" width="7" height="7"/>
                        <rect x="28" y="79" width="7" height="7"/>
                        <rect x="0" y="93" width="7" height="7"/>
                        <rect x="14" y="93" width="7" height="7"/>
                        <rect x="28" y="93" width="7" height="7"/>
                      </g>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Scan at the venue</p>
                </div>
              </div>
            </div>

            {/* Token Number */}
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">Your Token Number</p>
              <div className="text-5xl font-bold text-blue-600 mb-2">{booking.tokenNumber}</div>
              <p className="text-sm text-gray-500">Show this at the counter</p>
            </div>

            {/* Appointment Details */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Organization</p>
                  <p className="font-semibold text-gray-900">{booking.organizationName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold text-gray-900">{booking.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-semibold text-gray-900">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-gray-200">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Service</p>
                  <p className="font-semibold text-gray-900">{booking.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Fee</p>
                  <p className="text-xl font-bold text-blue-600">₹{booking.fee}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" className="h-12 rounded-xl">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="h-12 rounded-xl">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>

          {/* Track Queue Button */}
          <Button
            onClick={() => navigate('/queue')}
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-semibold"
          >
            Track Queue Status
          </Button>

          {/* Info Message */}
          <Card className="mt-6 p-4 bg-blue-50 rounded-2xl border-0">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Note:</span> Please arrive 10 minutes before your scheduled time. 
              You'll receive notifications when your turn approaches.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
