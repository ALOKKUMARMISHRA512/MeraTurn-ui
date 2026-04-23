import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Phone, Navigation } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockOrganizations } from '@/data/mockData';

export default function OrganizationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const organization = mockOrganizations.find(org => org.id === id);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack title="Organization Details" />

      {/* Hero Image */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative">
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
            {organization.type.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 rounded-3xl shadow-xl border-0 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{organization.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{organization.rating}</span>
                <span className="text-gray-500">({organization.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{organization.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>Estimated wait time: <span className="font-semibold text-blue-600">{organization.estimatedWait}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>{organization.distance} away</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1 rounded-xl">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" className="flex-1 rounded-xl">
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Departments</h2>
          <div className="grid grid-cols-2 gap-3">
            {organization.departments.map((dept) => (
              <Card
                key={dept.id}
                className={`p-4 rounded-2xl border-0 ${
                  dept.available ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${dept.available ? 'text-gray-900' : 'text-gray-400'}`}>
                    {dept.name}
                  </span>
                  <Badge className={dept.available ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}>
                    {dept.available ? 'Open' : 'Closed'}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Services</h2>
          <div className="space-y-3">
            {organization.services.map((service) => (
              <Card key={service.id} className="p-4 rounded-2xl border-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-lg font-bold text-blue-600">₹{service.fee}</span>
                </div>
                <p className="text-sm text-gray-600">Duration: {service.duration}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Join Queue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sticky bottom-4"
        >
          <Button
            onClick={() => navigate(`/booking/${organization.id}`)}
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-semibold shadow-lg"
          >
            Join Queue
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
