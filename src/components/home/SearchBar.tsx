import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        placeholder="Search hospitals, clinics, banks..."
        className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-500 shadow-sm"
      />
    </div>
  );
}
