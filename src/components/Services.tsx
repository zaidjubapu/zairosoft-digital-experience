import { Code, Smartphone, Globe, Brain, Cloud, Settings } from 'lucide-react';
import serviceSoftware from '@/assets/service-software.jpg';
import serviceMobile from '@/assets/service-mobile.jpg';
import serviceWeb from '@/assets/service-web.jpg';
import serviceAI from '@/assets/service-ai.jpg';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
      image: serviceSoftware,
      features: ['Enterprise Applications', 'API Development', 'System Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      image: serviceMobile,
      features: ['Native Development', 'Cross-Platform', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge technologies and best practices.',
      image: serviceWeb,
      features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce Solutions']
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered features to give your business a competitive advantage.',
      image: serviceAI,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined deployment processes for reliable performance.',
      image: serviceSoftware,
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Microservices']
    },
    {
      icon: Settings,
      title: 'SaaS Platforms',
      description: 'Complete Software-as-a-Service solutions from conception to deployment and maintenance.',
      image: serviceWeb,
      features: ['Multi-tenant Architecture', 'Subscription Management', 'Analytics Dashboard']
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help businesses innovate, 
            scale, and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;