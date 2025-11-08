import React from 'react';
import type { Project } from '../../types';
import { PROJECTS } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

interface ProjectsSectionProps {
    onProjectClick: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => (
    <section id="projects" className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
            <SectionHeader title="Featured Projects" subtitle="A selection of my work. Click on any project to see the details." />
        </div>
        <div className="flex space-x-8 px-6 pb-8 horizontal-scroll">
            {PROJECTS.map(project => (
                <div key={project.id} className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] group" onClick={() => onProjectClick(project)}>
                    <div className="relative overflow-hidden rounded-lg cursor-pointer">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold font-space-grotesk">{project.title}</h3>
                            <p className="text-gray-300 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default ProjectsSection;
