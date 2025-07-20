import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects and explore new opportunities. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-large">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-6 w-6 text-accent" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:contact@chakrikottana.dev" 
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      contact@chakrikottana.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a 
                      href="https://github.com/Kottana-Chakri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      github.com/Kottana-Chakri
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/chakri-kottana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      linkedin.com/in/chakri-kottana
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">What I'm Looking For</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      Full-stack development opportunities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      AI/ML integration projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      Innovative web application development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      Collaborative team environments
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="Your name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      type="text" 
                      placeholder="Project inquiry / Collaboration opportunity"
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/50 rounded-full">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;