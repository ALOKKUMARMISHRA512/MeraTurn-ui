# 📱 Pages Visual Guide

## Complete Page-by-Page Breakdown

### 1. Landing Page (`/`)

**Purpose**: First impression and conversion

**Sections**:
- 🎯 Hero Section
  - Badge: "Smart Queue Management"
  - Headline: "Skip the Wait. Join the Queue from Anywhere"
  - Description paragraph
  - Two CTAs: "Book Now" (primary) + "Learn More" (secondary)
  - Hero image with gradient background

- ✨ Features Section
  - 4 feature cards in grid
  - Icons: Clock, MapPin, Zap, Shield
  - Titles: Save Time, Find Nearby, Instant Booking, Secure

- 🚀 Final CTA
  - Gradient background (blue to purple)
  - "Ready to Skip the Line?"
  - "Get Started Free" button

**Colors**: Blue-50 background, white cards, blue-600 primary

---

### 2. Login Page (`/login`)

**Purpose**: User authentication

**Step 1 - Phone Input**:
- App icon (blue rounded square)
- "Welcome to MeraTurn" heading
- Country code selector (+91)
- Mobile number input
- "Send OTP" button
- Divider
- Social login buttons (Google, Facebook)
- Terms & Privacy links

**Step 2 - OTP Verification**:
- Same header
- 6 OTP input boxes
- "Resend OTP" link
- "Verify & Continue" button
- "Change phone number" link

**Colors**: White card on gradient background

---

### 3. Home Dashboard (`/home`)

**Purpose**: Main navigation hub

**Header**:
- "Welcome back! 👋" greeting
- Notification bell (with badge)

**Sections**:
- 🔍 Search Bar
  - Full-width with search icon
  - Placeholder: "Search hospitals, clinics, banks..."

- 📅 Upcoming Appointment Card (if exists)
  - Gradient background (blue to purple)
  - Organization name
  - Date and time
  - Token number in badge

- 🏥 Categories (5 cards in grid)
  - Hospitals (red)
  - Clinics (green)
  - Schools (yellow)
  - Government (purple)
  - Banks (blue)

- 📍 Nearby Organizations
  - Grid of organization cards
  - Each shows: image, name, rating, distance, wait time

- 🕐 Recently Visited
  - Horizontal list
  - Compact card format

**Bottom**: Mobile navigation (5 tabs)

---

### 4. Organization Details (`/organization/:id`)

**Purpose**: View organization info and services

**Sections**:
- 🖼️ Hero Image
  - Gradient placeholder
  - Type badge overlay

- ℹ️ Info Card
  - Organization name
  - Rating with stars
  - Address with icon
  - Estimated wait time
  - Distance
  - Call and Directions buttons

- 🏢 Departments
  - Grid of department cards
  - Status badges (Open/Closed)

- 💼 Services List
  - Service name
  - Duration
  - Fee (₹)

- 🎯 Sticky CTA
  - "Join Queue" button at bottom

---

### 5. Booking Page (`/booking/:id`)

**Purpose**: Multi-step booking flow

**Progress Indicator**:
- 3 steps with connecting lines
- Current step highlighted

**Step 1 - Select Service**:
- Department selection (radio cards)
- Service selection (with fee)
- "Continue" button

**Step 2 - Date & Time**:
- Date grid (6 dates)
- Time slot grid (10 slots)
- Available/unavailable states
- Back + Continue buttons

**Step 3 - Patient Details**:
- Form fields:
  - Patient name
  - Age
  - Mobile number
- Booking summary card:
  - Organization
  - Date & time
  - Service
  - Total fee
- Back + "Confirm Booking" buttons

---

### 6. Queue Tracking (`/queue`)

**Purpose**: Live queue status

**Sections**:
- 🔔 Alert Banner
  - Orange gradient
  - "Your turn is approaching!"

- 🎫 Token Display
  - Large centered token number
  - Organization badge

- 📊 Stats Grid (3 cards)
  - Current token (green)
  - People ahead (orange)
  - Estimated wait (blue)

- 📈 Progress Section
  - Progress bar with percentage
  - Timeline list showing:
    - Current token (green)
    - Next tokens (gray)
    - Your token (blue, highlighted)

- 📋 Appointment Details
  - Service, date, time, fee

**Bottom**: Mobile navigation

---

### 7. Digital Token (`/token`)

**Purpose**: Show booking confirmation

**Sections**:
- ✅ Success Animation
  - Green checkmark circle
  - "Booking Confirmed!" message

- 🎫 Token Card
  - QR code placeholder (SVG)
  - Large token number
  - "Show this at counter" text
  - Appointment details:
    - Organization
    - Date
    - Time
    - Service
    - Fee

- 🔽 Action Buttons
  - Download button
  - Share button

- 🎯 Track Queue CTA
  - Blue button
  - "Track Queue Status"

- ℹ️ Info Card
  - Blue background
  - Arrival instructions

---

### 8. Notifications (`/notifications`)

**Purpose**: View all alerts

**Sections**:
- 📬 New Notifications
  - Unread items with blue dot
  - Type-based icons and colors:
    - Booking: Green (CheckCircle2)
    - Reminder: Blue (Calendar)
    - Update: Purple (Bell)
    - Delay: Orange (AlertCircle)

- 📭 Earlier Notifications
  - Read items (slightly faded)
  - Same card format

