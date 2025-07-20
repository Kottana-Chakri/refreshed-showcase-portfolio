import { Code, Lightbulb, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Expertise in modern web technologies from React frontend to Node.js backend, creating seamless end-to-end solutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Integration",
      description: "Passionate about leveraging artificial intelligence to enhance user experiences and solve complex problems."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "User-Centric Design",
      description: "Focus on creating intuitive, accessible, and performant applications that prioritize user experience."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Committed to building fast, scalable applications with clean architecture and modern best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a strong focus on creating innovative, 
              AI-powered web applications that solve real-world problems and enhance user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Development Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in web development is driven by a fascination with how technology can 
                  transform ideas into powerful, user-friendly applications. I specialize in modern 
                  web technologies and have a particular passion for integrating AI capabilities 
                  to create smarter, more intuitive user experiences.
                </p>
                <p>
                  Through projects like <strong className="text-accent">KickStartX</strong> and 
                  <strong className="text-accent"> Fin-AI</strong>, I've demonstrated my ability 
                  to build comprehensive solutions that combine robust backend architecture with 
                  engaging frontend experiences, always with a focus on performance and scalability.
                </p>
                <p>
                  I believe in continuous learning and staying at the forefront of technology trends, 
                  particularly in areas like Progressive Web Apps, AI integration, and modern 
                  development practices that prioritize both developer experience and end-user satisfaction.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {highlights.map((highlight, index) => (
                <Card 
                  key={highlight.title}
                  className="group bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-large hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex justify-center mb-3">
                      {highlight.icon}
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-accent p-8 rounded-2xl shadow-glow max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                I'm always excited to collaborate on innovative projects that push the boundaries 
                of what's possible with modern web technologies and AI integration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-8 py-3 bg-white text-accent rounded-full font-semibold hover:shadow-large transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;