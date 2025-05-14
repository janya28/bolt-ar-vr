import React from 'react';
import { Experience } from '../types/experience';
import { X, ChevronLeft, ChevronRight, Users, Share2, BookmarkPlus } from 'lucide-react';
import { Badge } from './ui/Badge';

interface ExperienceViewerProps {
  experience: Experience;
  onClose: () => void;
}

export const ExperienceViewer: React.FC<ExperienceViewerProps> = ({ experience, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold">{experience.title}</h2>
          <Badge>{experience.category}</Badge>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <BookmarkPlus size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute inset-y-0 left-4 flex items-center">
          <button className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors">
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="w-full max-w-5xl aspect-video relative">
          <img 
            src={experience.imageUrl} 
            alt={experience.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 backdrop-blur-md bg-black/40 rounded-2xl max-w-xl text-center transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Experience in View Mode</h3>
              <p className="mb-6">
                In a fully functional AR/VR application, interactive 3D content would be displayed here.
                This showcase demonstrates the UI for an immersive content platform.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:opacity-90 transition-opacity">
                Interact with Experience
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-slate-400" />
              <span className="text-slate-300">{experience.userCount} users experienced this</span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Try Experience
              </button>
            </div>
          </div>
          <p className="text-slate-300">{experience.longDescription}</p>
        </div>
      </div>
    </div>
  );
};