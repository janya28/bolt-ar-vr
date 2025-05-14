import React from 'react';
import { Header } from './components/Header';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ExperienceShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;