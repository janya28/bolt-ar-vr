import React, { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceViewer } from './ExperienceViewer';
import { experiences } from '../data/experiences';
import { Experience, ExperienceCategory } from '../types/experience';

export const ExperienceShowcase: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [filter, setFilter] = useState<ExperienceCategory | 'all'>('all');
  
  const filteredExperiences = experiences.filter(
    exp => filter === 'all' || exp.category === filter
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Immersive Experiences</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Explore our collection of handpicked AR and VR experiences designed to transport you to new realities.
        </p>
      </div>
      
      <div className="flex justify-center gap-4 py-4">
        <button 
          className={`px-4 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors ${filter === 'AR' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}
          onClick={() => setFilter('AR')}
        >
          AR
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors ${filter === 'VR' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}
          onClick={() => setFilter('VR')}
        >
          VR
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors ${filter === 'MR' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}
          onClick={() => setFilter('MR')}
        >
          Mixed
        </button>
      </div>
      
      {selectedExperience ? (
        <ExperienceViewer 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map(experience => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              onClick={() => setSelectedExperience(experience)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};