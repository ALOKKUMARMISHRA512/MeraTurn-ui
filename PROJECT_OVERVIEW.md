# MeraTurn - Digital Queue Management Platform

## 🎯 Project Overview

MeraTurn is a modern, premium frontend UI for a smart digital queue management platform that allows users to avoid waiting in physical lines at hospitals, clinics, schools, colleges, banks, and public service centers.

## ✨ Features

### User Flow
1. **Landing Page** - Hero section with compelling CTA
2. **Authentication** - Mobile OTP-based login with social login options
3. **Home Dashboard** - Search, categories, nearby organizations, and upcoming appointments
4. **Organization Details** - Ratings, services, departments, and estimated wait times
5. **Booking System** - Multi-step booking with service selection, date/time slots, and patient details
6. **Queue Tracking** - Real-time queue status with animated progress indicators
7. **Digital Token** - QR code and token display with download/share options
8. **Notifications** - Booking confirmations, reminders, and queue updates
9. **Bookings Management** - View upcoming, completed, and cancelled appointments
10. **User Profile** - Personal info, booking history, and settings

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **ShadCN UI** - Premium component library (Nova preset)
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # ShadCN UI components
│   ├── layout/          # Layout components (Header, MobileNav)
│   └── home/            # Home page specific components
├── pages/               # All page components
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── HomePage.tsx
│   ├── OrganizationPage.tsx
│   ├── BookingPage.tsx
│   ├── QueuePage.tsx
│   ├── TokenPage.tsx
│   ├── NotificationsPage.tsx
│   ├── BookingsPage.tsx
│   └── ProfilePage.tsx
├── data/                # Mock data
│   └── mockData.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── lib/                 # Utility functions
│   └── utils.ts
├── App.tsx              # Main app with routing
└── main.tsx             # Entry point
```

## 🎨 Design Features

- **Clean Healthcare-Inspired Interface** - Professional and trustworthy design
- **Soft Shadows & Rounded Corners** - Modern card-based layouts with 2xl radius
- **Minimal Premium Design** - White background with subtle blue accents
- **Mobile-First Responsive** - Optimized for all screen sizes
- **Smooth Transitions** - Framer Motion animations throughout
- **Micro Interactions** - Hover effects and animated cards
- **Elegant Typography** - Geist Variable font for modern look
- **Loading Skeletons** - Ready for implementation
- **Status Badges** - Color-coded status indicators
- **Progress Bars** - Visual queue progress tracking
- **Empty States** - Thoughtful empty state designs
- **Glassmorphism** - Subtle glass effects in key areas

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Hero section with CTA |
| `/login` | Login | Mobile OTP authentication |
| `/home` | Home | Dashboard with search and categories |
| `/organization/:id` | Organization | Details and services |
| `/booking/:id` | Booking | Multi-step booking flow |
| `/queue` | Queue | Live queue tracking |
| `/token` | Token | Digital token with QR code |
| `/notifications` | Notifications | Alerts and updates |
| `/bookings` | Bookings | Appointment management |
| `/profile` | Profile | User profile and settings |

## 🎭 Mock Data

The application uses realistic mock data for demonstration:
- 3 sample organizations (Hospital, Clinic, Bank)
- 2 sample bookings (upcoming and completed)
- 4 sample notifications
- Queue status with live tracking
- 10 time slots for booking

## 🎯 Key Components

### Layout Components
- **Header** - Sticky header with back button and notifications
- **MobileNav** - Bottom navigation for mobile devices

### Home Components
- **SearchBar** - Search organizations
- **CategoryCard** - Service category cards
- **OrganizationCard** - Organization listing cards

### Reusable UI Components (ShadCN)
- Avatar, Badge, Button, Card, Dialog
- Dropdown Menu, Input, Label, Table, Tabs

## 🎨 Color Scheme

- **Primary Blue**: `#2563eb` (blue-600)
- **Purple Accent**: `#9333ea` (purple-600)
- **Success Green**: `#16a34a` (green-600)
- **Warning Orange**: `#ea580c` (orange-600)
- **Error Red**: `#dc2626` (red-600)
- **Background**: White with gray-50 sections
- **Text**: gray-900 for primary, gray-600 for secondary

## 📊 Status Indicators

- **Upcoming** - Blue badge
- **Active** - Purple badge
- **Completed** - Green badge
- **Cancelled** - Red badge

## 🔔 Notification Types

- **Booking** - Green icon (CheckCircle2)
- **Reminder** - Blue icon (Calendar)
- **Update** - Purple icon (Bell)
- **Delay** - Orange icon (AlertCircle)

## 🎬 Animations

All pages feature:
- Fade-in animations on mount
- Staggered list animations
- Hover scale effects on cards
- Smooth page transitions
- Progress bar animations
- Micro-interactions on buttons

## 📱 Mobile Navigation

Bottom tab bar with 5 sections:
1. Home - Dashboard
2. Bookings - Appointment list
3. Queue - Live tracking
4. Alerts - Notifications
5. Profile - User settings

## 🎯 Production Ready

This is a complete frontend prototype ready for:
- Investor presentations
- Business partner demos
- User testing
- Design handoff
- Backend integration

## 🔮 Future Enhancements

- Backend API integration
- Real-time WebSocket for queue updates
- Push notifications
- Payment gateway integration
- Multi-language support
- Dark mode
- Accessibility improvements
- PWA capabilities

## 📄 License

This is a frontend prototype for demonstration purposes.

## 👨‍💻 Development Notes

- All data is static/mock - no backend required
- No API calls - pure frontend
- Fully responsive design
- TypeScript for type safety
- Component-based architecture
- Clean code structure
- Production-grade UI/UX

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
