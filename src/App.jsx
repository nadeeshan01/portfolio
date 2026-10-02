import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PipelineVisualizer from './components/PipelineVisualizer';
import InfrastructureTopology from './components/InfrastructureTopology';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalSimulator from './components/TerminalSimulator';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToPipeline = () => {
    const el = document.getElementById('pipeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onRunPipeline={scrollToPipeline}
        />

        <PipelineVisualizer />
        
        <InfrastructureTopology />

        <ProjectsShowcase />

        <SkillsMatrix />

        <ExperienceTimeline />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Terminal Simulator */}
      <TerminalSimulator 
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ResumeModal 
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
