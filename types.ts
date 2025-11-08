
export interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: number;
  title: string;
  tags: string[];
  imageUrl: string;
  description: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
