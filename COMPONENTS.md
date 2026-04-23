# 🧩 Component Documentation

## Layout Components

### Header
**Location**: `src/components/layout/Header.tsx`

Sticky header with navigation and notifications.

**Props**:
- `title?: string` - Page title
- `showBack?: boolean` - Show back button
- `showNotification?: boolean` - Show notification bell
- `notificationCount?: number` - Unread notification count

**Usage**:
```tsx
<Header title="Home" showNotification notificationCount={2} />
<Header showBack title="Details" />
```

### MobileNav
**Location**: `src/components/layout/MobileNav.tsx`

Bottom navigation bar for mobile devices.

**Features**:
- 5 navigation items (Home, Bookings, Queue, Notifications, Profile)
- Active state highlighting
- Icon + label layout
- Fixed positioning

**Usage**:
```tsx
<MobileNav />
```

## Home Components

### SearchBar
**Location**: `src/components/home/SearchBar.tsx`

Search input with icon for finding organizations.

**Features**:
- Search icon
- Placeholder text
- Rounded design
- Focus states

**Usage**:
```tsx
<SearchBar />
```

### CategoryCard
**Location**: `src/components/home/CategoryCard.tsx`

Category selection card with icon and label.

**Props**:
- `icon: LucideIcon` - Icon component
- `label: string` - Category name
- `color: string` - Background color class
- `onClick?: () => void` - Click handler

**Usage**:
```tsx
<CategoryCard 
  icon={Hospital} 
  label="Hospitals" 
  color="bg-red-500"
  onClick={() => navigate('/hospitals')}
/>
```

### OrganizationCard
**Location**: `src/components/home/OrganizationCard.tsx`

Organization listing card with details.

**Props**:
- `organization: Organization` - Organization data
- `onClick?: () => void` - Click handler

**Features**:
- Image placeholder
- Type badge
- Rating display
- Distance indicator
- Wait time
- Hover animation

**Usage**:
```tsx
<OrganizationCard 
  organization={org}
  onClick={() => navigate(`/organization/${org.id}`)}
/>
```

## ShadCN UI Components

### Avatar
**Location**: `src/components/ui/avatar.tsx`

User avatar with fallback.

**Usage**:
```tsx
<Avatar>
  <AvatarFallback>RS</AvatarFallback>
</Avatar>
```

### Badge
**Location**: `src/components/ui/badge.tsx`

Status and category badges.

**Usage**:
```tsx
<Badge className="bg-blue-100 text-blue-700">
  Upcoming
</Badge>
```

### Button
**Location**: `src/components/ui/button.tsx`

Primary action button.

**Variants**:
- `default` - Primary blue button
- `outline` - Outlined button
- `ghost` - Transparent button

**Sizes**:
- `sm` - Small
- `default` - Medium
- `lg` - Large

**Usage**:
```tsx
<Button size="lg" onClick={handleClick}>
  Book Now
</Button>

<Button variant="outline">
  Cancel
</Button>
```

### Card
**Location**: `src/components/ui/card.tsx`

Container card component.

**Usage**:
```tsx
<Card className="p-6 rounded-2xl">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Dialog
**Location**: `src/components/ui/dialog.tsx`

Modal dialog component.

**Usage**:
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Input
**Location**: `src/components/ui/input.tsx`

Form input field.

**Usage**:
```tsx
<Input 
  type="text"
  placeholder="Enter name"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="h-12 rounded-xl"
/>
```

### Label
**Location**: `src/components/ui/label.tsx`

Form label component.

**Usage**:
```tsx
<Label htmlFor="name">Name</Label>
<Input id="name" />
```

### Tabs
**Location**: `src/components/ui/tabs.tsx`

Tabbed interface component.

**Usage**:
```tsx
<Tabs defaultValue="upcoming">
  <TabsList>
    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="upcoming">
    Content here
  </TabsContent>
