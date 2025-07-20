import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import developerWorkspace from '@/assets/developer-workspace.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero text-hero-text flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${developerWorkspace})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Chakri Kottana
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
            Multi-Disciplinary Technologist & Innovation Catalyst
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed">
            Adaptable technologist bridging 3D animation, web development, cybersecurity, and database design. 
            Transforming diverse perspectives into innovative solutions with enthusiasm, adaptability, and collaborative spirit.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-soft"
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Kottana-Chakri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Github className="h-6 w-6 text-white group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="mailto:contact@chakrikottana.dev" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 text-white group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/chakri-kottana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Linkedin className="h-6 w-6 text-white group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;