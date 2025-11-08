import React from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl glassmorphism rounded-xl p-8 border border-white/20 shadow-2xl shadow-white/10 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        
        <h2 className="text-3xl font-bold mb-2 font-space-grotesk text-white">{project.title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/10 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        
        <p className="text-gray-300 leading-relaxed">{project.details}</p>
      </div>
    </div>
  );
};

export default ProjectModal;