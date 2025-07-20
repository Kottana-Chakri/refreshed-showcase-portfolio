import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Name and Title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Chakri Kottana</h3>
            <p className="text-primary-foreground/80">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Kottana-Chakri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="mailto:contact@chakrikottana.dev"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 group-hover:text-accent transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/chakri-kottana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a 
              href="#projects" 
              className="hover:text-accent transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="hover:text-accent transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              href="https://github.com/Kottana-Chakri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-primary-foreground/20"></div>

          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Chakri Kottana. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 flex items-center justify-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-400" /> using React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Tech Stack Note */}
          <div className="text-xs text-primary-foreground/50 text-center max-w-md">
            This portfolio showcases modern web development practices including responsive design, 
            smooth animations, and accessibility considerations.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;