import React from 'react';
import { GlassPane } from './ui/GlassPane';
import { Glasses, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <GlassPane>
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Glasses size={24} className="text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ImmersiveXP
            </span>
          </div>
          
          <div className="text-sm text-slate-400 text-center md:text-left">
            © 2025 ImmersiveXP. A showcase of AR/VR experiences.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </GlassPane>
  );
};