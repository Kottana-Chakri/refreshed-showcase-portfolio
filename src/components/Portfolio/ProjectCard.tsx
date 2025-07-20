import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  role: string;
  duration: string;
  teamSize?: string;
  features: string[];
}

const ProjectCard = ({ 
  title, 
  description, 
  longDescription,
  technologies, 
  image, 
  githubUrl, 
  liveUrl, 
  role, 
  duration, 
  teamSize,
  features 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-large hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          {liveUrl && (
            <Button
              variant="secondary"
              size="sm"
              className="bg-accent/90 backdrop-blur-sm hover:bg-accent text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="bg-tech-bg text-white">
            {role}
          </Badge>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {longDescription}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            {teamSize && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{teamSize}</span>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:shadow-glow"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
          {liveUrl && (
            <Button 
              variant="outline" 
              className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;