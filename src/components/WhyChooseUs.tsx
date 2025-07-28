import { Users, Zap, Clock, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'We prioritize understanding your business goals and delivering solutions that drive real results.',
      stats: '500+ Happy Clients'
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Our applications are built to grow with your business, handling increased load and complexity.',
      stats: '99.9% Uptime'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We use agile methodologies to ensure your project is delivered on schedule and within budget.',
      stats: '95% On-Time Rate'
    },
    {
      icon: Trophy,
      title: 'Expert Teams',
      description: 'Our experienced developers use the latest technologies and best practices in software development.',
      stats: '50+ Certifications'
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Zairotech?</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver 
            software solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-tech text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-lg font-bold text-gradient">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help bring your ideas to life with cutting-edge technology.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;