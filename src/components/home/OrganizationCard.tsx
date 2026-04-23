import { MapPin, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Organization } from '@/types';

interface OrganizationCardProps {
  organization: Organization;
  onClick?: () => void;
}

export default function OrganizationCard({ organization, onClick }: OrganizationCardProps) {
  const typeColors = {
    hospital: 'bg-red-100 text-red-700',
    clinic: 'bg-green-100 text-green-700',
    school: 'bg-yellow-100 text-yellow-700',
    bank: 'bg-blue-100 text-blue-700',
    government: 'bg-purple-100 text-purple-700',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        onClick={onClick}
        className="overflow-hidden cursor-pointer hover:shadow-xl transition-all rounded-2xl border-0"
      >
        <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 relative">
          <div className="absolute top-3 right-3">
            <Badge className={`${typeColors[organization.type]} capitalize`}>
              {organization.type}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{organization.name}</h3>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{organization.rating}</span>
              <span className="text-gray-400">({organization.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{organization.distance}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">Wait time:</span>
            <span className="font-medium text-blue-600">{organization.estimatedWait}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
