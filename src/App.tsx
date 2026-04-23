import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePageNew from './pages/HomePageNew';
import OrganizationPage from './pages/OrganizationPage';
import BookingPage from './pages/BookingPage';
import QueuePage from './pages/QueuePage';
import TokenPage from './pages/TokenPage';
import NotificationsPage from './pages/NotificationsPage';
import BookingsPage from './pages/BookingsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePageNew />} />
        <Route path="/organization/:id" element={<OrganizationPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
