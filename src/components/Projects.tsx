import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable multi-vendor marketplace with advanced analytics and AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Web Application'
    },
    {
      title: 'FinTech Mobile App',
      description: 'Secure banking application with biometric authentication and real-time transaction tracking.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Blockchain', 'ML'],
      category: 'Mobile App'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence platform with predictive analytics and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Python', 'TensorFlow', 'React', 'Docker'],
      category: 'AI Solution'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive hospital management system with patient portal and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tech: ['Angular', 'Java', 'MySQL', 'Azure'],
      category: 'Enterprise Software'
    },
    {
      title: 'IoT Fleet Management',
      description: 'Real-time vehicle tracking and fleet optimization platform with predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'IoT'],
      category: 'IoT Solution'
    },
    {
      title: 'EdTech Learning Platform',
      description: 'Interactive online learning platform with video streaming and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Supabase', 'Stripe', 'WebRTC'],
      category: 'SaaS Platform'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-service bg-card">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;