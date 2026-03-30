import React from 'react';
import { Button } from './ui/Button';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Domů' },
    { id: 'clinics', label: 'Kliniky' },
    { id: 'reservation', label: 'Rezervace' },
    { id: 'products', label: 'Produkty' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div 
          className="text-xl font-bold tracking-tighter text-slate-900 uppercase cursor-pointer"
          onClick={() => onPageChange('home')}
        >
          Centra preventivní medicíny
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "transition-colors pb-1 border-b-2",
                activePage === item.id 
                  ? "text-cyan-700 border-cyan-600" 
                  : "text-slate-600 border-transparent hover:text-cyan-600"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => onPageChange('reservation')}
          >
            Rezervovat
          </Button>
        </div>
      </div>
    </nav>
  );
};
