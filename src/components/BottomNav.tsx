import { Home, Users, BookOpen } from 'lucide-react';
import type { MenuItem } from '../types';

interface BottomNavProps {
  activeMenu: MenuItem;
  onMenuClick: (menu: MenuItem) => void;
}

export default function BottomNav({ activeMenu, onMenuClick }: BottomNavProps) {
  const menuItems = [
    { id: 'home' as MenuItem, label: 'Home', icon: Home },
    { id: 'customer' as MenuItem, label: 'Customer', icon: Users },
    { id: 'knowledge' as MenuItem, label: 'Knowledge', icon: BookOpen },
  ];

  return (
    <nav className="bottom-nav">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeMenu === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={24} strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
