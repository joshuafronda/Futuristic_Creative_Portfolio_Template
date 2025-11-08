
import type { Project, Skill, Experience, Testimonial } from './types';
import CodeIcon from './components/icons/CodeIcon';
import DesignIcon from './components/icons/DesignIcon';
import ReactIcon from './components/icons/ReactIcon';
import FigmaIcon from './components/icons/FigmaIcon';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const ROLES = ['Frontend Developer', 'Digital Designer', '3D Explorer'];

export const DEV_SKILLS: Skill[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: CodeIcon },
  { name: 'Next.js', icon: CodeIcon },
  { name: 'Three.js', icon: CodeIcon },
  { name: 'Node.js', icon: CodeIcon },
  { name: 'Tailwind CSS', icon: DesignIcon },
  { name: 'GraphQL', icon: CodeIcon },
  { name: 'WebSockets', icon: CodeIcon },
];

export const DESIGN_SKILLS: Skill[] = [
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Adobe XD', icon: DesignIcon },
  { name: 'Spline', icon: DesignIcon },
  { name: 'Blender', icon: DesignIcon },
  { name: 'UI/UX Design', icon: DesignIcon },
  { name: 'Prototyping', icon: DesignIcon },
  { name: 'Motion Design', icon: DesignIcon },
  { name: 'Photoshop', icon: DesignIcon },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project Cyberscape',
    tags: ['React', 'Three.js', 'WebSockets'],
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    description: 'An interactive 3D web experience exploring futuristic cityscapes.',
    details: 'Developed a real-time multiplayer environment using React for the UI, Three.js for rendering, and WebSockets for communication. Focused on performance optimization and creating an immersive user experience with custom shaders and post-processing effects.'
  },
  {
    id: 2,
    title: 'Neon Grid Systems',
    tags: ['Next.js', 'Tailwind CSS', 'Figma'],
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    description: 'A design system and component library for a tech startup.',
    details: 'Led the design and development of a comprehensive design system. Created reusable components with Next.js and styled them with Tailwind CSS, ensuring accessibility and consistency across all digital products. The initial design was prototyped in Figma.'
  },
  {
    id: 3,
    title: 'Quantum Analytics',
    tags: ['TypeScript', 'GraphQL', 'Data Viz'],
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    description: 'A data visualization platform for complex datasets.',
    details: 'Built a highly interactive dashboard to visualize quantum computing data. Used D3.js and React to create custom charts and graphs, powered by a GraphQL API for efficient data fetching. The entire frontend was built with TypeScript for type safety.'
  },
  {
    id: 4,
    title: 'Holo-Marketing Suite',
    tags: ['React Native', 'UI/UX'],
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    description: 'A mobile application for an AR marketing company.',
    details: 'Designed and developed a cross-platform mobile app using React Native. The app allows users to create and view augmented reality marketing campaigns. Focused on a seamless user experience and intuitive interface design.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Lead Creative Technologist',
    company: 'Nexus Innovations',
    period: '2020 - Present',
    description: 'Leading a team of developers and designers to build cutting-edge web experiences. Pushing the boundaries of browser technology with Three.js and WebGL.'
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Quantum Dynamics',
    period: '2017 - 2020',
    description: 'Specialized in building complex user interfaces and data visualization tools for scientific applications. Mentored junior developers and established best practices for code quality.'
  },
  {
    role: 'UI/UX Designer & Developer',
    company: 'Digital Horizon',
    period: '2014 - 2017',
    description: 'Worked in a hybrid role, designing user interfaces in Adobe XD and Figma, and then implementing them using React and CSS frameworks.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their ability to blend technical expertise with a keen design eye is unparalleled. The final product exceeded all our expectations.",
    author: 'Jane Doe',
    role: 'CEO, Nexus Innovations'
  },
  {
    quote: "A true professional and a pleasure to work with. They transformed our complex data into an intuitive and beautiful platform.",
    author: 'John Smith',
    role: 'Lead Scientist, Quantum Dynamics'
  },
  {
    quote: "They are not just a developer; they are an experience builder. Their passion for creating memorable digital interactions is contagious.",
    author: 'Emily White',
    role: 'Product Manager, Digital Horizon'
  }
];
