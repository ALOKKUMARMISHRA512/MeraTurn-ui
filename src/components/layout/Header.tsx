import { ArrowLeft, Bell, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
}

export default function Header({ 
  title, 
  showBack = false, 
  showNotification = false,
  notificationCount = 0 
}: HeaderProps) {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 shadow-xl shadow-purple-500/5 dark:shadow-purple-500/10 z-40">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-purple-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          {title && <h1 className="text-lg font-semibold">{title}</h1>}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-purple-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {showNotification && (
            <button
              onClick={() => navigate('/notifications')}
              className="relative p-2 hover:bg-purple-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  {notificationCount}
                </Badge>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
