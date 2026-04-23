import type { Organization, Booking, Notification, User, QueueStatus } from '@/types';

export const mockUser: User = {
  name: 'Rahul Sharma',
  mobile: '+91 98765 43210',
  email: 'rahul.sharma@email.com',
};

export const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Apollo Hospitals',
    type: 'hospital',
    rating: 4.8,
    reviews: 1250,
    address: 'Jubilee Hills, Hyderabad',
    distance: '2.3 km',
    estimatedWait: '25 mins',
    image: '/placeholder-hospital.jpg',
    departments: [
      { id: 'd1', name: 'General Medicine', available: true },
      { id: 'd2', name: 'Cardiology', available: true },
      { id: 'd3', name: 'Orthopedics', available: false },
    ],
    services: [
      { id: 's1', name: 'General Consultation', fee: 500, duration: '15 mins', departmentId: 'd1' },
      { id: 's2', name: 'ECG Test', fee: 800, duration: '20 mins', departmentId: 'd2' },
    ],
  },
  {
    id: '2',
    name: 'City Health Clinic',
    type: 'clinic',
    rating: 4.5,
    reviews: 680,
    address: 'Banjara Hills, Hyderabad',
    distance: '1.8 km',
    estimatedWait: '15 mins',
    image: '/placeholder-clinic.jpg',
    departments: [
      { id: 'd4', name: 'General Practice', available: true },
    ],
    services: [
      { id: 's3', name: 'Health Checkup', fee: 300, duration: '10 mins', departmentId: 'd4' },
    ],
  },
  {
    id: '3',
    name: 'HDFC Bank',
    type: 'bank',
    rating: 4.3,
    reviews: 420,
    address: 'Madhapur, Hyderabad',
    distance: '3.5 km',
    estimatedWait: '30 mins',
    image: '/placeholder-bank.jpg',
    departments: [
      { id: 'd5', name: 'Customer Service', available: true },
      { id: 'd6', name: 'Loan Department', available: true },
    ],
    services: [
      { id: 's4', name: 'Account Opening', fee: 0, duration: '20 mins', departmentId: 'd5' },
      { id: 's5', name: 'Loan Inquiry', fee: 0, duration: '15 mins', departmentId: 'd6' },
    ],
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    organizationId: '1',
    organizationName: 'Apollo Hospitals',
    service: 'General Consultation',
    date: '2026-04-25',
    time: '10:30 AM',
    tokenNumber: 'A-18',
    status: 'upcoming',
    fee: 500,
  },
  {
    id: 'b2',
    organizationId: '2',
    organizationName: 'City Health Clinic',
    service: 'Health Checkup',
    date: '2026-04-20',
    time: '02:00 PM',
    tokenNumber: 'B-05',
    status: 'completed',
    fee: 300,
  },
];

export const mockQueueStatus: QueueStatus = {
  currentToken: 'A-12',
  yourToken: 'A-18',
  peopleAhead: 6,
  estimatedWait: 24,
  status: 'waiting',
};

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'booking',
    title: 'Booking Confirmed',
    message: 'Your appointment at Apollo Hospitals is confirmed for Apr 25, 10:30 AM',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'reminder',
    title: 'Appointment Reminder',
    message: 'Your appointment is tomorrow at 10:30 AM',
    time: '1 day ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'update',
    title: 'Queue Update',
    message: 'Only 3 people ahead of you now',
    time: '3 hours ago',
    read: true,
  },
  {
    id: 'n4',
    type: 'delay',
    title: 'Delay Alert',
    message: 'Expected wait time increased by 10 minutes',
    time: '5 hours ago',
    read: true,
  },
];

export const mockTimeSlots = [
  { id: 't1', time: '09:00 AM', available: true },
  { id: 't2', time: '09:30 AM', available: true },
  { id: 't3', time: '10:00 AM', available: false },
  { id: 't4', time: '10:30 AM', available: true },
  { id: 't5', time: '11:00 AM', available: true },
  { id: 't6', time: '11:30 AM', available: false },
  { id: 't7', time: '02:00 PM', available: true },
  { id: 't8', time: '02:30 PM', available: true },
  { id: 't9', time: '03:00 PM', available: true },
  { id: 't10', time: '03:30 PM', available: true },
];