**Empty State** (if no notifications):
- Bell icon
- "No notifications yet"
- Helpful message

**Bottom**: Mobile navigation

---

### 9. Bookings Management (`/bookings`)

**Purpose**: View all appointments

**Tabs** (3):
- Upcoming
- Completed
- Cancelled

**Booking Card** (for each):
- Organization name
- Service name
- Status badge (color-coded)
- Date and time
- Token number
- Fee
- Clickable (if upcoming)

**Empty State** (per tab):
- Calendar icon
- "No bookings found"
- Context-specific message

**Bottom**: Mobile navigation

---

### 10. User Profile (`/profile`)

**Purpose**: Account management

**Sections**:
- 👤 Profile Card
  - Avatar with initials
  - Name and mobile
  - Edit button
  - Stats row:
    - Total bookings
    - Completed
    - Total spent

- 📞 Contact Info
  - Phone with icon
  - Email with icon

- ⚙️ Menu Items (5 cards)
  - Saved Members (blue)
  - Appointment History (green)
  - Payment History (purple)
  - Settings (gray)
  - Help & Support (orange)
  - Each with icon, title, description, chevron

- 🚪 Logout
  - Red card
  - Logout icon and text

- 📱 App Version
  - Footer text

**Bottom**: Mobile navigation

---

## 🎨 Common Design Elements

### Cards
- Rounded: `rounded-2xl` (1rem)
- Shadow: Soft shadows
- Padding: `p-4` to `p-6`
- Background: White
- Border: None (border-0)

### Buttons
- Primary: Blue-600 background
- Rounded: `rounded-xl` (0.75rem)
- Height: `h-12` or `h-14`
- Hover: Darker shade + shadow

### Badges
- Rounded: `rounded-full` or `rounded-xl`
- Padding: `px-3 py-1`
- Colors: Type-specific (blue, green, red, etc.)

### Icons
- Size: `w-5 h-5` (standard)
- Source: Lucide React
- Color: Context-specific

### Typography
- Font: Geist Variable
- Headings: Bold, gray-900
- Body: Regular, gray-600
- Sizes: Tailwind scale

### Spacing
- Container: `px-4 py-6`
- Sections: `space-y-6`
- Cards: `gap-3` or `gap-4`

### Animations
- Entry: Fade + slide up
- Lists: Staggered delays
- Hover: Scale 1.05
- Duration: 0.3s - 0.5s

---

## 📱 Mobile Navigation

**Fixed Bottom Bar** (5 tabs):

1. **Home** 🏠
   - Icon: Home
   - Route: `/home`
   - Active: Blue-600

2. **Bookings** 📅
   - Icon: Calendar
   - Route: `/bookings`

3. **Queue** ⏱️
   - Icon: Clock
   - Route: `/queue`

4. **Alerts** 🔔
   - Icon: Bell
   - Route: `/notifications`

5. **Profile** 👤
   - Icon: User
   - Route: `/profile`

**Styling**:
- Height: 64px (h-16)
- Background: White
- Border-top: Gray-200
- Active: Blue-600 text
- Inactive: Gray-500 text

---

## 🎯 Interaction Patterns

### Cards
- Hover: Shadow increase + slight lift
- Click: Scale down (0.95)
- Transition: All properties

### Buttons
- Hover: Darker background
- Active: Scale down
- Disabled: Opacity 50%, no pointer

### Inputs
- Focus: Blue border
- Error: Red border
- Valid: Green border (optional)

### Lists
- Stagger: 0.1s delay per item
- Fade in: From left or top
- Smooth: Ease-out timing

---

## 🎨 Color Usage by Page

| Page | Primary Color | Accent |
|------|---------------|--------|
| Landing | Blue-600 | Purple-600 |
| Login | Blue-600 | White |
| Home | Blue-600 | Various |
| Organization | Blue-600 | Green |
| Booking | Blue-600 | Gray |
| Queue | Blue-600 | Orange |
| Token | Green-500 | Blue-600 |
| Notifications | Various | Blue-600 |
| Bookings | Blue-600 | Status colors |
| Profile | Blue-600 | Various |

---

## 📐 Layout Patterns

### Mobile (< 768px)
- Single column
- Full-width cards
- Bottom navigation
- Stacked elements

### Tablet (768px - 1024px)
- 2-column grids
- Wider cards
- Same navigation
- More spacing

### Desktop (> 1024px)
- 3-column grids
- Max-width containers
- Enhanced spacing
- Larger text

---

## 🎬 Animation Timing

- **Page entry**: 0.5s
- **Card hover**: 0.2s
- **Button click**: 0.15s
- **List stagger**: 0.1s per item
- **Progress bar**: 1s
- **Success animation**: 0.5s (spring)

---

## 💡 Pro Tips

1. **Mobile First**: All pages optimized for mobile
2. **Consistent Spacing**: 4px base unit
3. **Color Hierarchy**: Blue primary, status colors for context
4. **Icon Consistency**: Lucide React throughout
5. **Animation Subtlety**: Smooth, not distracting
6. **Type Safety**: Full TypeScript
7. **Component Reuse**: DRY principle
8. **Accessibility**: Semantic HTML
9. **Performance**: Lazy loading ready
10. **Scalability**: Easy to extend

---

**Total Pages**: 10
**Total Routes**: 11 (including 404)
**Total Components**: 15+
**Total Animations**: 50+

All pages are fully functional with mock data and ready for backend integration.
