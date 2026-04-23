# 🚀 Quick Start Guide - MeraTurn

## Get Up and Running in 2 Minutes

### Step 1: Start the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Step 2: Navigate Through the App

1. **Landing Page** (`/`)
   - Click "Book Now" button

2. **Login Page** (`/login`)
   - Enter any 10-digit mobile number
   - Click "Send OTP"
   - Enter any 6 digits for OTP
   - Click "Verify & Continue"

3. **Home Dashboard** (`/home`)
   - Browse categories
   - View nearby organizations
   - Click on any organization card

4. **Organization Details** (`/organization/:id`)
   - View services and departments
   - Click "Join Queue"

5. **Booking Page** (`/booking/:id`)
   - Select department and service
   - Choose date and time slot
   - Enter patient details
   - Click "Confirm Booking"

6. **Token Page** (`/token`)
   - View your digital token
   - Click "Track Queue Status"

7. **Queue Tracking** (`/queue`)
   - See live queue progress
   - View estimated wait time

8. **Bottom Navigation**
   - Home - Dashboard
   - Bookings - View all appointments
   - Queue - Track current queue
   - Alerts - View notifications
   - Profile - User settings

## 📱 Mobile View

For best experience, open Chrome DevTools (F12) and toggle device toolbar (Ctrl+Shift+M) to view mobile layout.

## 🎨 Key Features to Explore

### Animations
- Smooth page transitions
- Card hover effects
- Progress bar animations
- Staggered list animations

### Interactive Elements
- Category cards
- Organization cards
- Time slot selection
- Queue progress tracker
- Notification list

### Status Indicators
- Booking status badges
- Queue position
- Wait time estimates
- Notification types

## 🎯 Mock Data

The app uses realistic dummy data:
- **Organizations**: Apollo Hospitals, City Health Clinic, HDFC Bank
- **Bookings**: 2 sample appointments
- **Queue**: Token A-18, 6 people ahead, 24 min wait
- **Notifications**: 4 sample alerts

## 🔧 Customization

### Change Colors
Edit `src/index.css` - look for CSS variables:
```css
--primary: oklch(0.205 0 0);
--background: oklch(1 0 0);
```

### Add More Organizations
Edit `src/data/mockData.ts`:
```typescript
export const mockOrganizations: Organization[] = [
  // Add your organizations here
];
```

### Modify Routes
Edit `src/App.tsx`:
```typescript
<Route path="/your-route" element={<YourPage />} />
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 5173
npx kill-port 5173
npm run dev
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm run dev
```

## 📦 Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

Build output will be in `dist/` folder.

## 🎬 Demo Flow

**Complete User Journey (2 minutes):**

1. Landing → Click "Book Now"
2. Login → Enter phone → Enter OTP
3. Home → Click "Apollo Hospitals"
4. Organization → Click "Join Queue"
5. Booking → Select service → Choose time → Enter details → Confirm
6. Token → View token → Click "Track Queue"
7. Queue → See live progress
8. Navigate → Use bottom tabs to explore

## 💡 Tips

- **Mobile First**: Design is optimized for mobile, but fully responsive
- **Smooth Animations**: All transitions use Framer Motion
- **Type Safety**: Full TypeScript support
- **Component Library**: Uses ShadCN UI components
- **Icons**: Lucide React for all icons
- **Routing**: React Router DOM for navigation

## 🎨 Design System

- **Spacing**: 4px base unit (Tailwind spacing scale)
- **Radius**: 2xl (1rem) for cards, xl (0.75rem) for buttons
- **Shadows**: Soft shadows for depth
- **Colors**: Blue primary, purple accent
- **Typography**: Geist Variable font
- **Animations**: 0.3s duration, ease-out timing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Next Steps

1. Explore all pages using bottom navigation
2. Try different booking flows
3. Check responsive design on different screen sizes
4. Review code structure in `src/` folder
5. Customize mock data for your use case

---

**Need Help?** Check `PROJECT_OVERVIEW.md` for detailed documentation.

**Ready to Deploy?** Run `npm run build` and deploy the `dist/` folder.
