import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'zairosoftware@gmail.com',
      description: 'Send us your project details'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+971566554878',
      description: 'Speak with our team directly'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Office 102, building no 6, business bay, dubai ,uae',
      description: 'Our main headquarters'
    }
  ];

  const stats = [
    { icon: Clock, label: 'Response Time', value: '< 24 Hours' },
    { icon: Users, label: 'Team Members', value: '50+ Experts' },
    { icon: Globe, label: 'Global Reach', value: '25+ Countries' }
  ];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Ready to transform your ideas into powerful software solutions? 
            Let's discuss your project and explore how we can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="card-tech">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-gradient font-medium mb-1">{info.detail}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">Why Choose Us</h4>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-gradient">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Location</h4>
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;