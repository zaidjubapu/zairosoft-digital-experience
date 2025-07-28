import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'Zairotech transformed our business with their exceptional software development. The team delivered beyond our expectations, on time and within budget.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, FinanceFlow',
      company: 'FinanceFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Their AI-powered solution revolutionized our data analytics. The technical expertise and attention to detail were remarkable throughout the project.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, HealthTech Pro',
      company: 'HealthTech Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'Working with Zairotech was seamless. They understood our healthcare requirements and delivered a secure, scalable platform that our users love.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Founder, EduPlatform',
      company: 'EduPlatform',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'The mobile app they developed for us has received outstanding user feedback. Their agile approach and communication made the entire process smooth.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Director, RetailTech Solutions',
      company: 'RetailTech Solutions',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      content: 'Zairotech\'s e-commerce platform increased our sales by 150%. Their technical solutions are innovative and perfectly aligned with business goals.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'VP Engineering, CloudFirst',
      company: 'CloudFirst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      content: 'Their cloud infrastructure setup and DevOps practices have significantly improved our deployment efficiency. Highly recommended for enterprise solutions.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Hear what our clients say about working with us and the results 
            we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-tech relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/30" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;