</Tabs>
```

## Page Components

### LandingPage
**Route**: `/`

Hero section with features and CTA.

**Sections**:
- Hero with headline and CTA
- Feature cards (4 items)
- Final CTA section

### LoginPage
**Route**: `/login`

Two-step authentication flow.

**Steps**:
1. Phone number input
2. OTP verification

**Features**:
- Social login buttons
- Auto-focus OTP inputs
- Form validation

### HomePage
**Route**: `/home`

Main dashboard after login.

**Sections**:
- Welcome message
- Search bar
- Upcoming appointment card
- Categories (5 items)
- Nearby organizations
- Recently visited

### OrganizationPage
**Route**: `/organization/:id`

Organization details and services.

**Sections**:
- Hero image
- Organization info
- Contact buttons
- Departments list
- Services list
- Join Queue CTA

### BookingPage
**Route**: `/booking/:id`

Multi-step booking flow.

**Steps**:
1. Select department and service
2. Choose date and time slot
3. Enter patient details and confirm

**Features**:
- Progress indicator
- Step navigation
- Booking summary

### QueuePage
**Route**: `/queue`

Live queue tracking.

**Features**:
- Status alert
- Token display
- Queue statistics
- Progress timeline
- Appointment details

### TokenPage
**Route**: `/token`

Digital token display.

**Features**:
- Success animation
- QR code placeholder
- Token number
- Appointment details
- Download/Share buttons

### NotificationsPage
**Route**: `/notifications`

Notification list.

**Sections**:
- Unread notifications
- Read notifications
- Empty state

**Features**:
- Type-based icons
- Color-coded badges
- Timestamp display

### BookingsPage
**Route**: `/bookings`

Appointment management.

**Tabs**:
- Upcoming
- Completed
- Cancelled

**Features**:
- Status badges
- Booking cards
- Empty states

### ProfilePage
**Route**: `/profile`

User profile and settings.

**Sections**:
- Profile card with stats
- Contact information
- Menu items
- Logout button

## Animation Patterns

### Page Entry
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Staggered List
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Card
</motion.div>
```

### Progress Bar
```tsx
<motion.div
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 1 }}
  className="h-2 bg-blue-600"
/>
```

## Styling Patterns

### Card Style
```tsx
className="p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all"
```

### Button Style
```tsx
className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
```

### Badge Style
```tsx
className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
```

### Input Style
```tsx
className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
```

## Color Utilities

### Status Colors
```tsx
// Upcoming
className="bg-blue-100 text-blue-700"

// Completed
className="bg-green-100 text-green-700"

// Cancelled
className="bg-red-100 text-red-700"

// Active
className="bg-purple-100 text-purple-700"
```

### Category Colors
```tsx
// Hospital
className="bg-red-500"

// Clinic
className="bg-green-500"

// School
className="bg-yellow-500"

// Bank
className="bg-blue-500"

// Government
className="bg-purple-500"
```

## Icon Usage

All icons from Lucide React:

```tsx
import { 
  Home, Calendar, Clock, Bell, User,
  Hospital, Building2, School, Landmark,
  MapPin, Star, Phone, Navigation,
  CheckCircle2, XCircle, AlertCircle
} from 'lucide-react';

<Icon className="w-5 h-5 text-blue-600" />
```

## Responsive Patterns

### Mobile First
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
```

### Hide on Mobile
```tsx
className="hidden md:block"
```

### Mobile Only
```tsx
className="md:hidden"
```

### Container
```tsx
className="container mx-auto px-4 py-6"
```

## Best Practices

1. **Always use motion.div** for animated elements
2. **Add delay for staggered animations** using `delay: index * 0.1`
3. **Use rounded-2xl** for cards, rounded-xl for buttons
4. **Include hover states** on interactive elements
5. **Add transition-all** for smooth state changes
6. **Use flex/grid** for layouts
7. **Include empty states** for lists
8. **Add loading states** where applicable
9. **Use semantic HTML** elements
10. **Keep components small** and focused

---

For more details, check the source code in `src/components/` and `src/pages/`.
