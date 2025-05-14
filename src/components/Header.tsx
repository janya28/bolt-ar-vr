import React from 'react';
import { GlassPane } from './ui/GlassPane';
import { Glasses } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <GlassPane>
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Glasses size={32} className="text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ImmersiveXP
            </h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#experiences" className="hover:text-purple-300 transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </GlassPane>
  );
};