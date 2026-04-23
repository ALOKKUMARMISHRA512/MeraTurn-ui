import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  onClick?: () => void;
}

export default function CategoryCard({ icon: Icon, label, color, onClick }: CategoryCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        onClick={onClick}
        className="p-4 text-center cursor-pointer hover:shadow-lg transition-all rounded-2xl border-0"
      >
        <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
      </Card>
    </motion.div>
  );
}
