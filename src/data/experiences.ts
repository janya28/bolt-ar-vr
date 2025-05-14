import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Ocean Explorer',
    description: 'Dive deep into the ocean and discover the wonders of marine life in this immersive VR experience.',
    imageUrl: 'https://images.pexels.com/photos/1683492/pexels-photo-1683492.jpeg',
    category: 'VR',
    duration: 30,
    rating: 4.8,
    requiresHeadset: true,
    recommendedAge: '10+',
    createdAt: new Date('2023-06-15'),
    features: ['3D Audio', 'Hand Tracking', 'Multiplayer']
  },
  {
    id: '2',
    title: 'Urban Art Gallery',
    description: 'Transform your surroundings into an interactive art gallery with this AR application showcasing works from contemporary artists.',
    imageUrl: 'https://images.pexels.com/photos/1structured-data60754/pexels-photo-1160754.jpeg',
    category: 'AR',
    duration: 45,
    rating: 4.5,
    requiresHeadset: false,
    recommendedAge: '12+',
    createdAt: new Date('2023-08-22'),
    features: ['Location Tracking', 'Social Sharing', 'Artist Information']
  },
  {
    id: '3',
    title: 'Space Station Tour',
    description: 'Experience life aboard the International Space Station with this detailed VR simulation based on NASA footage.',
    imageUrl: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg',
    category: 'VR',
    duration: 60,
    rating: 4.9,
    requiresHeadset: true,
    recommendedAge: '8+',
    createdAt: new Date('2023-04-10'),
    features: ['Zero Gravity Simulation', 'Interactive Controls', 'Educational Content']
  },
  {
    id: '4',
    title: 'Historical Landmarks',
    description: 'Point your device at famous landmarks to reveal their history, architecture details, and interesting facts.',
    imageUrl: 'https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg',
    category: 'AR',
    duration: 20,
    rating: 4.3,
    requiresHeadset: false,
    recommendedAge: 'All ages',
    createdAt: new Date('2023-09-05'),
    features: ['Geo-location', 'Audio Narration', 'Historical Photos']
  },
  {
    id: '5',
    title: 'Mixed Reality Classroom',
    description: 'An educational platform that blends virtual objects with your real environment for interactive learning experiences.',
    imageUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
    category: 'MR',
    duration: 90,
    rating: 4.7,
    requiresHeadset: true,
    recommendedAge: '10+',
    createdAt: new Date('2023-07-18'),
    features: ['Real-time Collaboration', '3D Models', 'Interactive Quizzes']
  },
  {
    id: '6',
    title: 'Mountain Expedition',
    description: 'Scale the world\'s highest peaks from the comfort of your home with this breathtaking VR adventure.',
    imageUrl: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
    category: 'VR',
    duration: 45,
    rating: 4.6,
    requiresHeadset: true,
    recommendedAge: '12+',
    createdAt: new Date('2023-05-30'),
    features: ['Weather Simulation', 'Climbing Mechanics', 'Photorealistic Environments']
  }
];