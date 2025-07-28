import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-hero text-white mb-6">
              We Build
              <span className="block text-gradient">Future-Ready</span>
              Software
            </h1>
            <p className="text-subtitle text-white/90 mb-8 max-w-lg">
              Custom software, mobile apps, and AI solutions for startups & enterprises. 
              Transform your ideas into scalable digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Tech Animation Placeholder */}
          <div className="hidden lg:block slide-up">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-pulse flex items-center justify-center">
                  <div className="text-white/80 text-center">
                    <div className="text-6xl font-bold mb-2">💻</div>
                    <p className="text-sm">Future Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;