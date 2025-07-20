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
              Adaptable technologist with a passion for cross-domain innovation and continuous learning. 
              My diverse background spanning 3D animation, web development, cybersecurity, and database design 
              has cultivated a unique problem-solving approach that draws from multiple perspectives.
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
                  While I may not claim mastery in any single field, my technical versatility across Python, 
                  C++, JavaScript, and cloud technologies like AWS enables me to rapidly adapt to new challenges 
                  and collaborate effectively across different teams. My experience spans web technologies including 
                  HTML5, CSS3, React.js, Tailwind, FastAPI, and Node.js, as well as databases like MySQL and MongoDB.
                </p>
                <p>
                  My experience with tools ranging from Blender and Canva to Burp Suite and Kali Linux reflects 
                  my curiosity-driven approach to technology. Rather than being constrained by traditional boundaries, 
                  I leverage this breadth of knowledge to identify innovative connections between disciplines that 
                  others might miss. Through projects like <strong className="text-accent">KickStartX</strong> and 
                  <strong className="text-accent"> Fin-AI</strong>, I've demonstrated this cross-domain approach.
                </p>
                <p>
                  I thrive in environments that value learning agility and fresh perspectives, where my 
                  multi-disciplinary background becomes a catalyst for breakthrough thinking. What drives me most 
                  is the opportunity to grow alongside emerging technologies while contributing to meaningful 
                  projects that benefit from diverse technical insights.
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