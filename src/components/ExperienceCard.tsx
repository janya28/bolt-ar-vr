import React from 'react';
import { Badge } from './ui/Badge';
import { GlassPane } from './ui/GlassPane';
import { Experience } from '../types/experience';
import { ArrowRight, Glasses, Smartphone, Headphones } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
  const getCategoryIcon = () => {
    switch (experience.category) {
      case 'AR': return <Smartphone className="w-4 h-4" />;
      case 'VR': return <Headphones className="w-4 h-4" />;
      case 'MR': return <Glasses className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
      onClick={onClick}
    >
      <GlassPane className="rounded-xl overflow-hidden h-full flex flex-col hover:border-purple-500/50 border border-transparent">
        <div className="relative">
          <img 
            src={experience.imageUrl} 
            alt={experience.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge>{experience.category}</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <button className="px-4 py-2 bg-purple-600 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
              Experience <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-sm text-slate-300">
            {getCategoryIcon()}
            <span>{experience.categoryName}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
          <p className="text-slate-300 text-sm mb-4 flex-1">{experience.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border border-slate-800" />
              ))}
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">+{experience.userCount - 3}</div>
            </div>
            <div className="text-sm text-slate-300">{experience.userCount} users</div>
          </div>
        </div>
      </GlassPane>
    </div>
  );
};