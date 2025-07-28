import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openRoles = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$120k - $160k',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      description: 'Lead development of complex web applications and mentor junior developers.'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$100k - $140k',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      description: 'Build and maintain high-quality mobile applications for iOS and Android.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Remote / Boston',
      type: 'Full-time',
      salary: '$130k - $180k',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
      description: 'Develop machine learning models and AI-powered features for client projects.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Seattle',
      type: 'Full-time',
      salary: '$110k - $150k',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable deployments.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      salary: '$80k - $120k',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      description: 'Create intuitive user interfaces and exceptional user experiences for our applications.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Remote / Chicago',
      type: 'Full-time',
      salary: '$90k - $130k',
      skills: ['Agile', 'Scrum', 'Risk Management', 'Client Relations'],
      description: 'Lead project delivery from inception to completion while ensuring client satisfaction.'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and collaborative team environment.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Benefits',
      description: 'Health insurance, 401(k) matching, and performance-based bonuses.'
    },
    {
      icon: Clock,
      title: 'Growth Opportunities',
      description: 'Continuous learning budget and career advancement programs.'
    }
  ];

  return (
    <section id="careers" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Careers at <span className="text-gradient">Zairotech</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Join our team of passionate developers and help us build the future of software development. 
            We're always looking for talented individuals who share our vision.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Open Positions</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {openRoles.map((role, index) => (
              <div key={index} className="card-service bg-card group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {role.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                        {role.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {role.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gradient">{role.salary}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {role.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button className="btn-secondary w-full">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for exceptional talent. Send us your resume and let's talk!
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Send Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;