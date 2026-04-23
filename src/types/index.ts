// Type definitions for the application

export interface Organization {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'school' | 'bank' | 'government';
  rating: number;
  reviews: number;
  address: string;
  distance: string;
  estimatedWait: string;
  image: string;
  departments: Department[];
  services: Service[];
}

export interface Department {
  id: string;
  name: string;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  fee: number;
  duration: string;
  departmentId: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  organizationId: string;
  organizationName: string;
  service: string;
  date: string;
  time: string;
  tokenNumber: string;
  status: 'upcoming' | 'completed' | 'cancelled' | 'active';
  fee: number;
}

export interface QueueStatus {
  currentToken: string;
  yourToken: string;
  peopleAhead: number;
  estimatedWait: number;
  status: 'waiting' | 'approaching' | 'ready';
}

export interface Notification {
  id: string;
  type: 'booking' | 'reminder' | 'update' | 'delay';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface User {
  name: string;
  mobile: string;
  email: string;
  avatar?: string;
}
